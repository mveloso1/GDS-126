/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/
//hi
var playerData ={
	info:{
		src:`images/DeusIdle.png`
	},
	states:{
		//The idle animation 
		/*{width:190.55, height:575.65, startX:0, startY:0},
		{width:192.5, height:565.95, startX:190.55, startY:0},
		{c192, height:563.7, startX:383.05, startY:0},
		{width:213.05, height:564.8, startX:575.05, startY:0},
		{width:210.3, height:565.1, startX:788.1, startY:0},
		{width:202.65, height:563.5, startX:998.4, startY:0},
		{width:194.55, height:573, startX:1201.05, startY:0}
		{width:27, height:72, startX:0, startY:0},
		{width:27, height:72, startX:27, startY:0},
		{width:27, height:72, startX:54, startY:0},
		{width:27, height:72, startX:81, startY:0},
		{width:27, height:72, startX:108, startY:0},
		{width:27, height:72, startX:135, startY:0},
		{width:27, height:72, startX:162, startY:0}
		*/
    	idle:
		{
			fps:10,
			cycle:true,
			frames:[
		{startX:0,startY:0,width:191,height:562},			
		{startX:191,startY:0,width:193,height:553},
		{startX:384,startY:0,width:192,height:551},
		{startX:576,startY:0,width:213,height:552},
		{startX:789,startY:0,width:210,height:552},
		{startX:999,startY:0,width:203,height:551},
		{startX:1202,startY:0,width:195,height:560},
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:1,
			cycle:true,
			frames:
			[
				{width:128, height:128, startX:0, startY:0},
				{width:128, height:128, startX:128, startY:0},
				{width:128, height:128, startX:256, startY:0},
				{width:128, height:128, startX:384, startY:0},
				{width:128, height:128, startX:512, startY:0}
			]
		},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:128, height:128, startX:640, startY:0}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:128, height:128, startX:768, startY:0},
				{width:128, height:128, startX:768, startY:0},
				{width:128, height:128, startX:768, startY:0},
				{width:128, height:128, startX:768, startY:0},
				{width:128, height:128, startX:896, startY:0}
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:false,
			//width:300,
			frames:
			[
				{width:128, height:128, startX:1024, startY:0},
				{width:128, height:128, startX:1024, startY:0},
				{width:128, height:128, startX:1024, startY:0},
				{width:128, height:128, startX:1152, startY:0},
				{width:128, height:128, startX:1152, startY:0},
				{width:128, height:128, startX:1152, startY:0},
				{width:128, height:128, startX:1152, startY:0}
				
			]
		}
	}
		
}