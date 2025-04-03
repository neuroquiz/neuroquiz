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

<div class="statement">Rectal distensions are a common way to study visceral pain.</div>

<div class="button-group">
  <button class="real-btn" onclick="selectChoice('Real')">Real</button>
  <button class="not-real-btn" onclick="selectChoice('Not Real')">Not real</button>
</div>

<button class="confirm-btn" onclick="confirmChoice()">Confirm</button>

<div id="answer" class="answer">
  <strong>Real.</strong> The study explored whether a brief relaxation exercise could influence placebo or nocebo effects in visceral pain induced by rectal balloon distension. Participants received neutral saline infusions after either performing relaxation exercises or no relaxation, combined with positive, negative, or neutral treatment suggestions. Results showed that relaxation enhanced placebo responses (reduced visceral pain from positive suggestions) but did not significantly alter nocebo responses. This indicates that relaxation exercises could boost positive psychological influences specifically in managing visceral pain. 
  [DOI: 10.3389/fpsyt.2019.00144](https://doi.org/10.3389/fpsyt.2019.00144)
</div>

<style>
.statement {
  font-size: 20px;
  margin-bottom: 20px;
}
.button-group {
  margin-bottom: 20px;
}
button {
  font-size: 16px;
  padding: 8px 16px;
  margin: 0 10px;
  cursor: pointer;
  border: none;
  color: white;
  border-radius: 5px;
}
.real-btn { background-color: #4CAF50; }
.not-real-btn { background-color: #f44336; }
.confirm-btn { background-color: #008CBA; margin-top: 20px; }
.answer {
  font-size: 16px;
  display: none;
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  background-color: #e0f7fa;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
let userChoice = null;

function selectChoice(choice) {
  userChoice = choice;
  document.querySelectorAll('.button-group button').forEach(btn => btn.style.opacity = '0.6');
  event.target.style.opacity = '1';
}

function confirmChoice() {
  if (userChoice) {
    document.getElementById('answer').style.display = 'block';
  } else {
    alert("Please select an option first.");
  }
}
</script>
