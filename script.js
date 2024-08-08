//alert("Hola Mundo! <3");

var app = document.getElementById("app");
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("A simple yet powerful native javascript")
  .pauseFor(300)
  .deleteChars(10)
  .typeString("<strong>JS</strong> plugin for a cool typewriter effect and ")
  .typeString(
    '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
    )
  .pauseFor(1000)
  .start();

var app = document.getElementById("frase");
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("¡Si puedes imaginarlo, puedes programarlo!")
  .pauseFor(400)
  .deleteChars(10)
  .pauseFor(1000)
  .start();


  var app = document.getElementById('app2');

  var typewriter = new Typewriter(app2, {
    loop: true,
    delay: 75,
  });
  
  typewriter
    .pauseFor(2500)
    .typeString('Stivy Zavaleta Cruz')
    .pauseFor(300)
    .deleteAll(10)
    .typeString('Developer <strong><span style="color: #ffc107;">Frontend</span></strong> Junior')
    .pauseFor(1000)
    .start();
