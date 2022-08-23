var player1 = localStorage.getItem("player1_name");
var player2 = localStorage.getItem("player2_name");

function send() {
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    actual_ans = parseInt(number1) * parseInt(number2);
    ques_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"
    check_button  = "<br><br><button class='btn btn-info' onclcik='check()'>Check</button>"
    row = ques_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}