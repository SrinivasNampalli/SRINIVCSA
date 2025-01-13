---
layout: post
title: Methiods and Controls FRQ 
type: ccc
toc: False
courses: {'csa': {'week': 12}}
comments: True
---


<div style="background-color: #f4f4f4; border: 1px solid #ccc; padding: 10px; border-radius: 5px; font-family: monospace;">
  <pre>
    public int getScore() {
        int score = 0;
        if (levelOne.goalReached()) {
            score = levelOne.getPoints();
            if (levelTwo.goalReached()) {
                score += levelTwo.getPoints();
                if (levelThree.goalReached()) {
                    score += levelThree.getPoints();
                }
            }
        }
        if (isBonus()) {
            score *= 3;
        }
        return score;
    }
    /////PART B
    public int playManyTimes(int num) {
        int max = 0;
        for (int i = 0; i < num; i++) {
            play();
            int score = getScore();
            if (score > max) {
                max = score;
            }
        }
        return max;
    }
  </pre>
  <div style="margin-top: 10px; font-style: italic; color: #333;">
    <strong>Part A and B for Recursion Question</strong> P
  </div>
</div>

<div style="height: 20px;"></div> <!-- Spacer for visual separation -->

<div style="background-color: #f4f4f4; border: 1px solid #ccc; padding: 10px; border-radius: 5px; font-family: monospace;">
  <pre>
    public int calculateFitnessScore() {
        int fitnessScore = 0;

        // Track Cardio
        if (cardio.completed()) {
            fitnessScore += cardio.getCaloriesBurned();
        }

        // Track Strength
        if (strength.completed()) {
            fitnessScore += strength.getReps() * 5;  // Each rep adds 5 points
        }

        // Track Flexibility
        if (flexibility.completed()) {
            fitnessScore += flexibility.getStretchTime(); // Add time spent stretching
        }

        // Apply Bonus if all categories are completed
        if (cardio.completed() && strength.completed() && flexibility.completed()) {
            fitnessScore *= 2; // Double the score
        }

        return fitnessScore;
    }

    public int optimizeFitnessRoutine(int weeks) {
        int maxScore = 0;

        for (int week = 0; week < weeks; week++) {
            simulateWorkoutWeek();  // Simulate workouts for the week
            int score = calculateFitnessScore();

            // Track highest score
            if (score > maxScore) {
                maxScore = score;
            }
        }

        return maxScore;
    }
  </pre>
  <div style="margin-top: 10px; font-style: italic; color: #333;">
    <strong>Extra Hack I made</strong>
  </div>
</div>
