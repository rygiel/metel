/**
 *
 * helpers
 */
Template.room.helpers({

    messages: function(){

        return Messages.find({ 
            room: Session.get("room") 
        }) ;   

    },

    roomName: function(){
        var room = Rooms.findOne({_id: Session.get("room")  });
        
        return room.room;
    }

});
/**
 *
 * events
 */
Template.room.events({

    'submit': function(){

        var msg = $('#msg').val();
        $('#msg').val("");

        Messages.insert({
            author:     Session.get("name") , 
            text:       msg , 
            room:       Session.get("room"),
            timestamp:  (new Date()).toUTCString()
        });


    },

    'click #leave': function(){

        Session.set("room" , false );

    }

});