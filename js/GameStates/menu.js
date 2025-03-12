/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
//startButton.img.src="images/snale.png"
startButton.width=100;
startButton.height=50;
startButton.hitBoxWidth=500
startButton.hitBoxHeight=50
startButton.y += 90;
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/Autonomous.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height


gameStates[`menu`] =function(){
	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.stop(`ambient`,0)
		}

		//Hover Effect Graffic
		startButton.img.src="images/PlayButtonHover.png"
		startButton.color = `yellow`
	}
	else
	{
		//Default Button Graphic
		startButton.img.src="images/PlayButtonStandard.png"
		startButton.color = `red`
	}
	menuBackground.drawStaticImage();
	startButton.render()
	startButton.drawStaticImage();
}
	
	
