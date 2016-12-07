# Rock-Paper-Sissors
We are going to make a game.

First install leiningen

Then on the command line enter     

lein repl


Here is our first function, so type it into lein:

(defn  nextrandomnumber [x] (let [a 1664525 c 1013904223 m 4294967296] (mod (+ (* a x) c) m)))

   M    A         C
	4294967296	1664525	1013904223






to get a random number give it a starting random number:

(nextrandomnumber 88)

this is a function to get the nth random number

(defn nthrandomnumber [n x]   (if    (== n 0)   x  (nthrandomnumber (- n 1) (nextrandomnumber x))))


to use it, do this:

(nthrandomnumber 100 77)

the first number is n and the second number is the seed number


Game number and player number produces a zero one or two 
(defn zeroonetwo [n x] (mod (nthrandomnumber n x) 3))


ok now we are ready to make the game




(defn  nextrandomnumber [x] (let [a 1664525 c 1013904223 m 4294967296] (mod (+ (* a x) c) m)))
(defn nthrandomnumber [n x]   (if    (== n 0)   x  (nthrandomnumber (- n 1) (nextrandomnumber x))))
(defn zeroonetwo [n x] (mod (nthrandomnumber n x) 3))
(defn addoneandmod [x] (mod (+ 1 x) 3))



(def savebeat -1)

(defn roshambo [player1seed player2seed]
    (while true

            (let [t (System/currentTimeMillis) deltat (- t 1481144390581) beat (quot deltat 600) phase (mod beat 4)]
                (Thread/sleep 50)

                (if (not (== beat savebeat))

                    (let [gamenumber (quot beat 4)] 
                        
                        (def savebeat beat)
                        
                        (println (format " %s     "  (["ro" "sham" "bo" ""] phase) ))
                        
                        (if (== phase 2) (println (format " game %d results      player1 seed = %d random = %d    player2 seed = %d random = %d      "  gamenumber player1seed (zeroonetwo gamenumber player1seed) player2seed (zeroonetwo gamenumber player2seed))))


                        )
                ))))


