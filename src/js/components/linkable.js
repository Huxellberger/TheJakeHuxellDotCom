const Linkable = {
    name : "Linkable"
};

Crafty.c(Linkable.name, {

    linkedPage : "Default",
    
    init: function(){
    },

    events: {
	'Click' : function(MouseEvent) {
	    window.open(this.linkedPage, '_self', false);
	}
    },

    modifyLink : function(newLinkedPage) {
	this.linkedPage = newLinkedPage;
    }
});
