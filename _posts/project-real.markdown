---
layout: default
modal-id: real/not real
date: 2024-03-04
img: cabin.png
alt: image-alt
project-date: April 2024
client: 
category: 
description: It can be difficult to tell what information is real and what is fake, especially with the rise of AI-generated news and science content and clickbait marketing tactics. We present a few examples for you to read and decide whether the information is real or not real, underlining the importance of reading thoroughly about a topic before believing the first thing you hear!
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Real or Not Real</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 100px;
      background-color: #f5f5f5;
    }
    #statement {
      font-size: 24px;
      margin-bottom: 30px;
    }
    .btn {
      font-size: 18px;
      padding: 10px 20px;
      margin: 5px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      color: white;
    }
    .real-btn {
      background-color: #4CAF50;
    }
    .not-real-btn {
      background-color: #F44336;
    }
  </style>
</head>
<body>

  <div id="statement">The Earth revolves around the Sun.</div>
  
  <button class="btn real-btn" onclick="handleChoice('Real')">Real</button>
  <button class="btn not-real-btn" onclick="handleChoice('Not Real')">Not Real</button>

  <script>
    function handleChoice(choice) {
      if(choice === 'Real') {
        alert("You selected: Real. Correct!");
      } else {
        alert("You selected: Not Real. Incorrect!");
      }
      // Here you can add code to store responses, load next statement, etc.
    }
  </script>

</body>
</html>
