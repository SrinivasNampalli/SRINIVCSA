---
layout: post
title: 2D array part 2
type: ccc
toc: False
courses: {'csa': {'week': 13}}
comments: True
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2D Array Solution</title>
</head>
<body>
    <h1>Question 4: 2D Array Solution</h1>
    <h2>(a) Repopulate Method</h2>
    <pre>
public void repopulate() {
    // Loop through each row in the 2D grid
    for (int row = 0; row < grid.length; row++) { 

        // Loop through each column in the current row
        for (int col = 0; col < grid[0].length; col++) { 

            // Generate a random integer between 1 and MAX
            int rval = (int)(Math.random() * MAX) + 1; 

            // Ensure the value is divisible by 10 but not 100
            while (rval % 10 != 0 || rval % 100 == 0) { 

                // Generate a new random integer if condition is not met
                rval = (int)(Math.random() * MAX) + 1; 
            }

            // Assign the valid random value to the current cell in the grid
            grid[row][col] = rval; 
        }
    }
}
    </pre>
    <h2>(b) Count Increasing Columns Method</h2>
    <pre>
public int countIncreasingCols() {
    // Initialize counter for columns with increasing values
    int count = 0; 
    // Loop through each column in the grid
    for (int col = 0; col < grid[0].length; col++) { 

        // Assume the column is ordered (increasing) initially
        boolean ordered = true; 

        // Loop through rows in the column starting from the second row
        for (int row = 1; row < grid.length; row++) { 

            // Check if the current value is less than the previous row's value
            if (grid[row][col] < grid[row - 1][col]) { 

                // Mark the column as not ordered
                ordered = false; 
            }
        }

        // If the column is ordered, increment the count
        if (ordered) { 
            count++;
        }
    }

    // Return the total count of columns with increasing values
    return count; 
}
    </pre>
    <h3>Reflection</h3>
    <p>This exercise was a helpful exploration of how to manage 2D arrays in Java. The <code>repopulate</code> method reinforced my understanding of nested loops, validation logic, and working with random numbers. Meanwhile, the <code>countIncreasingCols</code> method provided valuable practice with column-based iteration and condition tracking using boolean variables.</p>

    <p>Through this process, I learned the importance of breaking problems into smaller, manageable parts and ensuring edge cases are accounted for. These methods demonstrated practical ways to work with multidimensional data and solve algorithmic problems effectively.</p>
</body>
</html>
