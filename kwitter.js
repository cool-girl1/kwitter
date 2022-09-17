function Add_User(){
 
    var username=document.getElementById("user_username").value;
localStorage.setItem("idUserName", username);
window.location.replace("kwitter_room.html");
}