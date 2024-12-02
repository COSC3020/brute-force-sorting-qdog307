# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime complexity of the algorithm I implemented is $O(n! * n)$. This is because the algorithm generates all permutations of an array of length $n$, which takes $O(n!)$, and then checks each permutation to see if it is sorted. The `isSorted` function has a complexity of $O(n)$, so checking all permutations results in a total complexity of $O(n! * n)$. Contary to my eailer statemnet the algorithm does not check for a sorted permuation duirng generation. Instead it generates them all so the best case remains the worst case complexity. In the worst case, such as when the array is in reverse order, the algorithm generates and check all $n!$ permutations, resulting in the full $O(n! * n)$ complexity.If permutations were generated randomly without memory instead of systematically, the behavior would change. Each random permutation has a $1/n!$ chance of being sorted, so it could find the sorted array in fewer attempts by chance. However, there’s no guarantee that the sorted permutation would be found within a finite number of trials. On average, the complexity remains $O(n! * n)$, but randomness introduces variability in performance.In summary, the systematic approach guarantees finding the solution but is computationally expensive. Random generation adds variability and may occasionally be faster but lacks any guarantee of success within practical limits.

I referenced the lecture slides provided, I looked online at  
https://www.geeksforgeeks.org/brute-force-approach-and-its-pros-and-cons/# for a more in-depth explanation and understanding the pros and cons. This page helped conclude complexity. I used https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/ to understand permuations better. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All the work is my own, except were stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

