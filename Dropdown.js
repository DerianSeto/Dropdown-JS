//Global variables
let increment = -5.1;
let dropped = false;
let Go;

//Use instead of disabling button
let animating = false;
let requestedDrop = false;


function Read(){ //Puts information in an alert										//Enable button from the HTML file
	let Drop = document.getElementById('Drop');
	alert(Drop.style.height);
	alert(dropped);
}


function Dropdown(){ //Called by Dropdown button
	let Drop = document.getElementById('Drop');										//Gets Navigation menu HTML element
		if(!animating){ //Checks if the the menu is opening or closing
			animating = true;														//Says that the menu is animating
			
			if(!dropped){ //Checks if it is opened or closed
				Go = setInterval(function(){ //Starts loop with time
					increment = increment + 0.1;									//Increments
					Drop.style.height = (150/(1 + Math.pow(2.718, -increment)));	//Sets navigation menu height
					
					if(parseInt(Drop.style.height)>=130){ //Checks for end
						End();														//Ends loop
						dropped = true;												//Tells Dropdown() that the menu is open
					}
				}, 1);
				
			}else{
				Go = setInterval(function(){ //Starts loop with time
					increment = increment - 0.1;									//Increments
					Drop.style.height = (150/(1 + Math.pow(2.718, -increment)));	//Sets navigation menu height
					
					if(parseInt(Drop.style.height)<=0){ //Checks for end
						End();														//Ends loop
						dropped = false;											//Tells Dropdown() that the menu is open
					}
				}, 1);
				
			}
		}else{
			requestedDrop = true;
		}
}	

function End(){//Ends loop
	clearInterval(Go);																//Ends loop
	animating = false;																//Tells Dropdown() that the menu is animating
	
	if(requestedDrop){ //To go again if button is reclicked while animating | Only once per cycle
		Dropdown();
	}else{
		requestedDrop = false;
	}
}
