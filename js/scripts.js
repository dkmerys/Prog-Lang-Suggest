$(document).ready(function(){
  $("#form-group").submit(function(event){
  var question1 = $("input:radio[name=question1]:checked").val();
  // var question2 = $("input:radio[name=question2]:checked").val();
  // var question3 = $("input:radio[name=question3]:checked").val();
  // var question4 = $("input:radio[name=question4]:checked").val();
  // var question5 = $("input:radio[name=question5]:checked").val();
  
  if (question1 = "computer") {
    answer === "C#"
    alert("worked!")
  }

  $("#answer").empty().append(answer);
    $("#answer-box").show();
  
    event.preventDefault();

  });
});