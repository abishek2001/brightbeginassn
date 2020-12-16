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
    const collectionRef = firestore.collection('samples');
    console.log("Retrieving list of documents in collection");


    function renderdatanewleads(doc){
        if(doc && doc.exists){
          var table = document.getElementsByTagName('table')[0];

          var new_row = table.rows[1].cloneNode(true);
          var cel1 = new_row.cells[0];
           var cel2 = new_row.cells[1];
           var cel3 = new_row.cells[2];
           var cel4 = new_row.cells[3];
           var cel5 = new_row.cells[4];
            const myData=doc.data();
            cel1.innerHTML = myData.name ;
            cel2.innerHTML = myData.phone;

            cel3.innerHTML = myData.timestamp;
            cel4.innerHTML = myData.next_call_date + "<br>"+ myData.next_call_time;
            cel5.innerHTML = myData.notes;

    table.appendChild(new_row);

        }
    }
    function renderdatademonotscheduled(doc){
        if(doc && doc.exists){
          var table = document.getElementsByTagName('table')[1];

          var new_row = table.rows[1].cloneNode(true);
          var cel1 = new_row.cells[0];
           var cel2 = new_row.cells[1];
           var cel3 = new_row.cells[2];
            var cel4 = new_row.cells[3];
            var cel5 = new_row.cells[4];
            const myData=doc.data();
            cel1.innerHTML = myData.name ;
            cel2.innerHTML = myData.phone;
              cel3.innerHTML = myData.timestamp;
              cel4.innerHTML = myData.next_call_date + "<br>"+ myData.next_call_time;
              cel5.innerHTML = myData.notes;
    table.appendChild(new_row);
        }
    }
    function renderdatademoscheduled(doc){
        if(doc && doc.exists){
          var table = document.getElementsByTagName('table')[2];
          var new_row = table.rows[1].cloneNode(true);

          var cel1 = new_row.cells[0];
           var cel2 = new_row.cells[1];
           var cel3 = new_row.cells[2];
            var cel4 = new_row.cells[3];
            var cel5 = new_row.cells[4];
            const myData=doc.data();
            cel1.innerHTML = myData.name ;
            cel2.innerHTML = myData.phone;
              cel3.innerHTML = myData.timestamp;
            cel4.innerHTML = myData.next_call_date + "<br>"+ myData.next_call_time;
            cel5.innerHTML = myData.notes;
    table.appendChild(new_row);
        }
    }
    function renderdataagreedtopay(doc){
        if(doc && doc.exists){
          var table = document.getElementsByTagName('table')[3];
          var new_row = table.rows[1].cloneNode(true);
          document.getElementById("ds").style.display = 'none';

          var cel1 = new_row.cells[0];
           var cel2 = new_row.cells[1];
           var cel3 = new_row.cells[2];
            var cel4 = new_row.cells[3];
            var cel5 = new_row.cells[4];
            const myData=doc.data();
            cel1.innerHTML = myData.name ;
            cel2.innerHTML = myData.phone;
              cel3.innerHTML = myData.timestamp;
              cel4.innerHTML = myData.next_call_date + "<br>"+ myData.next_call_time;
              cel5.innerHTML = myData.notes;
    table.appendChild(new_row);
        }
    }
    function renderdatanotinterested(doc){
        if(doc && doc.exists){
          var table = document.getElementsByTagName('table')[4];
          var new_row = table.rows[1].cloneNode(true);
document.getElementById("dms").style.display = 'none';
document.getElementById("agp").style.display = 'none';

          var cel1 = new_row.cells[0];
           var cel2 = new_row.cells[1];
           var cel3 = new_row.cells[2];
            var cel4 = new_row.cells[3];
            var cel5 = new_row.cells[4];
            const myData=doc.data();
            cel1.innerHTML = myData.name ;
            cel2.innerHTML = myData.phone;
              cel3.innerHTML = myData.timestamp;
            cel4.innerHTML = myData.next_call_date + "<br>"+ myData.next_call_time;
            cel5.innerHTML = myData.notes;
    table.appendChild(new_row);
        }
    }
    function renderdatapaymentdone(doc){
        if(doc && doc.exists){
          var table = document.getElementsByTagName('table')[5];
          var new_row = table.rows[1].cloneNode(true);
document.getElementById("nl").style.display = 'none';
document.getElementById("notin").style.display = 'none';

          var cel1 = new_row.cells[0];
           var cel2 = new_row.cells[1];
           var cel3 = new_row.cells[2];
            var cel4 = new_row.cells[3];
            var cel5 = new_row.cells[4];
            const myData=doc.data();
            cel1.innerHTML = myData.name ;
            cel2.innerHTML = myData.phone;
              cel3.innerHTML = myData.timestamp;
          cel4.innerHTML = myData.next_call_date + "<br>"+ myData.next_call_time;
          cel5.innerHTML = myData.notes;
    table.appendChild(new_row);
        }
    }



    const documents = collectionRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log("Parent Document ID: ", doc.id);
          const subCollectionDocs = collectionRef.doc(doc.id).collection("courses").where('course_status','==','New Lead').get()
              .then(snapshot => {
                snapshot.forEach(doc => {
                  console.log("Sub Document ID: ", doc.id);
                  renderdatanewleads(doc);
                })
              }).catch(err => {
                console.log("Error getting sub-collection documents", err);
              })
          });
        }).catch(err => {
        console.log("Error getting documents", err);
      });


      const documents1 = collectionRef.get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log("Parent Document ID: ", doc.id);
            const subCollectionDocs1 = collectionRef.doc(doc.id).collection("courses").where('course_status','==','Demo not scheduled').get()
                .then(snapshot => {
                  snapshot.forEach(doc => {
                    console.log("Sub Document ID: ", doc.id);
                    renderdatademonotscheduled(doc);
                  })
                }).catch(err => {
                  console.log("Error getting sub-collection documents", err);
                })
            });
          }).catch(err => {
          console.log("Error getting documents", err);
        });

        const documents2 = collectionRef.get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              console.log("Parent Document ID: ", doc.id);
              const subCollectionDocs2 = collectionRef.doc(doc.id).collection("courses").where('course_status','==','Demo scheduled').get()
                  .then(snapshot => {
                    snapshot.forEach(doc => {
                      console.log("Sub Document ID: ", doc.id);
                      renderdatademoscheduled(doc);
                    })
                  }).catch(err => {
                    console.log("Error getting sub-collection documents", err);
                  })
              });
            }).catch(err => {
            console.log("Error getting documents", err);
          });

          const documents3 = collectionRef.get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                console.log("Parent Document ID: ", doc.id);
                const subCollectionDocs3 = collectionRef.doc(doc.id).collection("courses").where('course_status','==','Agreed to pay').get()
                    .then(snapshot => {
                      snapshot.forEach(doc => {
                        console.log("Sub Document ID: ", doc.id);
                        renderdataagreedtopay(doc);
                      })
                    }).catch(err => {
                      console.log("Error getting sub-collection documents", err);
                    })
                });
              }).catch(err => {
              console.log("Error getting documents", err);
            });

            const documents4 = collectionRef.get()
              .then(snapshot => {
                snapshot.forEach(doc => {
                  console.log("Parent Document ID: ", doc.id);
                  const subCollectionDocs4 = collectionRef.doc(doc.id).collection("courses").where('course_status','==','Not Interested').get()
                      .then(snapshot => {
                        snapshot.forEach(doc => {
                          console.log("Sub Document ID: ", doc.id);
                          renderdatanotinterested(doc);
                        })
                      }).catch(err => {
                        console.log("Error getting sub-collection documents", err);
                      })
                  });
                }).catch(err => {
                console.log("Error getting documents", err);
              });

              const documents5 = collectionRef.get()
                .then(snapshot => {
                  snapshot.forEach(doc => {
                    console.log("Parent Document ID: ", doc.id);
                    const subCollectionDocs5 = collectionRef.doc(doc.id).collection("courses").where('course_status','==','Payment Done').get()
                        .then(snapshot => {
                          snapshot.forEach(doc => {
                            console.log("Sub Document ID: ", doc.id);
                            renderdatapaymentdone(doc);
                          })
                        }).catch(err => {
                          console.log("Error getting sub-collection documents", err);
                        })
                    });
                  }).catch(err => {
                  console.log("Error getting documents", err);
                });



    const inputTextField=document.getElementById("email");
    const inputTextField2=document.getElementById("phone");
    const inputTextField3=document.getElementById("call_status");
    const inputTextField4=document.getElementById("notes");
    const inputTextField5=document.getElementById("calldate");
    const inputTextField6=document.getElementById("course_status");
    const saveButton=document.querySelector("#saveButton");

    saveButton.addEventListener("click",function(){
      var date = new Date();
var d = date.getUTCDate();
var day = (d < 10) ? '0' + d : d;
var m = date.getUTCMonth() + 1;
var month = (m < 10) ? '0' + m : m;
var year = date.getUTCFullYear();
var h = date.getUTCHours();
var hour = (h < 10) ? '0' + h : h;
var mi = date.getUTCMinutes();
var minute = (mi < 10) ? '0' + mi : mi;
var sc = date.getUTCSeconds();
var second = (sc < 10) ? '0' + sc : sc;
var loctime = year + "-" + month + '-' + day + '<br>'+h+':'+mi;
    const phoneToSave =inputTextField2.value;
    const calltosave =inputTextField3.value;
    const notes =inputTextField4.value;
    const call_date =inputTextField5.value;
    const course_status =inputTextField6.value;
    const email =inputTextField.value;
    console.log("I am goin to save "+email+"firestore");
    console.log("I am goin to save "+phoneToSave+"firestore");
    console.log("I am goin to save "+calltosave+"firestore");
    console.log("I am goin to save "+notes+"firestore");
    console.log("I am goin to save "+call_date+"firestore");
    console.log("I am goin to save "+course_status+"firestore");
      firestore.collection("samples").doc(email).collection("courses").doc("course1").collection("calls").doc("call1").set({
          next_call_time: phoneToSave,
          next_call_date: call_date,
          call_status: calltosave,
          notes:notes,

      }).then(function(){
        console.log("status saved");

      }).catch(function(error){
        console.log("got an error:",error);
      });
        firestore.collection("samples").doc(email).collection("courses").doc("course1").update({
          course_status:course_status,
          next_call_date: call_date,
          next_call_time: phoneToSave,
          notes:notes,
          timestamp: loctime,
      }).then(function(){
        window.alert("Customer's call log saved successfully")
        console.log("status saved");
        window.location.reload();
      }).catch(function(error){
        console.log("got an error:",error);
      });
    });
