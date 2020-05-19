In this challenge, you will determine whether a string is funny or not. To determine whether a string is funny, create a copy of the string in reverse e.g. . Iterating through each string, compare the absolute difference in the ascii values of the characters at positions 0 and 1, 1 and 2 and so on to the end. If the list of absolute differences is the same for both strings, they are funny.

Determine whether a give string is funny. If it is, return Funny, otherwise return Not Funny.

For example, given the string `s=lmnop`, the ordinal values of the characters are `[108,109,110,111,112]`, `s reverse=ponml` and the ordinals are `[112,111,110,109,108]`. The absolute differences of the adjacent elements for both strings are `[1,1,1,1]`, so the answer is Funny.
