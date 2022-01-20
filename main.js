var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
        fabric.Image.fromURL("BirthdayImage.jpg",function(img){
            player_object=img;
            player_object.scaleToWidth(1750);
            player_object.scaleToHeight(1000);
            player_object.set({
            top:0,
            left:0
            });
        canvas.add(player_object);
        })  
        }
        
	
	


function playSound(){
x.play();

}
