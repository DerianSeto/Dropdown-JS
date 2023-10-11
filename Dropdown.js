//Global variables
let animating = false;												//Use instead of disabling button
let increment = -5.1;
let dropped = false;

function Dropdown(){
	//alert("AAA");
	do { //setInterval is asynchronous, so will have to redo								//Do...while doesn't work
		//alert("AAA");
		if(!animating){ //Checks if the the menu is opening or closing
			if(dropped){ //Checks if it is opened or closed
				animating = true;										//Says that the menu is animating
				up = setInterval(Up, 1);								//Starts loop with time
			}else{
				animating = true;										//Says that the menu is animating
				down = setInterval(Down, 1);							//Starts loop with time
			}
		}
	}while(animating);
}	


function Read(){//Puts information in an alert						//Enable button from the HTML file
	var Drop = document.getElementById('Drop');
	//alert(Drop.style.height);
	alert(increment);
}

function Down(inc){	//Opens the menu
	var Drop = document.getElementById('Drop');						//Gets Navigation menu HTML element
	increment = increment + 0.1;									//Increments the X value of logistic sigmoid function
	Drop.style.height = (150/(1 + Math.pow(2.718, -increment)));	//Sets navigation menu height

	if(parseInt(Drop.style.height)>=140){
		clearInterval(down);										//Ends loop
		dropped = true;												//Tells Dropdown() that the menu is open
		//document.getElementById('Dropbtn').disabled = false;		//Enables button again
		animating = false;
	}
}

function Up(inc){ //Closes the menu
	var Drop = document.getElementById('Drop');						//Gets Navigation menu HTML element
	increment = increment - 0.1;									//Increments the X value of logistic sigmoid function
	Drop.style.height = (150/(1 + Math.pow(2.718, -increment)));	//Sets navigation menu height
	
	if(parseInt(Drop.style.height)<=0){
		clearInterval(up);											//Ends loop
		dropped = false;											//Tells Dropdown() that the menu is closed
		//document.getElementById('Dropbtn').disabled = false;		//Enables button again
		animating = false;											//Says that the menu is no longer animating
	}
}
