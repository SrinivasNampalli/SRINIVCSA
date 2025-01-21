---
layout: post
title: 2D array part 
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
    <title>AP Computer Science Solutions</title>
</head>
<body>
    <h2>Reflection on the Solution</h2>
    <p>The solution for the <strong>isNonZeroRow</strong> method uses a straightforward loop to check for zero values in a given row. The implementation is efficient, iterating only over the specific row index provided as input. By returning <code>false</code> upon encountering the first zero, the method avoids unnecessary further checks, optimizing performance.</p>
    <p>The <strong>resize</strong> method builds upon <code>isNonZeroRow</code> and utilizes a helper method, <code>numNonZeroRows</code>, to determine the number of rows that will be included in the new 2D array. The nested loops efficiently copy data from valid rows into the new array while maintaining the order. Both solutions adhere to the problem constraints and postconditions, ensuring immutability of the original array and correctness of the logic.</p>
    <h2>Solution</h2>
    <pre>
public static boolean isNonZeroRow(int[][] array2D, int r) {
    // Loop through all the columns in the specified row `r`.
    for (int col = 0; col < array2D[0].length; col++) {
        // Check if any element in the row is zero.
        if (array2D[r][col] == 0) {
            // If a zero is found, the row is not "non-zero", so return false.
            return false;
        }
    }
    // If no zeros are found in the row, return true.
    return true;
}
//PART B
public static int[][] resize(int[][] array2D) {
    // Determine the number of rows and columns in the original 2D array.
    int numRows = array2D.length;
    int numCols = array2D[0].length;

    // Use the helper method `numNonZeroRows` to find the number of rows with no zeros.
    // This will determine the size of the new 2D array.
    int[][] result = new int[numNonZeroRows(array2D)][numCols];

    // Initialize the index for the new array to keep track of where to copy rows.
    int newRowIndex = 0;

    // Loop through each row in the original 2D array.
    for (int r = 0; r < numRows; r++) {
        // Use the helper method `isNonZeroRow` to check if the current row contains no zeros.
        if (isNonZeroRow(array2D, r)) {
            // If the row has no zeros, copy its elements into the `result` array.
            for (int c = 0; c < numCols; c++) {
                result[newRowIndex][c] = array2D[r][c];
            }
            // Move to the next row in the `result` array.
            newRowIndex++;
        }
    }

    // Return the new 2D array containing only rows with no zeros.
    return result;
}

    </pre>
</body>
</html>
