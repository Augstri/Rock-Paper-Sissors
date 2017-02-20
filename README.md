# Websocekts and Server Push

Simple chat app showing how to integrate [untangled-websocekts](https://github.com/untangled-web/untangled-websockets)

You can check out the readme for the usage of `untangled-websockets` or check out the source code here.

### Running

## Running Figwheel:

```
lein run -m clojure.main script/figwheel.clj
```

If the recipe has only a UI, then browse to: http://localhost:3449. If
the recipe is full-stack, continue to the next section.

## Running the server:

```
lein run -m clojure.main
user> (go)
```

You should now be able to see the app at: http://localhost:8080.

