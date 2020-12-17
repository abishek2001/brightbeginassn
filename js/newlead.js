var firebaseConfig = {
    apiKey: "AIzaSyAdgEclWeCHwl8a04NT8P8sGj02BlJrvCM",
    authDomain: "bright-begins-1d0a5.firebaseapp.com",
    databaseURL: "https://bright-begins-1d0a5.firebaseio.com",
    projectId: "bright-begins-1d0a5",
    storageBucket: "bright-begins-1d0a5.appspot.com",
    messagingSenderId: "1062341837455",
    };
    firebase.initializeApp(firebaseConfig);

    function logout(){
        firebase.auth().signOut().then(function() {
            // Redirect to google sign out.
            window.location= 'index.html';
          }).catch(function(error) {
            // Error occurred.
          });
    }
    firebase.auth().onAuthStateChanged(user => {
      if(!user) {
        window.location = 'index.html'; //If User is not logged in, redirect to login page
      }else{
        document.getElementById('username').innerHTML=user.displayName;
        
        var firestore=firebase.firestore();
    var docref=firestore.collection('samples');
    const inputTextField0=document.getElementById("email");
    const inputTextField1=document.getElementById("name");
    const inputTextField2=document.getElementById("Phone");
    const inputTextField3=document.getElementById("courses");
    const inputTextField4=document.getElementById("pname");
    
    const saveButton=document.querySelector("#savebutton");
    
    
    saveButton.addEventListener("click",function(){
    const pname =inputTextField4.value;
    const courses=inputTextField3.value;
    const phone =inputTextField2.value;
    const name =inputTextField1.value;
    const email =inputTextField0.value;
    const form=document.getElementById('nlform');
    console.log("I am goin to save "+email+"firestore");
    console.log("I am goin to save "+phone+"firestore");
    console.log("I am goin to save "+courses+"firestore");
    console.log("I am goin to save "+name+"firestore");
    console.log("I am goin to save "+pname+"firestore");
    firestore.collection("samples").doc(email).set({
      name:name,
    }).then(function(){
      console.log("status saved");
    }).catch(function(error){
      console.log("got an error:",error);
    });
    firestore.collection("samples").doc(email).collection("courses").doc("course1").set({
        course_status:"New Lead",
        email:email,
        phone:phone,
        name:name,
        timestamp:'',
        next_call_date:'',
        next_call_time:'',
        notes:'',
    
    }).then(function(){
      console.log("status saved");
    
    }).catch(function(error){
      console.log("got an error:",error);
    });
    firestore.collection("samples").doc(email).collection("courses").doc("course1").collection("assigned_to").doc('primary_agent').set({
      name:pname
    }).then(function(){
      console.log("status saved");
        window.alert('New Lead added successfully');
      form.reset();
    }).catch(function(error){
      console.log("got an error:",error);
    });
    
    
    });
    
    
      }
    });
    