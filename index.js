function getResults() {

    //CORRECT ANSWERS
    var amountCorrect = 0;
  
  // LOOP FOR GOING THROUGH ALL QUESTIONS
    for(var i = 1; i <= 10; i++) {
      var radiosName = document.getElementsByName('answer'+i);
  
  //LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
      for(var j = 0; j < radiosName.length; j++) {
        var radiosValue = radiosName[j];
        if(radiosValue.value == "correct" && radiosValue.checked) {
          amountCorrect++;
          radiosValue.style.color = "red";
        }
      }
    }
  document.getElementById('results').innerHTML =
  "Correct answers " + amountCorrect;
  
  }