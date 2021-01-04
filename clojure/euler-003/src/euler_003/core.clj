(ns euler-003.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
(
  ; The prime factors of 13195 are 5, 7, 13 and 29.
  ; What is the largest prime factor of the number 600851475143 
  ; 
  ; Need a list prime numbers, but no need to calculate the list prior
  ; to usage.  
  ; - generate a list of prime numbers
  ;   - set current value to `1`
  ;   - set isPrime == true
  ;   - add current value to list of primes if isPrime
  ;   - while currentValue <= upperLimit
  ;      - add `1` to current value
  ;      - if currentValue is prime, add to list of primes
  ;   - return list of primes
  ;
  ; - prime test
  ; - set isPrime = true
  ; - foreach number in list of current primes
  ;   - if testValue mod primeNumber == 0 set isPrime false break
  ;   - if textValue div primeNumber < 1 set isPrime false break
  ; - return isPrime
)  
  )
(def isprime 
  (let [primes `(1 2)]
    (fn [testValue] 
      (for [prime primes 
        ; prime
        :while (not= (mod testValue prime) 0)
        ; :while (> (div testValue prime) 1)
        ]
        prime
      ) )
  )
)