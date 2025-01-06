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
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #2a9d8f; border-radius: 10px; background-color: #f4f9f4;">
    <h3 style="color: #2a9d8f;">Question 2</h3>
    <p>Consider the following method:</p>
    <pre style="background-color: #e7f4e4; padding: 10px; border-radius: 5px; border: 1px solid #d4e7d2;">
<code>
public void doSomething(int n)
{
    if (n > 0)
    {
        doSomething(n - 1);
        System.out.print(n);
        doSomething(n - 1);
    }
}
</code>
    </pre>
    <p>What would be output following the call <code>doSomething(3)</code>?</p>
    <ol type="A">
        <li>3211211</li>
        <li>1121213</li>
        <li>1231213</li>
        <li>1213121</li>
        <li>1123211</li>
    </ol>
    <p><strong>Answer:</strong> <span style="color: #2a9d8f;">D. 1213121</span></p>
    <p><strong>Explanation:</strong></p>
    <ul>
        <li>The method recursively calls itself twice for each value of <code>n</code>, producing a tree-like structure of recursive calls.</li>
        <li>For <code>doSomething(3)</code>:
            <ul>
                <li>It first calls <code>doSomething(2)</code>.</li>
                <li><code>doSomething(2)</code> calls <code>doSomething(1)</code>.</li>
                <li><code>doSomething(1)</code> calls <code>doSomething(0)</code>, which does nothing, then prints 1 and calls <code>doSomething(0)</code> again.</li>
                <li>Back in <code>doSomething(2)</code>, it prints 2 and calls <code>doSomething(1)</code>, which produces "121".</li>
                <li>Finally, back in <code>doSomething(3)</code>, it prints 3 and calls <code>doSomething(2)</code> again, which repeats the process for "121".</li>
            </ul>
        </li>
        <li>The final output is <code>1213121</code>.</li>
    </ul>
</div>

<br>

<div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #e76f51; border-radius: 10px; background-color: #fdf6f5;">
    <h3 style="color: #e76f51;">Questions 5-6</h3>
    <p>Refer to the following method:</p>
    <pre style="background-color: #f9ecec; padding: 10px; border-radius: 5px; border: 1px solid #f2d1d1;">
<code>
/** Precondition: n is a positive integer. */
public int t(int n)
{
    if (n == 1 || n == 2)
        return 2 * n;
    else
        return t(n - 1) - t(n - 2);
}
</code>
    </pre>
    <p><strong>Question 5:</strong> What will be returned by <code>t(5)</code>?</p>
    <ol type="A">
        <li>4</li>
        <li>2</li>
        <li>0</li>
        <li>-2</li>
        <li>-4</li>
    </ol>
    <p><strong>Answer:</strong> <span style="color: #e76f51;">E. -4</span></p>
    <p><strong>Explanation:</strong></p>
    <ul>
        <li>The method calculates values recursively, using <code>t(n - 1)</code> and <code>t(n - 2)</code>:</li>
        <li>Base cases:
            <ul>
                <li><code>t(1) = 2</code></li>
                <li><code>t(2) = 4</code></li>
            </ul>
        </li>
        <li>Recursive calculations:
            <ul>
                <li><code>t(3) = t(2) - t(1) = 4 - 2 = 2</code></li>
                <li><code>t(4) = t(3) - t(2) = 2 - 4 = -2</code></li>
                <li><code>t(5) = t(4) - t(3) = -2 - 2 = -4</code></li>
            </ul>
        </li>
    </ul>
    <p><strong>Question 6:</strong> For the method call <code>t(6)</code>, how many calls to <code>t</code> will be made, including the original call?</p>
    <ol type="A">
        <li>6</li>
        <li>7</li>
        <li>11</li>
        <li>15</li>
        <li>25</li>
    </ol>
    <p><strong>Answer:</strong> <span style="color: #e76f51;">E. 25</span></p>
    <p><strong>Explanation:</strong></p>
    <ul>
        <li>To compute <code>t(6)</code>, the recursion tree looks like this:
            <ul>
                <li><code>t(6)</code> calls <code>t(5)</code> and <code>t(4)</code>.</li>
                <li><code>t(5)</code> calls <code>t(4)</code> and <code>t(3)</code>.</li>
                <li><code>t(4)</code> calls <code>t(3)</code> and <code>t(2)</code>.</li>
                <li><code>t(3)</code> calls <code>t(2)</code> and <code>t(1)</code>.</li>
            </ul>
        </li>
        <li>Counting all calls, there are 25 total recursive calls.</li>
    </ul>
</div>

</div>

