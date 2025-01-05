---
layout: post
title: Recursion Teamteach
type: ccc
toc: False
courses: {'csa': {'week': 12}}
comments: True
---

<div style="font-family: Arial, sans-serif; line-height: 1.5;">
    <pre>
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
    <h3 style="color: #2a9d8f;">Explanation (Line-by-Line)</h3>
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
    <h3 style="color: #2a9d8f;">Visualization of Recursion</h3>
    <p>Let’s compute <code>5!</code> step-by-step:</p>
    <ol>
        <li><code>factorial(5)</code> → <code>5 * factorial(4)</code></li>
        <li><code>factorial(4)</code> → <code>4 * factorial(3)</code></li>
        <li><code>factorial(3)</code> → <code>3 * factorial(2)</code></li>
        <li><code>factorial(2)</code> → <code>2 * factorial(1)</code></li>
        <li><code>factorial(1)</code> → <code>1 * factorial(0)</code></li>
        <li><code>factorial(0)</code> → <code>1</code> (Base case)</li>
    </ol>
    <table style="width: 100%; border-collapse: collapse; text-align: left; margin-top: 10px;">
        <thead>
            <tr style="background-color: #2a9d8f; color: white;">
                <th>Call</th>
                <th>Returns</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>factorial(5)</code></td>
                <td><code>5 * 24 = 120</code></td>
            </tr>
            <tr>
                <td><code>factorial(4)</code></td>
                <td><code>4 * 6 = 24</code></td>
            </tr>
            <tr>
                <td><code>factorial(3)</code></td>
                <td><code>3 * 2 = 6</code></td>
            </tr>
            <tr>
                <td><code>factorial(2)</code></td>
                <td><code>2 * 1 = 2</code></td>
            </tr>
            <tr>
                <td><code>factorial(1)</code></td>
                <td><code>1 * 1 = 1</code></td>
            </tr>
            <tr>
                <td><code>factorial(0)</code></td>
                <td><code>1</code></td>
            </tr>
        </tbody>
    </table>
    <h3 style="color: #2a9d8f;">Tips for Visualizing and Teaching Recursion</h3>
    <ul>
        <li><strong>Use Small Examples:</strong> Start with <code>n = 3</code> to show fewer steps.</li>
        <li><strong>Draw the Stack:</strong> Show how each function call is pushed onto the stack and how it unwinds.</li>
        <li><strong>Highlight Base Case:</strong> Explain its importance in stopping recursion.</li>
        <li><strong>Emphasize Return Values:</strong> Demonstrate how each return value contributes to the final result.</li>
    </ul>
</div>

