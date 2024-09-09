---
layout: page
title: About
permalink: /about/
---


<h1>About Srinivas Nampalli</h1>

<p>Hi, my name is Srinivas Nampalli. I love cars, motorsports, and playing video games. I am currently using Android Studio and working towards becoming a software engineer focused on app development.</p>

<p>I’m also a huge fan of soccer, supporting teams like PSG and Chelsea. I have a strong interest in investing in stocks and learning more about the money market. Additionally, I'm saving up to buy a dirtbike in the near future!</p>

<h2>Journey through Life</h2>
<p>Here are a few milestones in my life and education journey: I have made andriod studio app, I have also made a website application and I have skills in java and python previously.</p>

<ul>
  <li>🏫 Middle and High School in San Diego</li>
  <li>🎓 Currently studying to improve my software engineering skills, particularly using Android Studio</li>
  <li>🏢 Aspiring to become a software engineer and build my own apps</li>
</ul>

<h2>Video Game, Family, and Sports</h2>
<p>I love watching and playing different sports that I found fun.</p>

<p>My mother told me that I have Danish, English, and Irish heritage, and I have been looking into my family tree. My family is pretty big: I have been married twice, and my first wife passed away. We have had 5 kids, 4 adopted by me and 1 biological, and we are also blessed with three grandkids. My grandkids call me "Abuelito."</p>

<p>The gallery below showcases some of my family, culture, and fun memories.</p>

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


   