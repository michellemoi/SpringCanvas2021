const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey){
    var newPost = snapshot.val();
});

function send(){
    var email = document.getElementById("email").value;



    detailsRef.push().set({
        email: email,
    })
    window.alert("You have been subscribed");
    window.location.href = "subscribe.html";;

}