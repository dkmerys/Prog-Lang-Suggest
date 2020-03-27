$(document).ready(function(){
  $("#form-group").submit(function(event){
  var question1 = $("input:radio[name=question1]:checked").val();
  var question2 = $("input:radio[name=question2]:checked").val();
  var question3 = $("input:radio[name=question3]:checked").val();
  var question4 = $("input:radio[name=question4]:checked").val();
  var question5 = $("input:radio[name=question5]:checked").val();
  
  if (question5 === "sports" && question4 === "villain"){
    answer = "Python"
  } else if (question1 === "computer" && question3 === "noweb") {
    answer = "C#"
  } else if (question3 === "web" && question2 === "iphone"){
    answer = "Swift"
  } else if (question2 === "iphone") {
    answer = "Swift"
  } else if (question1 === "computer") {
    answer = "C#"
  } else if (question5 === "sports") {
    answer = "Python"
  } else {
    alert("Please answer at least one question.")
  }
  

  $("#answer").empty().append(answer);
    $("#answer-box").show();
  
    event.preventDefault();

  });
});