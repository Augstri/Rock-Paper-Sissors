web: echo "GOOOFUS!!!";lein upgrad;lein with-profile uberjar deps :tree;java $JVM_OPTS -Dconfig=config/prod.edn -cp target/uberjar.jar clojure.main -m app.web
