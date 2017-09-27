# Euler Number 4

There are tseveral approaches:

 1. find the largest palindrimic integer possible and test if it contains two three digit factors
- work down from there testing each possible largest palindrome for valid answers
 1. take the three digits integers and start multiply them together untill a palindrome is fould then repeat
 1. throw the factors into a matrix

 Let's try to build answer based on two and three

 In psuedo code:

- set `x` = 999
- set `y` = 999
- set `p` = 0
- while `x` >= 100
   - while `y` >= 100
      - set `t` = `x` * `y`
      - if `t` is a palindrome
          - set `p` = maximun `p` & `t`
          - set `x` = `x` - 1
          - set `y` = `x`
      - else
          - set `y` = `y` - 1