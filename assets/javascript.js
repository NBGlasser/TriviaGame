var radios = document.getElementsByName('question-1');
var correct = 0;
var incorrect = 0;
var time = 30;
var intervalId;
var entered = false;
// var radios = [document.getElementsByClassName("radios")];


intervalId = setInterval(function(){
    if(time > 0){
    time--;
    $("#time").text(time);}
}, 1000)

setTimeout(timeUp, 30000);
function timeUp() {
 if(entered === false){
    entered = true
    if ($("#q1").children("input:checked").val() == "true"){
        correct++
    }
    else{
        incorrect++
    }

    if ($("#q2").children("input:checked").val() == "true"){
        correct++
    }
    else{
        incorrect++
    }

    if ($("#q3").children("input:checked").val() == "true"){
        correct++
    }
    else{
        incorrect++
    }

    if ($("#q4").children("input:checked").val() == "true"){
        correct++
    }
    else{
        incorrect++
    }

    if ($("#q5").children("input:checked").val() == "true"){
        correct++
    }
    else{
        incorrect++
    }

    if ($("#q6").children("input:checked").val() == "true"){
        correct++
    }
    else{
        incorrect++
    }
    
    $("#grade").text("Correct: " + correct + "    Incorrect: " + incorrect)
}
}

$(document).ready(function() {

    intervalId;
    
    $("#submit").on("click", function() {
        console.log($("#q1").children("input:checked").val())
        if(entered === false){
            entered = true
        
            if ($("#q1").children("input:checked").val() == "true"){
                correct++
            }
            else{
                incorrect++
            }

            if ($("#q2").children("input:checked").val() == "true"){
                correct++
            }
            else{
                incorrect++
            }

            if ($("#q3").children("input:checked").val() == "true"){
                correct++
            }
            else{
                incorrect++
            }

            if ($("#q4").children("input:checked").val() == "true"){
                correct++
            }
            else{
                incorrect++
            }

            if ($("#q5").children("input:checked").val() == "true"){
                correct++
            }
            else{
                incorrect++
            }

            if ($("#q6").children("input:checked").val() == "true"){
                correct++
            }
            else{
                incorrect++
            }
        
        $("#grade").text("Correct: " + correct + "    Incorrect: " + incorrect)
        }
    })

    
})