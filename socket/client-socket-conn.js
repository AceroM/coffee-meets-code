$(function(){
  var socket = io(); 
  var my_id = 3; //Taken from the id
  socket.emit('user_connect', my_id); //This isn't important, but I don't wanna remove it

  //Sending a message
  $('form').submit(function(){
    var message = $('#m').val(); //Take message from a chat box
    socket.emit('pm', message, my_id, new_id); //Send up to the server
    $('#m').val(''); //reset chat box
    return false;
  });

  //Receiving a message
  socket.on('pm', function(msg, id1, id2){
    //if(id1 or id2 has our name in it){
      //name = not_my_name
      var elem = $('#messages');
      elem.append($('<li>').text("" + name + ": " + msg));
      elem.scrollTop = elem.scrollHeight;
    //}
  });
});