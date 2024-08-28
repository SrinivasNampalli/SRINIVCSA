---
layout: base
title: Student Home 
description: Home Page
hide: true
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Journey in Tech and Beyond</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333; /* Ensures text is visible */
        }
        h1 {
            text-align: center;
            margin-top: 20px;
            color: #333; /* Ensures text is visible */
        }
        .intro {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            color: #333; /* Ensures text is visible */
        }
        .gallery {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }
        .gallery img {
            width: 30%;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .projects {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            color: #333; /* Ensures text is visible */
        }
        .projects h2 {
            color: #333; /* Ensures text is visible */
            margin-bottom: 10px;
        }
        .projects ul {
            list-style-type: disc;
            padding-left: 20px;
        }
        .projects ul li {
            margin-bottom: 8px;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Journey in Tech and Beyond</h1>
    
    <div class="intro">
        <p>Hi! I'm an aspiring student with a deep passion for technology and a drive to learn and grow in the field of software development. My primary focus right now is on mastering Java, a language that has captivated my interest due to its versatility and widespread use in various domains such as web development, mobile applications, and large-scale enterprise systems.</p>
        <p>Beyond the world of coding, I have a keen interest in dirt biking. The thrill of speeding through rugged terrains on a dirt bike is unmatched, and it's one of the ways I balance my passion for technology with a love for the outdoors. These activities not only challenge me physically but also teach me discipline, focus, and perseverance—traits that are equally valuable in the tech world. Fr fr ong</p>
    </div>

    <div class="gallery">
        <img src="images/notebooks/foundation/DALL·E 2024-08-22 12.00.40 - A dynamic and realistic image of a soccer player in action, wearing a modern soccer kit with a number on the back. The player is on a green soccer fie.webp">
        <img src="images/notebooks/foundation/DALLE2024-08-2810.51.18-Adynamicanddetailedimageofadirtbikeracingthrougharuggedoff-roadtrail.Thebikeiskickingupdirtasitspeedsthroughaforestedarea-ezgif.com-webp-to-jpg-converter.jpg" alt="Soccer Player">
        <img src="images/notebooks/foundation/DALL·E 2024-08-22 12.01.47 - A dynamic and vibrant battle royale game lobby scene with a character standing in the foreground holding a pickaxe. The character should have a styliz.webp" alt="Battle Royale Lobby">
    </div>

    <div class="projects">
        <h2>My Projects and Aspirations</h2>
        <p>As I delve deeper into Java programming, I have a few exciting projects lined up that I am eager to start:</p>
        <ul>
            <li><strong>Java Game Development:</strong> I'm interested in creating a simple 2D game using Java, focusing on understanding the fundamentals of game loops, collision detection, and sprite animations.</li>
            <li><strong>Web Development with Java:</strong> Building a full-stack web application using Java Spring Boot for the backend and integrating it with modern front-end technologies.</li>
            <li><strong>Android App Development:</strong> Exploring the world of mobile app development by building an Android application that solves real-world problems, possibly in the area of productivity or fitness.</li>
        </ul>
        <p>These projects not only aim to enhance my coding skills but also serve as a portfolio to showcase my abilities as I work towards becoming a proficient software developer.</p>
        <p>On the weekends, when I'm not coding, you can find me out on the trails with my dirt bike, exploring new paths and pushing the limits of both my bike and myself. Just like coding, dirt biking requires a mix of skill, strategy, and constant learning, making it an ideal hobby that complements my tech journey.</p>
    </div>
</body>
</html>

<body>
    <h1>Rock, Paper, Scissors Game</h1>
    <p>Choose your move:</p>
    <button onclick="playGame('rock')">Rock</button>
    <button onclick="playGame('paper')">Paper</button>
    <button onclick="playGame('scissors')">Scissors</button>
    <p id="result"></p>
    <script>
        function playGame(playerChoice) {
            var choices = ["rock", "paper", "scissors"];
            var result = "";
            for (var i = 0; i < 3; i++) {
                var computerChoice = choices[Math.floor(Math.random() * 3)];
                if (playerChoice === computerChoice) {
                    result += "Round " + (i + 1) + ": It's a tie!<br>";
                } else if (
                    (playerChoice === "rock" && computerChoice === "scissors") ||
                    (playerChoice === "paper" && computerChoice === "rock") ||
                    (playerChoice === "scissors" && computerChoice === "paper")
                ) {
                    result += "Round " + (i + 1) + ": You win!<br>";
                } else {
                    result += "Round " + (i + 1) + ": Computer wins!<br>";
                }
            }
            document.getElementById("result").innerHTML = result;
        }
    </script>
</body>


   
