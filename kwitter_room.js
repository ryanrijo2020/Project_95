function logout() {
    window.location="index.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyBNr9ph8vHiPXNd0cbn5nNoNlAoz0AkP6I",
    authDomain: "project-94-4ff99.firebaseapp.com",
    databaseURL: "https://project-94-4ff99-default-rtdb.firebaseio.com",
    projectId: "project-94-4ff99",
    storageBucket: "project-94-4ff99.appspot.com",
    messagingSenderId: "892052886304",
    appId: "1:892052886304:web:249a21a7ba73df713d7d45"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("user_name");
document.username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + username + "!";
function Addroom() {
  roomname=document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomname).update({
purpose:"roomname"

});
localStorage.setItem("roomnane",roomname);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(roomname);
      row="<div class='room_name' id=" + Room_names + "onclick='redirect(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML +=row;
      });});} 
getData();
function redirect(name) {
  console.log(name);
  localStorage.setItem("roomname" , name);
  window.location="kwitter_page.html";
}

getData();
function redirect(name) {
  console.log(name);
  localStorage.setItem("roomname" , name);
  window.location="kwitter_page.html";
}
