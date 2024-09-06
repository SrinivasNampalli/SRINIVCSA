---
layout: post
toc: True
title: HTML Basics
description: 
menu: nav/CSA_Units/csa_unit1.html
type: ccc
courses: {'csa': {'week': 2}}
permalink: /unit1lessonexamples
---


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML Page</title>
</head>
<body>
    <!-- Header Section -->
    <h1>Welcome to My First HTML Page</h1>
    <h2>This is a subheading</h2>
    <!-- Paragraph Section -->
    <p>Hello! This is a paragraph of text. HTML stands for <strong>Hypertext Markup Language</strong>, and it's the standard language for creating webpages.</p>
    <!-- Adding a Link -->
    <p>Visit <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a> to learn more!</p>
    <!-- Adding an Image -->
    <img src="https://www.example.com/image.jpg" alt="Example Image" width="300" height="200">
    <!-- Unordered List Section -->
    <h3>Things I Like:</h3>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Web Development</li>
    </ul>
    <!-- Ordered List Section -->
    <h3>Steps to Create a Webpage:</h3>
    <ol>
        <li>Learn HTML</li>
        <li>Learn CSS</li>
        <li>Learn JavaScript</li>
        <li>Build Your First Website</li>
    </ol>
    <!-- Table Example -->
    <h3>Simple Table:</h3>
    <table border="1">
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
        <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
        </tr>
        <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
        </tr>
    </table>
    <!-- Form Example -->
    <h3>Contact Form:</h3>
    <form action="/submit" method="POST">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>
        <input type="submit" value="Submit">
    </form>
    <!-- Footer Section -->
    <footer>
        <p>Created by [Your Name] &copy; 2024</p>
    </footer>
</body>
</html>
