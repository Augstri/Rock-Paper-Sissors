# Rock-Paper-Sissors
We are going to make a game.

First install leiningen

Then on the command line enter     

lein


Here is our first function, so type it into lein:

(defn  nextrandomnumber [x] (let [a 77 c 44 m 10] (mod (+ (* a x) c) m)))


to get a random number give it a starting random number:

(nextrandomnumber 88)

this is a function to get the nth random number

(defn nthrandomnumber [n x]   (if    (== n 0)   x  (nthrandomnumber (- n 1) (nextrandomnumber x)))


to use it, do this:

(nthrandomnumber 100 77)

the first number is n and the second number is the seed number




