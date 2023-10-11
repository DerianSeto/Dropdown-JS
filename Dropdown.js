//Global variables
let increment = 0.0;
let dropped = false;

function Dropdown(){
	//HTML objects-Navigation menu, Navigation button
	var Drop = document.getElementById('Drop');
	document.getElementById('Dropbtn').disabled = true;
	
	if(dropped){ //Checks if it is opened or closed
		up = setInterval(Up, 1);									//Starts loop with time
	}else{
		down = setInterval(Down, 1);								//Starts loop with time
	}
}	


function Read(){//Puts information in an alert						//Enable button from the HTML file
	var Drop = document.getElementById('Drop');
	alert(Drop.style.height);
	alert(increment);
}

function Down(inc){	//Opens the menu
	var Drop = document.getElementById('Drop');						//Gets Navigation menu HTML element
	increment = increment + 0.1;									//Increments the X value of logistic sigmoid function
	Drop.style.height = (150/(1 + Math.pow(2.718, -increment)));	//Sets navigation menu height

	if(parseInt(Drop.style.height)>=130){
		clearInterval(down);										//Ends loop
		dropped = true;												//Tells Dropdown() that the menu is open
		document.getElementById('Dropbtn').disabled = false;		//Enables button again
	}
}

function Up(inc){ //Closes the menu
	var Drop = document.getElementById('Drop');						//Gets Navigation menu HTML element
	increment = increment - 0.1;									//Increments the X value of logistic sigmoid function
	Drop.style.height = (150/(1 + Math.pow(2.718, -increment)));	//Sets navigation menu height
	
	if(parseInt(Drop.style.height)<=0){
		clearInterval(up);											//Ends loop
		dropped = false;											//Tells Dropdown() that the menu is closed
		increment = 0.0;											//Resets (global) increment
		document.getElementById('Dropbtn').disabled = false;		//Enables button again
	}
}
