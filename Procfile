web: echo "GOOOFUS!!!";lein deps :tree;jar tf target/uberjar.jar;java $JVM_OPTS -Dconfig=config/prod.edn -cp target/uberjar.jar clojure.main -m app.web
