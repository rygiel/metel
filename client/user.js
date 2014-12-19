/**
 *
 * events
 */
Template.user.events({

    'click #btn-user':function(){
        var user = $('#user').val() ; 
        Session.set("name" , user ); 
        Session.set("room" , "public");
    }

});