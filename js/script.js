(function(){

	if(typeof String.prototype.repeatt === "function")
	{
		return;
	}
	else
	{
	    String.prototype.repeatt = function(qty) {
	    	var stringRepeat = "";
	        for(var i = 0; i<qty; i++)
	        {
	            stringRepeat = stringRepeat + this;
	        }
	        return stringRepeat;
	    };
	}
    
	console.log("hejo ".repeatt(3));

})();