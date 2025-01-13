---
layout: post
title: Recursion Teamteach
type: ccc
toc: False
courses: {'csa': {'week': 12}}
comments: True
---

<div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #ccc; border-radius: 10px; background-color: #f9f9f9;">
    <h3 style="color: #333;">What is Recursion?</h3>
    <p>
        <strong>Recursion</strong> is a programming technique where a function calls itself 
        to solve smaller instances of the same problem. It continues until a 
        <strong>base case</strong> is reached, which stops the recursive calls.
    </p>
    <p>
        Example: Calculating <strong>factorial</strong> using recursion:
    </p>
    <pre style="background-color: #f9f9f9; padding: 10px; border-radius: 5px; border: 1px solid #ccc;">
<code>
int factorial(int n) {
    if (n == 0) return 1; // Base Case
    return n * factorial(n - 1); // Recursive Case
}
</code>
    </pre>
</div>

<div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #ccc; border-radius: 10px; background-color: #f9f9f9;">
    <h3 style="color: #333;">Difference Between Iterative and Recursive</h3>
    <table style="width: 100%; border-collapse: collapse; text-align: left; border: 1px solid #ccc;">
        <thead>
            <tr style="background-color: #f1f1f1; color: #333;">
                <th>Aspect</th>
                <th>Iterative</th>
                <th>Recursive</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Definition</strong></td>
                <td>Uses loops (for, while) to repeat steps.</td>
                <td>Function calls itself to solve smaller subproblems.</td>
            </tr>
            <tr>
                <td><strong>Memory</strong></td>
                <td>Uses less memory, no function call overhead.</td>
                <td>Uses more memory due to call stack.</td>
            </tr>
            <tr>
                <td><strong>Code</strong></td>
                <td>Often longer for complex problems.</td>
                <td>Shorter and more elegant for problems like trees, backtracking.</td>
            </tr>
            <tr>
                <td><strong>Risk</strong></td>
                <td>No stack overflow.</td>
                <td>Risk of stack overflow if base case is not defined or recursion depth is too large.</td>
            </tr>
        </tbody>
    </table>
</div>

<div style="font-family: Arial, sans-serif; line-height: 1.5;">
    <pre style="background-color: #f9f9f9; padding: 10px; border-radius: 5px; border: 1px solid #ccc;">
<code>
class Main {
    public static void main(String[] args) {
        // Call the factorial function and print the result for n = 5
        int result = factorial(5);
        System.out.println("Factorial of 5 is: " + result);
    }
    /**
     * Recursive function to calculate the factorial of a number.
     * @param n the number for which the factorial is calculated
     * @return factorial of n
     */
    public static int factorial(int n) {
        // Base Case: If n == 0, the factorial is 1 (this stops the recursion).
        if (n == 0) {
            return 1;
        }

        // Recursive Case: Factorial of n = n * factorial(n-1).
        return n * factorial(n - 1);
    }
}
</code>
    </pre>
    <h3 style="color: #333;">Explanation (Line-by-Line)</h3>
    <p><strong>Main Method:</strong></p>
    <ul>
        <li><code>int result = factorial(5);</code> - Calls the <code>factorial</code> method with <code>n = 5</code>. This begins the recursion process.</li>
        <li>Prints the result: "Factorial of 5 is: 120".</li>
    </ul>
    <p><strong>Recursive Function - <code>factorial</code>:</strong></p>
    <ul>
        <li><strong>Base Case:</strong> <code>if (n == 0) { return 1; }</code>
            <ul>
                <li>Stops the recursion when <code>n</code> becomes 0.</li>
                <li>Factorial of 0 is defined as 1.</li>
            </ul>
        </li>
        <li><strong>Recursive Case:</strong> <code>return n * factorial(n - 1);</code>
            <ul>
                <li>Function calls itself with <code>n - 1</code>.</li>
                <li>Builds the factorial calculation step-by-step.</li>
            </ul>
        </li>
    </ul>
</div>

<div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #ccc; border-radius: 10px; background-color: #f9f9f9;">
    <h3 style="color: #333;">Problem: Sum of Digits</h3>
    <p>
        Write a recursive function <code>sumOfDigits</code> that takes an integer and returns the sum of its digits.
    </p>
    <p><strong>Example:</strong></p>
    <ul>
        <li><strong>Input:</strong> 1234</li>
        <li><strong>Output:</strong> 10 (because 1 + 2 + 3 + 4 = 10)</li>
    </ul>
</div>

<div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #ccc; border-radius: 10px; background-color: #f9f9f9;">
    <h3 style="color: #333;">Code</h3>
    <pre style="background-color: #f9f9f9; padding: 10px; border-radius: 5px; border: 1px solid #ccc;">
<code>
public class RecursionTraceExample {
    public static void main(String[] args) {
        int number = 1234;
        System.out.println("Sum of digits of " + number + ": " + sumOfDigits(number));
    }

    /**
     * Recursive method to calculate the sum of digits of a number.
     * @param n The number whose digits are to be summed.
     * @return The sum of the digits of n.
     */
    public static int sumOfDigits(int n) {
        // Base Case: If n is a single digit, return n
        if (n < 10) {
            return n;
        }

        // Recursive Case: Add the last digit to the sum of the rest of the digits
        return (n % 10) + sumOfDigits(n / 10);
    }
}
</code>
    </pre>
</div>

<div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #ccc; border-radius: 10px; background-color: #f9f9f9;">
    <h3 style="color: #333;">How to Trace the Recursion for <code>sumOfDigits(1234)</code></h3>
    <ol>
        <li>
            <strong>Initial Call:</strong> <br>
            <code>sumOfDigits(1234)</code> → <code>(1234 % 10) + sumOfDigits(1234 / 10)</code> <br>
            <code>4 + sumOfDigits(123)</code> → Calculation paused.
        </li>
        <li>
            <strong>Next Call:</strong> <br>
            <code>sumOfDigits(123)</code> → <code>(123 % 10) + sumOfDigits(123 / 10)</code> <br>
            <code>3 + sumOfDigits(12)</code> → Calculation paused.
        </li>
        <li>
            <strong>Next Call:</strong> <br>
            <code>sumOfDigits(12)</code> → <code>(12 % 10) + sumOfDigits(12 / 10)</code> <br>
            <code>2 + sumOfDigits(1)</code> → Calculation paused.
        </li>
        <li>
            <strong>Base Case:</strong> <br>
            <code>sumOfDigits(1)</code> → Since <code>1 &lt; 10</code>, return <code>1</code>.
        </li>
        <li>
            <strong>Unwinding the Stack:</strong> <br>
            <code>sumOfDigits(12)</code> → <code>2 + 1 = 3</code> <br>
            <code>sumOfDigits(123)</code> → <code>3 + 3 = 6</code> <br>
            <code>sumOfDigits(1234)</code> → <code>4 + 6 = 10</code>.
        </li>
    </ol>
</div>

<div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #ccc; border-radius: 10px; background-color: #f9f9f9;">
    <h3 style="color: #333;">Visualization of Recursive Calls (Stack)</h3>
    <table style="width: 100%; border-collapse: collapse; text-align: left; border: 1px solid #ccc;">
        <thead>
            <tr style="background-color: #f1f1f1; color: #333;">
                <th>Call Stack (Top to Bottom)</th>
                <th>Value Returned</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>sumOfDigits(1234)</code></td>
                <td>10</td>
            </tr>
            <tr>
                <td><code>sumOfDigits(123)</code></td>
                <td>6</td>
            </tr>
            <tr>
                <td><code>sumOfDigits(12)</code></td>
                <td>3</td>
            </tr>
            <tr>
                <td><code>sumOfDigits(1)</code></td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
</div>

<div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #ccc; border-radius: 10px; background-color: #f9f9f9;">
    <h3 style="color: #333;">Question 1</h3>
    <p>Consider the following method:</p>
    <pre style="background-color: #f9f9f9; padding: 10px; border-radius: 5px; border: 1px solid #ccc;">
<code>
public int sum(int n)
{
    if (n == 0)
        return 0;
    else
        return n + sum(n - 1);
}
</code>
    </pre>
    <p>What will be returned by the call <code>sum(4)</code>?</p>
    <ol type="A">
        <li>4</li>
        <li>6</li>
        <li>10</li>
        <li>15</li>
        <li>20</li>
    </ol>
    <p><strong>Answer:</strong> <span style="color: #333;">C. 10</span></p>
    <p><strong>Explanation:</strong></p>
    <ul>
        <li>The method calculates the sum of all integers from <code>n</code> down to 0 recursively.</li>
        <li>Recursive breakdown:
            <ul>
                <li><code>sum(4) = 4 + sum(3)</code></li>
                <li><code>sum(3) = 3 + sum(2)</code></li>
                <li><code>sum(2) = 2 + sum(1)</code></li>
                <li><code>sum(1) = 1 + sum(0)</code></li>
                <li><code>sum(0) = 0</code> (base case)</li>
            </ul>
        </li>
        <li>Adding them together:
            <ul>
                <li><code>sum(1) = 1</code></li>
                <li><code>sum(2) = 2 + 1 = 3</code></li>
                <li><code>sum(3) = 3 + 3 = 6</code></li>
                <li><code>sum(4) = 4 + 6 = 10</code></li>
            </ul>
        </li>
    </ul>
</div>

<div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #ccc; border-radius: 10px; background-color: #f9f9f9;">
    <h3 style="color: #333;">Question 2</h3>
    <p>Consider the following method:</p>
    <pre style="background-color: #f9f9f9; padding: 10px; border-radius: 5px; border: 1px solid #ccc;">
<code>
public int multiply(int a, int b)
{
    if (b == 0)
        return 0;
    else
        return a + multiply(a, b - 1);
}
</code>
    </pre>
    <p>What will be returned by the call <code>multiply(3, 4)</code>?</p>
    <ol type="A">
        <li>7</li>
        <li>9</li>
        <li>12</li>
        <li>15</li>
        <li>20</li>
    </ol>
    <p><strong>Answer:</strong> <span style="color: #333;">C. 12</span></p>
    <p><strong>Explanation:</strong></p>
    <ul>
        <li>The method recursively multiplies <code>a</code> and <code>b</code> using repeated addition.</li>
        <li>Recursive breakdown:
            <ul>
                <li><code>multiply(3, 4) = 3 + multiply(3, 3)</code></li>
                <li><code>multiply(3, 3) = 3 + multiply(3, 2)</code></li>
                <li><code>multiply(3, 2) = 3 + multiply(3, 1)</code></li>
                <li><code>multiply(3, 1) = 3 + multiply(3, 0)</code></li>
                <li><code>multiply(3, 0) = 0</code> (base case)</li>
            </ul>
        </li>
        <li>Adding them together:
            <ul>
                <li><code>multiply(3, 1) = 3</code></li>
                <li><code>multiply(3, 2) = 3 + 3 = 6</code></li>
                <li><code>multiply(3, 3) = 3 + 6 = 9</code></li>
                <li><code>multiply(3, 4) = 3 + 9 = 12</code></li>
            </ul>
        </li>
    </ul>
</div>
