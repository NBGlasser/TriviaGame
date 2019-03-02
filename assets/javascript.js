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
    $(".answerdiv").html("")
    $("button").html("")
    $("#time").html("")
    $("#grade").text("Correct: " + correct + "    Incorrect: " + incorrect)
    document.getElementById("grade").style.background = "grey";
    document.getElementById("grade").style.height = "20%";
    document.getElementById("grade").style.width = "95%";
    document.getElementById("submit").style.background = "black";
    document.getElementById("time").style.background = "black";
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
        $(".answerdiv").html("")
        $("button").html("")
        $("#time").html("")
        $("#grade").text("Correct: " + correct + "    Incorrect: " + incorrect)
        document.getElementById("grade").style.background = "grey";
        document.getElementById("grade").style.height = "20%";
        document.getElementById("grade").style.width = "95%";
        document.getElementById("submit").style.background = "black";
        document.getElementById("time").style.background = "black";
        
        }
    })

    
})