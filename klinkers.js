function knop(){

	var string = document.getElementById("invoer").value;
	var lijst = {
	   a:"!",
	   e:"@",
	   o:"#",
	   u:"$",
	   i:"%"
	};
	
	
    string = string.replace(/a|e|o|u|i/gi, function(knop){
		return lijst[knop];
		
});
	
	document.getElementById("content").innerHTML = string;
}

