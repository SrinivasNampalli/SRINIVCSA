---
layout: page
title: About
permalink: /about/
---


<h1>About Srinivas Nampalli</h1>


<h2>Journey through Life</h2>
<p>Here are a few milestones in my life and education journey: I have made andriod studio app, I have also made a website application and I have skills in java and python previously.</p>

<ul>
  <li>🫂 Middle and High School in San Diego</li>
  <li> 😁Currently studying to improve my software engineering skills, particularly using Android Studio</li>
  <li>🧑‍🚒 Aspiring to become a software engineer and build my own apps</li>
</ul>

<h2>Video Game, Family, and Sports</h2>
<p>I love watching and playing different sports that I found fun.</p>

<p>As a Java developer who’s also into video games, basketball, and following soccer teams like Chelsea, my world feels like a blend of creativity, logic, and excitement. Coding in Java lets me bring ideas to life, especially with how versatile the language is. Whether I’m working on apps or tackling complex back-end systems, it always feels like I’m building something new—kind of like the games I play, where the code is the foundation for immersive worlds.</p>


<h3>Gallery of Pics, scroll to the right for more ...</h3>
<div class="image-gallery">
  <img src="{{site.baseurl}}/images/skysports-mason-mount-graphic_5369617.jpg" alt="Image 1" />
  <img src="{{site.baseurl}}/images/Fortnite1.jpg" alt="Image 2" />
  <img src="{{site.baseurl}}/images/apex.jpg" alt="Image 3" />
  <img src="{{site.baseurl}}/images/basket.jpg" alt="Image 4" />
</div>


<div id="grid_container" class="grid-container">
  <!-- Flags and descriptions populated by JavaScript -->
</div>

<script>
var container = document.getElementById("grid_container");
var living_in_the_world = [
  
  {"flag": "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Prancing_horse.svg/1024px-Prancing_horse.svg.png", "greeting": "Favorite Racing Team", "description": "England - 2 years"},
];

for (const location of living_in_the_world) {
  var gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  
  var img = document.createElement("img");
  img.src = location.flag;
  img.alt = location.flag + " Flag";
  
  var description = document.createElement("p");
  description.textContent = location.description;
  
  var greeting = document.createElement("p");
  greeting.textContent = location.greeting;
  
  gridItem.appendChild(img);
  gridItem.appendChild(description);
  gridItem.appendChild(greeting);
  
  container.appendChild(gridItem);
}
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.grid-item {
  text-align: center;
}

.grid-item img {
  width: 100%;
  height: 100px;
  object-fit: contain;
}

.grid-item p {
  margin: 5px 0;
}

.image-gallery {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
}

.image-gallery img {
  max-height: 150px;
  object-fit: cover;
  border-radius: 5px;
}
</style>

<h1>Trivia Game</h1>
<p>Answer the following trivia questions:</p>

<!-- Trivia Question 1 -->
<div id="question1">
    <p><strong>My favorite Soccer Team</strong></p>
    <button class="option" onclick="checkAnswer(this, 'Chelsea', 'question1')">Paris</button>
    <button class="option" onclick="checkAnswer(this, 'Chelsea', 'question1')">London</button>
    <button class="option" onclick="checkAnswer(this, 'Chelsea', 'question1')">Chelsea</button>
    <button class="option" onclick="checkAnswer(this, 'Chelsea', 'question1')">Berlin</button>
</div>

<!-- Trivia Question 2 -->
<div id="question2">
    <p><strong>Favorite Sport</strong></p>
    <button class="option" onclick="checkAnswer(this, 'Soccer', 'question2')">Soccer</button>
    <button class="option" onclick="checkAnswer(this, 'Soccer', 'question2')">Basketball</button>
    <button class="option" onclick="checkAnswer(this, 'Soccer', 'question2')">Esport</button>
    <button class="option" onclick="checkAnswer(this, 'Soccer', 'question2')">Saturn</button>
</div>

<!-- Trivia Question 3 -->
<div id="question3">
    <p><strong>What is my favorite programming language?</strong></p>
    <button class="option" onclick="checkAnswer(this, 'Java', 'question3')">Java</button>
    <button class="option" onclick="checkAnswer(this, 'Java', 'question3')">Rust</button>
    <button class="option" onclick="checkAnswer(this, 'Java', 'question3')">Python</button>
    <button class="option" onclick="checkAnswer(this, 'Java', 'question3')">C++</button>
</div>

<script>
    function checkAnswer(button, correctAnswer, questionId) {
        var allOptions = document.querySelectorAll("#" + questionId + " .option");
        var userAnswer = button.innerHTML;
        
        allOptions.forEach(function(option) {
            option.disabled = true;  // Disable all options after a selection
            if (option.innerHTML === correctAnswer) {
                option.style.backgroundColor = 'green';  // Correct answer turns green
            } else {
                option.style.backgroundColor = 'red';  // Incorrect answers turn red
            }
        });

        // Add feedback for the selected answer
        if (userAnswer === correctAnswer) {
            button.innerHTML += " ✔️ Correct!";
        } else {
            button.innerHTML += " ❌ Incorrect!";
        }
    }
</script>

<style>
    .option {
        background-color: #ddd;
        padding: 10px;
        margin: 5px;
        border: none;
        cursor: pointer;
        font-size: 16px;
    }
    
    .option:disabled {
        cursor: not-allowed;
    }
</style>
<h2>Click on the Image to Zoom In!</h2>
<div class="gallery">
    <img id="img1" src="https://github.com/user-attachments/assets/e750d0c7-fd9e-4ca7-8275-dc7b8d422466" alt="Image 1" width="200px" height="150px" onclick="zoomImage('img1')">
    <img id="img2" src="https://github.com/user-attachments/assets/fd277431-8fed-4024-b859-0c749c075867" alt="Image 2" width="200px" height="150px" onclick="zoomImage('img2')">
    <img id="img3" src="https://github.com/user-attachments/assets/336ce699-4a41-4c3a-8be5-9b294d3aa0ca" alt="Image 3" width="200px" height="150px" onclick="zoomImage('img3')">
</div>

<style>
    .gallery img {
        transition: transform 0.3s ease;
        cursor: pointer;
    }
    
    .zoomed {
        transform: scale(1.5);
    }
</style>

<script>
    function zoomImage(imageId) {
        var imgElement = document.getElementById(imageId);
        imgElement.classList.toggle('zoomed');
    }
</script>
