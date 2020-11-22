var firebaseConfig = {
apiKey: "AIzaSyAdgEclWeCHwl8a04NT8P8sGj02BlJrvCM",
authDomain: "bright-begins-1d0a5.firebaseapp.com",
databaseURL: "https://bright-begins-1d0a5.firebaseio.com",
projectId: "bright-begins-1d0a5",
storageBucket: "bright-begins-1d0a5.appspot.com",
messagingSenderId: "1062341837455",
};
firebase.initializeApp(firebaseConfig);
var firestore=firebase.firestore();
const docRef=firestore.collection("samples").doc("sdata");
const outputHeader=document.querySelector("#hotDogOutput");
const outputHeader2=document.querySelector("#phoneoutput");
const inputTextField=document.getElementById("latest");
const inputTextField2=document.getElementById("phone");
const saveButton=document.querySelector("#saveButton");

saveButton.addEventListener("click",function(){
  const textToSave =inputTextField.value;
    const phoneToSave =inputTextField2.value;
  console.log("I am goin to save "+textToSave+"firestore");
    console.log("I am goin to save "+phoneToSave+"firestore");
  docRef.set({
    hotDogStatus: textToSave,
      phone: phoneToSave
  }).then(function(){
    console.log("status saved");
  }).catch(function(error){
    console.log("got an error:",error);
  });
docRef.get().then(function(doc){
        if(doc && doc.exists){
            const myData=doc.data();
            outputHeader.innerText="Your Name is: "+myData.hotDogStatus ;
            outputHeader2.innerText="Your Phone No is: "+myData.phone;
        }
    }).catch(function(error){
        console.log("Got an error",error);
    });
});
