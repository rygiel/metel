/**
 *
 * helpers
 */
Template.rooms.helpers({
    availableRooms: function(){
        return Rooms.find({});
    }

});

/**
 *
 * events
 */
Template.rooms.events({

    'click #addRoom': function () {

        var name = window.prompt("Podaj nazwe pokoju");

        Rooms.insert({

            room: name

        });

    },

    'click .delete': function(){

        //Messages.remove({ room: this._id } );
        Rooms.remove( this._id );

    },

    'click .enter': function (){
        var name;

        if(Session.get("name") === undefined) {

            name = window.prompt("Your name", "Guest") || "Jerky";
            Session.set("name", name);

        }

        Session.set("room", this._id);
    }


});