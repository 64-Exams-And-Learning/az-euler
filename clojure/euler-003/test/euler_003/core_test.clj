(ns euler-003.core-test
  (:require [clojure.test :refer :all]
            [euler-003.core :refer :all]))

(deftest IsPrime_1_True
  (testing "1 is a prime number"
    (is (isprime(1)))))
