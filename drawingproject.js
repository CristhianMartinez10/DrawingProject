var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "green";
canvas.fillRect(0,0,1335,650);

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(675,325,150,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.arc(675,325,130,0,2*Math.PI,true);
canvas.fill();

canvas.fillStyle = "white";
canvas.fillRect(670,0,10,700);

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(675,325,20,0,2*Math.PI,true);
canvas.fill();
//* right goal (6 yard box)
canvas.fillStyle = "white";
canvas.fillRect(1270,225,15,200);

canvas.fillStyle = "white";
canvas.fillRect(1270,225,100,10);

canvas.fillStyle = "white";
canvas.fillRect(1270,425,100,10);
//* left goal(6 yard box)
canvas.fillStyle = "white";
canvas.fillRect(-20,425,90,10);

canvas.fillStyle = "white";
canvas.fillRect(55,225,15,200);

canvas.fillStyle = "white";
canvas.fillRect(-20,225,90,10);
//* left goal (normal box)
canvas.fillStyle = "white";
canvas.fillRect(120,170,15,320);

canvas.fillStyle = "white";
canvas.fillRect(-20,170,150,10);

canvas.fillStyle = "white";
canvas.fillRect(-20,480,150,10);
//*penalty spot left box
canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(90,325,10,30, 2*Math.PI,true);
canvas.fill();
//* right goal(normal box)
canvas.fillStyle = "white";
canvas.fillRect(1200,170,15,320);

canvas.fillStyle = "white";
canvas.fillRect(1200,170,150,10);

canvas.fillStyle = "white";
canvas.fillRect(1200,480,150,10);

//*penalty spot right goal
canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(1250,325,10,30, 2*Math.PI,true);
canvas.fill();
