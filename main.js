/* onload="player_update()"

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	// var oImg = Img.set({left:0,top:0});
 	Img.scaleToWidth(150);
	Img.scaleToHeight(140);
	Img.set({left:0,top:0});
	//top:player_y,
	//left:player_x
	canvas.add(Img);
	});
}

*/

 //var canvas = new fabric.Canvas('myCanvas');
 block_image_width = 80;
 block_image_height = 80;

 player_x = 10;
 player_y = 10;

 var player_object = "";
 var block_image_object = "";

function player_update() {
	var canvas = new fabric.Canvas('myCanvas');

	fabric.Image.fromURL("player.png", function(Img) {
		player_object=Img;
		player_object.scaleToWidth(150); // additional
		player_object.scaleToWidth(140); // additional
		player_object.set({left:10,top:10}); // additional
		canvas.add(player_object);
	});
}

 var block_image_object= "";

function new_image(get_image){
	
	var canvas = new fabric.Canvas('myCanvas');
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object=Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({left:10,top:10});
	//top:player_y,
	//left:player_x
	canvas.add(block_image_object);
		});

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if (e.shiftKey==true && keyPressed=='80'){

block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}
if (e.shiftKey && keyPressed =='77'){

block_image_width = block_image_width - 10;
block_image_height = block_image_height - 10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}
/*
switch (keyPressed) {
	case '38':
		up();
		console.log("up");
		break;
	case '40':
		down();
		console.log("down");
		break;
	case '37':
		left();
		console.log("left");
		break;
	case'39':
		right();
		console.log("right");
		break;
    case '70':
       new_image('thor_face.png');
	   console.log("f");
	   break;
	case '66':
		new_image('ironman_body.png');
		console.log("b");
	   	break;
	case '76':
		new_image('spiderman_legs.png');
		console.log("l");
	   	break;
	case '82':
		new_image('spiderman_right_hand.png');
		console.log("r");
	 	break;
	case '72':
		new_image('captain_america_left_hand.png');
		console.log("h");
	 	break;
}
*/

if(keyPressed == '38'){
	up();
	console.log("up");
	}
	if(keyPressed == '40'){
	down();
	console.log("down");
	}
	if (keyPressed == '37'){
		left();
		console.log("left");
		}
		if (keyPressed == '39'){
		right();
		console.log("right");
		}
    if (keyPressed == '70'){
       new_image('thor_face.png');
	   console.log("f");
	}
	if (keyPressed == '66'){
		new_image('ironman_body.png');
		console.log("b");
	 }
	 if (keyPressed == '76'){
		new_image('spiderman_legs.png');
		console.log("l");
	 }
	 if (keyPressed == '82'){
		new_image('spiderman_right_hand.png');
		console.log("r");
	 } 
	 if (keyPressed == '72'){
		new_image('captain_america_left_hand.png');
		console.log("h");
	 }


}
//}
