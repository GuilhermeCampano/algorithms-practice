# Problem Solving Patterns

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer

## Frequency Counter Pattern

Pattern uses objects or sets to collect values/frequencies of their values.

Can often avoid need for nested loops or O(N^2) operations with arrays/strings. Usually O(n).

Useful for checking multiple pieces of data and need to compare them. See if they consist of the same individual pieces, such as array equality, anagrams, numbers consisting of same digits in just a different order.

Example: sameFrequency.ts

## Multiple Pointers Pattern

One common problem-solving technique in programming involves creating pointers or values that correspond to an index or position within a data structure. These pointers can then move towards the beginning, end, or middle of the structure based on a certain condition.

This approach is particularly efficient when it comes to solving problems with minimal space complexity, as it doesn't require any additional data structures to be created. By manipulating the pointers in this way, you can efficiently search, sort, or filter data within the structure.

Overall, this technique is a powerful tool in any programmer's toolkit, and can be especially useful when dealing with large data sets or performance-critical applications.

Example: countUniqueValues.ts

## Sliding Window Pattern

The Sliding Window pattern is a problem-solving technique that involves creating a window, which can either be an array or a number, that moves from one position to another within a larger data structure. The size of the window remains constant, while its position changes based on a certain condition.

The window can either increase or close depending on the condition. When the window increases, it expands to include additional elements, while a closed window indicates that a new window needs to be created starting from the next position.

This pattern is particularly useful for keeping track of a subset of data within an array or string. By sliding the window over the data structure, you can efficiently process each subset and perform operations such as searching, sorting, or counting.

Overall, the Sliding Window pattern is a powerful tool that can help improve the efficiency of your code when working with large data sets or performance-critical applications.

Example: minSubArray.ts or maxSubArray.ts

## Divide and Conquer Pattern

The Divide and Conquer pattern is a problem-solving technique that involves breaking down a complex problem into smaller, more manageable sub-problems, and then solving each sub-problem independently. This approach can be used to tackle a wide range of problems in computer science, such as sorting, searching, and recursive algorithms.

The basic idea behind the Divide and Conquer pattern is to divide a large problem into smaller sub-problems, solve each sub-problem independently, and then combine the results to obtain the final solution. This is typically done by recursively breaking down the original problem into smaller sub-problems until they are small enough to be solved directly. The solutions to the smaller sub-problems are then combined to obtain the final solution to the original problem.

The advantage of using the Divide and Conquer pattern is that it can reduce the time complexity required to solve a problem, as the sub-problems can often be solved independently in parallel, which can lead to more efficient and scalable solutions. Additionally, it can simplify complex problems and make them easier to understand and solve.

Examples of algorithms that use the Divide and Conquer pattern include quicksort, merge sort, binary search, and the fast Fourier transform. Overall, the Divide and Conquer pattern is a powerful tool in any programmer's toolkit, and can help you tackle even the most complex problems with ease.

Example: searchDivideConquer.ts