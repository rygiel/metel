/**
 *
 * main
 */
Template.main.helpers({

    currentRoom: function(){
        return Session.get("room") || false ;    
    },

    userName: function(){
        return Session.get("name") || false ; 
    }


});