$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const hours = $("#hours").val();
    const months = $("#months").val();
    const experience = $("#experience").val();
    const reason = $("#reason").val();
    const pets = $("#pets").val();

    // declare initial variables equal to zero 

    let javascriptScore = 0;
    let pythonScore = 0;
    let sharpScore = 0;

    // branching logic for hours id
    
    if (hours === "javascript") {
      javascriptScore += 1;
    } else if (hours === "python") {
      pythonScore += 1;
    } else if (hours === "sharp") {
      sharpScore += 1;
    } else {
      alert("It looks like you forgot to select an answer for the first question!");
    }

    // branching logic for months id

    if (months === "javascript") {
      javascriptScore += 1;
    } else if (months === "python") {
      pythonScore += 1;
    } else if (months === "sharp") {
      sharpScore += 1;
    } else {
      alert("It looks like you forgot to select an answer for the second question!");
    }

    // branching logic for experience id

    if (experience === "javascript") {
      javascriptScore += 1;
    } else if (experience === "python") {
      pythonScore += 1;
    } else if (experience === "sharp") {
      sharpScore += 1;
    } else {
      alert("It looks like you forgot to select an answer for the third question!");
    }

    // branching logic for reason id

    if (reason === "javascript") {
      javascriptScore += 1;
    } else if (reason === "python") {
      pythonScore += 1;
    } else if (reason === "sharp") {
      sharpScore += 1;
    } else {
      alert("It looks like you forgot to select an answer for the fourth question!");
    }

    // branching logic for pets id

    if (pets === "javascript") {
      javascriptScore += 1;
    } else if (pets === "python") {
      pythonScore += 1;
    } else if (pets === "sharp") {
      sharpScore += 1;
    } else {
      alert("It looks like you forgot to select an answer for the fifth question!");
    }

    // branching logic that provides language suggestion to user

    if (javascriptScore > pythonScore && javascriptScore > sharpScore) {
      $("#suggested-language").text("JavaScript");
    } else if (pythonScore > javascriptScore && pythonScore > sharpScore) {
      $("#suggested-language").text("Python");
    } else if (sharpScore > javascriptScore && sharpScore > pythonScore) {
      $("#suggested-language").text("C#");
    } else {
      $("#suggested-language").text("Hmm... Something is not adding up here, please try again!");
    }

    $("#answers").show();

  });
});
