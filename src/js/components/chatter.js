const Chatter = {
    name : "Chatter"
};

Crafty.c(Chatter.name, {
    required : "Text",

    displayText : "Text not Set!",
    currentLetter : 0,
    nattering : false,
    
    chatterSpeed : 1.0,
    timeSinceLastChatter : 0.0,
    chatterSound : "NotSet!",

    events : {
	'MouseOver' : function (MouseEvent){
	    this.nattering = true;
	},

	'MouseOut' : function (MouseEvent){
	    this.nattering = false;
	    this.currentLetter = 0;
	},

	'UpdateFrame' : function(eventData){
	    if (this.nattering && this.currentLetter < this.displayText.length) {
		
		this.timeSinceLastChatter += eventData.dt;
		
		if (this.timeSinceLastChatter >= this.chatterSpeed){
		    this.timeSinceLastChatter = 0.0;
		    this.currentLetter += 1;
		    this.text(this.displayText.substring(0, this.currentLetter));
		    Crafty.audio.play(this.chatterSound);
		}
	    }	
	}
    }
    
});
