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
		src:`images/DeusSpritesheetNEW.png`
	},
	states:{
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
				{width:332, height:565, startX:6331, startY:60},
				{width:343, height:565, startX:6663, startY:0},
				{width:348, height:565, startX:7006, startY:69},
				{width:343, height:565, startX:7380, startY:0},
				{width:311, height:565, startX:7724, startY:0},
				{width:346, height:565, startX:0, startY:654},
				{width:311, height:565, startX:346, startY:654},
				{width:192, height:565, startX:657, startY:654},
				
			]
		},
		shoot:
		{
			fps:6,
			cycle:true,
			frames:[

		{startX:849,startY:654,width:192,height:209},
		{startX:1067,startY:654,width:199,height:209},
		{startX:1266,startY:654,width:192,height:209},
			]
		},
	}	
}
