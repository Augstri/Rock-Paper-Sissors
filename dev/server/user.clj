(ns user
  (:require
    [clojure.pprint :refer (pprint)]
    [clojure.stacktrace :refer (print-stack-trace)]
    [clojure.tools.namespace.repl :refer [disable-reload! refresh clear set-refresh-dirs]]
    [com.stuartsierra.component :as component]
    [app.system :as sys]
    [taoensso.timbre :as timbre]))

(set-refresh-dirs "dev/server" "src/server" "src/shared")

(defonce system (atom nil))

(defn init
  "Create a web server from configurations. Use `start` to start it."
  []
  (reset! system (sys/make-system)))

(defn start "Start (an already initialized) web server." [] (swap! system component/start))

(defn stop "Stop the running web server." []
  (when @system
    (swap! system component/stop)
    (reset! system nil)))

(defn go "Load the overall web server system and start it." []
  (init)
  (start))

(defn reset
  "Stop the web server, refresh all namespace source code from disk, then restart the web server."
  []
  (stop)
  (refresh :after 'user/go))
