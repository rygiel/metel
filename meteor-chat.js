var Rooms = new Meteor.Collection("rooms");
var Messages = new Meteor.Collection("messages");

if (Meteor.isClient) {
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
    
    /**
     *
     * user
     */
    Template.user.events({
        
        'click #btn-user':function(){
            var user = $('#user').val() ; 
            Session.set("name" , user ); 
            Session.set("room" , "public");
        }
    
    });
    
    
    /**
     *
     * room
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
    
    /**
     *
     * rooms
     */
    Template.rooms.helpers({
        availableRooms: function(){
            return Rooms.find({});
        }
        
    });
    
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
    
    
    
    
    
    
    
    
}
