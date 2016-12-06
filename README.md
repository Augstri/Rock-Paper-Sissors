# Rock-Paper-Sissors
We are going to make a game.

First install leiningen

Then on the command line enter     

lein


Here is our first function, so type it into lein:

(defn  nextrandomnumber [x] (let [a 77 c 44 m 10] (mod (+ (* a x) c) m)))

to get a random number give it a starting random number:

(nextrandomnumber 88)


