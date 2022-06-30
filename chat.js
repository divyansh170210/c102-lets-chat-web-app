var firebaseConfig = {
    apiKey: "AIzaSyAnkK1yWLDm0SFD_AR0DigSyacMVVRb_Lo",
    authDomain: "project-chat-100-new.firebaseapp.com",
    projectId: "project-chat-100-new",
    storageBucket: "project-chat-100-new.appspot.com",
    messagingSenderId: "461003181281",
    appId: "1:461003181281:web:ec7c4eb30a8c1daf483ba0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



