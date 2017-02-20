(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [cljs.user]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

