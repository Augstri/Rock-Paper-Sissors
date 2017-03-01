(defproject untangled/demo "1.0.0"
  :description "Untangled Cookbook Recipe"
  :url ""
  :license {:name "MIT"
            :url  "https://opensource.org/licenses/MIT"}
  :min-lein-version "2.6.1"
  :verbose true
  :uberjar-name "uberjar.jar"





  :dependencies [

                 [navis/untangled-client "0.6.0" :exclusions [cljsjs/react org.omcljs/om]]
                 [com.datomic/datomic-free "0.9.5206" :exclusions [joda-time com.google.guava/guava]]
                 [com.taoensso/timbre "4.3.1"]
                 [commons-codec "1.10"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [org.omcljs/om "1.0.0-alpha41"]
                 [binaryage/devtools "0.5.2"]
                 [figwheel-sidecar "0.5.9" :exclusions [ring/ring-core joda-time org.clojure/tools.reader]]
                 [com.cemerick/piggieback "0.2.1"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [juxt/dirwatch "0.2.3"]
                 [navis/untangled-server "0.5.1"]
                 [navis/untangled-spec "0.3.6"]
                 [navis/untangled-websockets "0.2.0"]

                 ]


  :plugins [[lein-cljsbuild "1.1.3"]]

  :source-paths ["dev/server" "src/server"]

  :jvm-opts ["-server" "-Xmx1024m" "-Xms512m" "-XX:-OmitStackTraceInFastThrow"]

  :clean-targets ^{:protect false} ["resources/public/js" "target"]

  :cljsbuild {:builds
              [



              {:id           "dev"
                :source-paths ["src/client" "dev/client"]
                :figwheel     true
                :compiler     {:main                 cljs.user
                               :asset-path           "js/compiled/dev"
                               :output-to            "resources/public/js/compiled/app.js"
                               :output-dir           "resources/public/js/compiled/dev"
                               :optimizations        :none
                               :parallel-build       false
                               :verbose              false
                               :recompile-dependents true
                               :source-map-timestamp true}}

              {:id           "production"
                        :source-paths ["src/client"]
                        :compiler     {:verbose         true
                                       :output-to       "resources/public/js/compiled/app.min.js"
                                       :output-dir      "resources/public/js/compiled"
                                       :pretty-print    false
                                       :closure-defines {goog.DEBUG false}
                                       :source-map      "resources/public/js/compiled/app.min.js.map"
                                       :elide-asserts   true
                                       :optimizations   :advanced}}



                               ]}

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles {

             :uberjar {:main      app.core
                       :aot       :all
                       :prep-tasks ["compile"
                                    ["cljsbuild" "once" "production"]]
                      }

            }


  :repl-options {:init-ns          user
                 :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
)
