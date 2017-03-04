(defproject untangled/demo "1.0.0"
  :description "Untangled Cookbook Recipe"
  :url ""
  :license {:name "MIT"
            :url  "https://opensource.org/licenses/MIT"}
  :min-lein-version "2.6.1"
  :verbose true
  :uberjar-name "uberjar.jar"





  :dependencies [

                 [com.datomic/datomic-free "0.9.5206" :exclusions [joda-time com.google.guava/guava]]
                 [com.taoensso/timbre "4.3.1"]
                 [commons-codec "1.10"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [org.omcljs/om "1.0.0-alpha41"]
                 [binaryage/devtools "0.5.2"]
                 [com.cemerick/piggieback "0.2.1"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [juxt/dirwatch "0.2.3"]
                 [navis/untangled-client "0.6.0" :exclusions [org.omcljs/om cljsjs/react org.clojure/tools.reader org.clojure/core.async]] 
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


  :profiles {

             :uberjar {:main      app.core
                       :aot       :all
                       :prep-tasks ["compile"
                                    ["cljsbuild" "once" "production"]]
                      }

            }

)
