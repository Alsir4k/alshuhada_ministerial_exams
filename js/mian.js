const math2Btn = document.getElementById('math2-btn');
const math3Btn = document.getElementById('math3-btn');
const math4Btn = document.getElementById('math4-btn');
const math5Btn = document.getElementById('math5-btn');
const math6Btn = document.getElementById('math6-btn');
const math7Btn = document.getElementById('math7-btn');
const math9Btn = document.getElementById('math9-btn');
const math10Btn = document.getElementById('math10-btn');

const math2Skills = document.getElementById('math2-skills');
const math3Skills = document.getElementById('math3-skills');
const math4Skills = document.getElementById('math4-skills');
const math5Skills = document.getElementById('math5-skills');
const math6Skills = document.getElementById('math6-skills');
const math7Skills = document.getElementById('math7-skills');
const math9Skills = document.getElementById('math9-skills');
const math10Skills = document.getElementById('math10-skills');

math2Btn.addEventListener('click', function(){
  math2Btn.classList.add("selected");  
  math3Btn.classList.remove("selected");  
  math4Btn.classList.remove("selected");  
  math5Btn.classList.remove("selected");  
  math6Btn.classList.remove("selected");  
  math7Btn.classList.remove("selected");  
  math9Btn.classList.remove("selected");  
  math10Btn.classList.remove("selected");  

  math2Skills.classList.remove("hidden");  
  math3Skills.classList.add("hidden");  
  math4Skills.classList.add("hidden");  
  math5Skills.classList.add("hidden");  
  math6Skills.classList.add("hidden");  
  math7Skills.classList.add("hidden");  
  math9Skills.classList.add("hidden");  
  math10Skills.classList.add("hidden");  
});

math3Btn.addEventListener('click', function(){
  math3Btn.classList.add("selected");  
  math2Btn.classList.remove("selected");  
  math4Btn.classList.remove("selected");  
  math5Btn.classList.remove("selected");  
  math6Btn.classList.remove("selected");  
  math7Btn.classList.remove("selected");  
  math9Btn.classList.remove("selected");  
  math10Btn.classList.remove("selected");  

  math3Skills.classList.remove("hidden");  
  math2Skills.classList.add("hidden");  
  math4Skills.classList.add("hidden");  
  math5Skills.classList.add("hidden");  
  math6Skills.classList.add("hidden");  
  math7Skills.classList.add("hidden");  
  math9Skills.classList.add("hidden");  
  math10Skills.classList.add("hidden");  
});

math4Btn.addEventListener('click', function(){
  math4Btn.classList.add("selected");  
  math2Btn.classList.remove("selected");  
  math3Btn.classList.remove("selected");  
  math5Btn.classList.remove("selected");  
  math6Btn.classList.remove("selected");  
  math7Btn.classList.remove("selected");  
  math9Btn.classList.remove("selected");  
  math10Btn.classList.remove("selected");  

  math4Skills.classList.remove("hidden");  
  math2Skills.classList.add("hidden");  
  math3Skills.classList.add("hidden");  
  math5Skills.classList.add("hidden");  
  math6Skills.classList.add("hidden");  
  math7Skills.classList.add("hidden");  
  math9Skills.classList.add("hidden");  
  math10Skills.classList.add("hidden");  
});

math5Btn.addEventListener('click', function(){
  math5Btn.classList.add("selected");  
  math2Btn.classList.remove("selected");  
  math3Btn.classList.remove("selected");  
  math4Btn.classList.remove("selected");  
  math6Btn.classList.remove("selected");  
  math7Btn.classList.remove("selected");  
  math9Btn.classList.remove("selected");  
  math10Btn.classList.remove("selected");  

  math5Skills.classList.remove("hidden");  
  math2Skills.classList.add("hidden");  
  math3Skills.classList.add("hidden");  
  math4Skills.classList.add("hidden");  
  math6Skills.classList.add("hidden");  
  math7Skills.classList.add("hidden");  
  math9Skills.classList.add("hidden");  
  math10Skills.classList.add("hidden");  
});

math6Btn.addEventListener('click', function(){
  math6Btn.classList.add("selected");  
  math2Btn.classList.remove("selected");  
  math3Btn.classList.remove("selected");  
  math4Btn.classList.remove("selected");  
  math5Btn.classList.remove("selected");  
  math7Btn.classList.remove("selected");  
  math9Btn.classList.remove("selected");  
  math10Btn.classList.remove("selected");  

  math6Skills.classList.remove("hidden");  
  math2Skills.classList.add("hidden");  
  math3Skills.classList.add("hidden");  
  math4Skills.classList.add("hidden");  
  math5Skills.classList.add("hidden");  
  math7Skills.classList.add("hidden");  
  math9Skills.classList.add("hidden");  
  math10Skills.classList.add("hidden");  
});

math7Btn.addEventListener('click', function(){
  math7Btn.classList.add("selected");  
  math2Btn.classList.remove("selected");  
  math3Btn.classList.remove("selected");  
  math4Btn.classList.remove("selected");  
  math5Btn.classList.remove("selected");  
  math6Btn.classList.remove("selected");  
  math9Btn.classList.remove("selected");  
  math10Btn.classList.remove("selected");  

  math7Skills.classList.remove("hidden");  
  math2Skills.classList.add("hidden");  
  math3Skills.classList.add("hidden");  
  math4Skills.classList.add("hidden");  
  math5Skills.classList.add("hidden");  
  math6Skills.classList.add("hidden");  
  math9Skills.classList.add("hidden");  
  math10Skills.classList.add("hidden");  
});

math9Btn.addEventListener('click', function(){
  math9Btn.classList.add("selected");  
  math2Btn.classList.remove("selected");  
  math3Btn.classList.remove("selected");  
  math4Btn.classList.remove("selected");  
  math5Btn.classList.remove("selected");  
  math6Btn.classList.remove("selected");  
  math7Btn.classList.remove("selected");  
  math10Btn.classList.remove("selected");  

  math9Skills.classList.remove("hidden");  
  math2Skills.classList.add("hidden");  
  math3Skills.classList.add("hidden");  
  math4Skills.classList.add("hidden");  
  math5Skills.classList.add("hidden");  
  math6Skills.classList.add("hidden");  
  math7Skills.classList.add("hidden");  
  math10Skills.classList.add("hidden");  
});

math10Btn.addEventListener('click', function(){
  math10Btn.classList.add("selected");  
  math2Btn.classList.remove("selected");  
  math3Btn.classList.remove("selected");  
  math4Btn.classList.remove("selected");  
  math5Btn.classList.remove("selected");  
  math6Btn.classList.remove("selected");  
  math7Btn.classList.remove("selected");  
  math9Btn.classList.remove("selected");  

  math10Skills.classList.remove("hidden");  
  math2Skills.classList.add("hidden");  
  math3Skills.classList.add("hidden");  
  math4Skills.classList.add("hidden");  
  math5Skills.classList.add("hidden");  
  math6Skills.classList.add("hidden");  
  math7Skills.classList.add("hidden");  
  math9Skills.classList.add("hidden");  
});



const science2Btn = document.getElementById('science2-btn');
const science3Btn = document.getElementById('science3-btn');
const science4Btn = document.getElementById('science4-btn');
const science5Btn = document.getElementById('science5-btn');
const science6Btn = document.getElementById('science6-btn');
const science7Btn = document.getElementById('science7-btn');
const science9Btn = document.getElementById('science9-btn');
const science10Btn = document.getElementById('science10-btn');

const science2Skills = document.getElementById('science2-skills');
const science3Skills = document.getElementById('science3-skills');
const science4Skills = document.getElementById('science4-skills');
const science5Skills = document.getElementById('science5-skills');
const science6Skills = document.getElementById('science6-skills');
const science7Skills = document.getElementById('science7-skills');
const science9Skills = document.getElementById('science9-skills');
const science10Skills = document.getElementById('science10-skills');

science2Btn.addEventListener('click', function(){
  science2Btn.classList.add("selected");  
  science3Btn.classList.remove("selected");  
  science4Btn.classList.remove("selected");  
  science5Btn.classList.remove("selected");  
  science6Btn.classList.remove("selected");  
  science7Btn.classList.remove("selected");  
  science9Btn.classList.remove("selected");  
  science10Btn.classList.remove("selected");  

  science2Skills.classList.remove("hidden");  
  science3Skills.classList.add("hidden");  
  science4Skills.classList.add("hidden");  
  science5Skills.classList.add("hidden");  
  science6Skills.classList.add("hidden");  
  science7Skills.classList.add("hidden");  
  science9Skills.classList.add("hidden");  
  science10Skills.classList.add("hidden");  
});

science3Btn.addEventListener('click', function(){
  science3Btn.classList.add("selected");  
  science2Btn.classList.remove("selected");  
  science4Btn.classList.remove("selected");  
  science5Btn.classList.remove("selected");  
  science6Btn.classList.remove("selected");  
  science7Btn.classList.remove("selected");  
  science9Btn.classList.remove("selected");  
  science10Btn.classList.remove("selected");  

  science3Skills.classList.remove("hidden");  
  science2Skills.classList.add("hidden");  
  science4Skills.classList.add("hidden");  
  science5Skills.classList.add("hidden");  
  science6Skills.classList.add("hidden");  
  science7Skills.classList.add("hidden");  
  science9Skills.classList.add("hidden");  
  science10Skills.classList.add("hidden");  
});

science4Btn.addEventListener('click', function(){
  science4Btn.classList.add("selected");  
  science2Btn.classList.remove("selected");  
  science3Btn.classList.remove("selected");  
  science5Btn.classList.remove("selected");  
  science6Btn.classList.remove("selected");  
  science7Btn.classList.remove("selected");  
  science9Btn.classList.remove("selected");  
  science10Btn.classList.remove("selected");  

  science4Skills.classList.remove("hidden");  
  science2Skills.classList.add("hidden");  
  science3Skills.classList.add("hidden");  
  science5Skills.classList.add("hidden");  
  science6Skills.classList.add("hidden");  
  science7Skills.classList.add("hidden");  
  science9Skills.classList.add("hidden");  
  science10Skills.classList.add("hidden");  
});

science5Btn.addEventListener('click', function(){
  science5Btn.classList.add("selected");  
  science2Btn.classList.remove("selected");  
  science3Btn.classList.remove("selected");  
  science4Btn.classList.remove("selected");  
  science6Btn.classList.remove("selected");  
  science7Btn.classList.remove("selected");  
  science9Btn.classList.remove("selected");  
  science10Btn.classList.remove("selected");  

  science5Skills.classList.remove("hidden");  
  science2Skills.classList.add("hidden");  
  science3Skills.classList.add("hidden");  
  science4Skills.classList.add("hidden");  
  science6Skills.classList.add("hidden");  
  science7Skills.classList.add("hidden");  
  science9Skills.classList.add("hidden");  
  science10Skills.classList.add("hidden");  
});

science6Btn.addEventListener('click', function(){
  science6Btn.classList.add("selected");  
  science2Btn.classList.remove("selected");  
  science3Btn.classList.remove("selected");  
  science4Btn.classList.remove("selected");  
  science5Btn.classList.remove("selected");  
  science7Btn.classList.remove("selected");  
  science9Btn.classList.remove("selected");  
  science10Btn.classList.remove("selected");  

  science6Skills.classList.remove("hidden");  
  science2Skills.classList.add("hidden");  
  science3Skills.classList.add("hidden");  
  science4Skills.classList.add("hidden");  
  science5Skills.classList.add("hidden");  
  science7Skills.classList.add("hidden");  
  science9Skills.classList.add("hidden");  
  science10Skills.classList.add("hidden");  
});

science7Btn.addEventListener('click', function(){
  science7Btn.classList.add("selected");  
  science2Btn.classList.remove("selected");  
  science3Btn.classList.remove("selected");  
  science4Btn.classList.remove("selected");  
  science5Btn.classList.remove("selected");  
  science6Btn.classList.remove("selected");  
  science9Btn.classList.remove("selected");  
  science10Btn.classList.remove("selected");  

  science7Skills.classList.remove("hidden");  
  science2Skills.classList.add("hidden");  
  science3Skills.classList.add("hidden");  
  science4Skills.classList.add("hidden");  
  science5Skills.classList.add("hidden");  
  science6Skills.classList.add("hidden");  
  science9Skills.classList.add("hidden");  
  science10Skills.classList.add("hidden");  
});

science9Btn.addEventListener('click', function(){
  science9Btn.classList.add("selected");  
  science2Btn.classList.remove("selected");  
  science3Btn.classList.remove("selected");  
  science4Btn.classList.remove("selected");  
  science5Btn.classList.remove("selected");  
  science6Btn.classList.remove("selected");  
  science7Btn.classList.remove("selected");  
  science10Btn.classList.remove("selected");  

  science9Skills.classList.remove("hidden");  
  science2Skills.classList.add("hidden");  
  science3Skills.classList.add("hidden");  
  science4Skills.classList.add("hidden");  
  science5Skills.classList.add("hidden");  
  science6Skills.classList.add("hidden");  
  science7Skills.classList.add("hidden");  
  science10Skills.classList.add("hidden");  
});

science10Btn.addEventListener('click', function(){
  science10Btn.classList.add("selected");  
  science2Btn.classList.remove("selected");  
  science3Btn.classList.remove("selected");  
  science4Btn.classList.remove("selected");  
  science5Btn.classList.remove("selected");  
  science6Btn.classList.remove("selected");  
  science7Btn.classList.remove("selected");  
  science9Btn.classList.remove("selected");  

  science10Skills.classList.remove("hidden");  
  science2Skills.classList.add("hidden");  
  science3Skills.classList.add("hidden");  
  science4Skills.classList.add("hidden");  
  science5Skills.classList.add("hidden");  
  science6Skills.classList.add("hidden");  
  science7Skills.classList.add("hidden");  
  science9Skills.classList.add("hidden");  
});

