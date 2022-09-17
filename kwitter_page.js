
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
  
    
 firebase.initializeApp(firebaseConfig);

 username=localStorage.getItem("idUserName");
 room_name=localStorage.getItem("room_name");

 function send_message(){
       msg=document.getElementById("message").value;
       firebase.database().ref(room_name).push({
             name: username , 
             message: msg , 
             likes: 0
       });
       document.getElementById("message").value="";
 }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(message_data);
         console.log(firebase_message_id);
         
         Name= message_data['name'];
         Message= message_data['message'];
         Likes= message_data['likes'];
         
         Name_Tag="<h4>" + Name + "<img src='tick.png' class='user_tick'> </h4>";
         Message_Tag="<h4 class='message_h4'>" + Message + "</h4>";
         Like_Btn= "<button class='btn btn-warning' id=" + firebase_message_id +  "value=" + Likes + "onclick= 'updateLikes(this.id)'>";
         Span_tag= "<span class='glyphicon glyphicon-thumbs-up'> Likes: " + Likes + "</span> </button> <hr>";
         
         Row= Name_Tag + Message_Tag + Like_Btn + Span_tag;
         document.getElementById("output").innerHTML += Row;

      } });  }); }

      function Log_out(){
            localStorage.removeItem("room_name");
            localStorage.removeItem("idUserName");
            window.location.replace('index.html');
      }
                  
getData();

function updateLikes(message_id){
      console.log(message_id + "clicked");
      button_ID= message_id;
      likes= document.getElementById(button_ID).value;
      update_likes= Number(likes)+ 1;
      console.log(update_likes);
      firebase.database().ref(room_name).child(message_id).update({
likes:update_likes            
      });
}