---
layout: post
title: Arraylists HW
type: ccc
toc: False
courses: {'csa': {'week': 13}}
comments: True
---
<pre>
<code>
// Method to clean up data in the temperatures list
public void cleanData(double lower, double upper)
{
    // Loop thru the list backwards so we can safely remove items
    for (int i = temperatures.size() - 1; i >= 0; i--)
    {
        double Temp = temperatures.get(i); // Get the current temperature
        if (Temp < lower || Temp > upper)  // Check if it's out of range
        {
            temperatures.remove(i); // get rid of it, doesn't meet the criteria
        }
    }
}
Part B
// Finds the longest "heat wave" in the temperature list
public int longestHeatWave(double threshold)
{
    int WaveLength = 0; // to keep track of current streak of hot days
    int maxWaveLength = 0; // longest streak we've found so far

    for (double Temp : temperatures) // loop thru every temp
    {
        if (Temp > threshold) 
        {
            WaveLength++; 
            if (WaveLength > maxWaveLength) // update longest streak if necessary
            {
                maxWaveLength = WaveLength;
            }
        }
        else
        {
            WaveLength = 0; // streak is broken, reset to 0
        }
    }
    return maxWaveLength; // give back the longest streak
}
</code>
</pre>

<pre>
<code>
1. The <b>cleanData</b> method:
   - Removes temperatures outside a specified range (lower and upper bounds).
   - Uses a reverse iteration loop to safely remove items from the list without errors.

2. The <b>longestHeatWave</b> method:
   - Finds the longest streak of consecutive temperatures above a given threshold.
   - Keeps track of the current streak and updates the longest streak if needed.

3. Key Techniques:
   - Safe removal from lists using reverse iteration.
   - Tracking consecutive occurrences with counters and resetting when needed.
   - Proper use of loops and conditionals to process list data.
</code>
</pre>
