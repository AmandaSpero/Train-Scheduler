var config = {
  apiKey: "AIzaSyA8s3PmaDZO9p2oiUOISK8zDzeJ1_1qLZQ",
  authDomain: "democohort2018.firebaseapp.com",
  databaseURL: "https://democohort2018.firebaseio.com",
  projectId: "democohort2018",
  storageBucket: "democohort2018.appspot.com",
  messagingSenderId: "449961813597"
};

  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var trainData = firebase.database();

  
  // Capture Button Click
  $("#add-train").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrainUnix = moment($("#firstTrainInput").val().trim(), "HH:mm").subtract(10, "years").format("X");
    var frequency= $("#frequencyInput").val().trim();

    var newTrain = {
      name: trainName,
      destination: destination,
      firstTrain: firstTrainUnix,
      frequency: frequency,
      //dateAdded: firebase.database.ServerValue.TIMESTAMP

    } 

    // Code for handling the push
    trainData.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination); 
    console.log(firstTrainUnix);
    console.log(newTrain.frequency)

    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#firstTrainInput").val("");
    $("#frequencyInput").val("");

    return false;

    });


  // Firebase watcher + initial loader + order/limit HINT: .on("child_added"
  trainData.ref().on("child_added", function(childSnapshot, prevChildKey){

    console.log(childSnapshot.val());

     var tName = childSnapshot.val().name;
     var tDestination = childSnapshot.val().destination;
     var tFrequency = childSnapshot.val().frequency;
     var tFirstTrain = childSnapshot.val().firstTrain;
     // storing the snapshot.val() in a variable for convenience
    //var sv = snapshot.val();

  
   /*  console.log(sv.tName);
    console.log(sv.tDestination);
    console.log(sv.tFrequency);
    console.log(sv.tFirstTime); */
    

var differenceTimes = moment().diff(moment.unix(tFirstTrain), "minutes");
var tRemainder = moment().diff(moment.unix(tFirstTrain), "minutes") % tFrequency ;
var tMinutes = tFrequency - tRemainder;

  var tArrival = moment().add(tMinutes, "m").format("hh:mm A"); 
console.log(tMinutes);
console.log(tArrival);

  console.log(moment().format("hh:mm A"));
console.log(tArrival);
console.log(moment().format("X"));




       

  // First Time (pushed back 1 year to make sure it comes before current time)
  //var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
  //console.log(firstTimeConverted);

  // Current Time
  //var currentTime = moment();
 // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

  // Difference between the times


 // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
 // console.log("DIFFERENCE IN TIME: " + diffTime);

  // Time apart (remainder)
  //var tRemainder = diffTime % tFrequency;
  //console.log(tRemainder);

  // Minute Until Train
  //var tMinutesTillTrain = tFrequency - tRemainder;
 // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

  // Next Train
 // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
 // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


    $("#trainTable > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");

});
    
  //});
/*     $('a').click(function() {
  $('#train-schedule').append('<tr class="child"><td><\/td></tr>');
}); */

//need to have a new row append to the table with each new train
//

//<button onclick="myFunction()">Try it</button>

// $function() {
  //var table = document.getElementById("myTable");
//var row = train-schedule.insertRow(0);
  //var cell1 = row.insertCell(0);
  //var cell2 = row.insertCell(1);
  //cell1.innerHTML = "NEW CELL1";
  ///cell2.innerHTML = "NEW CELL2";
///}


//$('table.train-schedule').append(newRow);

    // Change the HTML to reflect
/*       $("#name-display").text(sv.name);
    $("#destination-display").text(sv.destination);
    $("#frequency-display").text(sv.tFrequency);
    $("#next-arrival-display").text(nextTrain);
    $("#minutes-away-display").text(tMinutesTillTrain);


}); */
     /* $(function(){
  var counter = 1;
  $('a.add-train').click(function(event){
      event.preventDefault();

      var newRow = $('<tr><td><input type="text" id="name-display' + counter + 
        '"/></td><td><input type="text" id="destination-display' + counter + 
        '"/></td><td><input type="text" id="frequency-display' + counter + 
        '"/></td><td><input type="text" id="next-arrival-display' + counter +
        '"/></td><td><input type="text" id="minutes-away-display' + counter +
              
           '"/></td></tr>');
          counter++;
      $('table.train-schedule').append(newRow);

  }); */


    // Handle the errors
// }; function(errorObject) {
    //console.log("Errors handled: " + errorObject.code);
  //};
