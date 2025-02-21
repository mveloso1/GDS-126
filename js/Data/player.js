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
			fps:6,
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
		//2,3,6 and 7 are odd.
		walk:
		{
			fps:5,
			cycle:true,
			frames:
			[
				{width:308, height:550, startX:1397, startY:0},
				{width:319, height:513, startX:1705, startY:0},
				{width:210, height:533, startX:2024, startY:0},
				{width:206, height:562, startX:2234, startY:0},
				{width:316, height:552, startX:2440, startY:0},
				{width:291, height:498, startX:2756, startY:0},
				{width:208, height:562, startX:3047, startY:0},
				{width:223, height:569, startX:3255, startY:0}
			]
		},
		//The jump animation 
		jump:
		{
			fps:2,
			cycle:false,
			frames:
			[
				{width:223, height:519, startX:3478, startY:0},
				{width:306, height:519, startX:3654, startY:0},
				{width:298, height:519, startX:4012, startY:0},
				{width:318, height:519, startX:4310, startY:0}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:5,
			cycle:false,
			frames:
			[
				{width:175, height:519, startX:4691, startY:0},
				{width:297, height:503, startX:4866, startY:0},
				{width:289, height:374, startX:5222, startY:0},
			]
		},
		//The attack animation 
		attack:
		{
			fps:5,
			cycle:false,
			//width:300,
			frames:
			[
				{width:200, height:565, startX:5511, startY:0},
				{width:294, height:565, startX:5704, startY:0},
				{width:333, height:565, startX:5998, startY:0},
				{width:332, height:565, startX:6331, startY:0},
				{width:343, height:565, startX:6663, startY:0},
				{width:348, height:565, startX:7006, startY:0},
				{width:343, height:565, startX:7354, startY:0},
				{width:311, height:565, startX:7697, startY:0},
				
			]
		}
	}
		
}