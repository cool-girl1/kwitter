
var firebaseConfig = {
      apiKey: "AIzaSyAHNH1W11fxAmUrWV45G3ixBeadgCirR08",
      authDomain: "kwitter-4eb8a.firebaseapp.com",
      databaseURL: "https://kwitter-4eb8a-default-rtdb.firebaseio.com",
      projectId: "kwitter-4eb8a",
      storageBucket: "kwitter-4eb8a.appspot.com",
      messagingSenderId: "177400032024",
      appId: "1:177400032024:web:4a24619b007bb5f5c10c6d",
      measurementId: "G-R1LDBYZP2V"
    };
  
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);//ADD YOUR FIREBASE LINKS HERE
 
username=localStorage.getItem("idUserName");
document.getElementById("username").innerHTML="Welcome " + username + " !!!";

function add_room(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"Adding Room Name"
});

localStorage.setItem("room_name", room_name);
window.location.replace("kwitter_page.html");}



 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names + " onclick='redirect(this.id)'> #" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect(name){
      console.log(name);
      localStorage.setItem("Room Name", name);
      window.location.replace("kwitter_page.html");
}
function log_out(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("idUserName");
      window.location.replace('index.html');
}
                                                                                          