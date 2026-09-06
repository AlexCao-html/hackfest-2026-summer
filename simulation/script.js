var difficulty;
var time;
var senario;
var points = 0;
var emergency = false;
var timer;
var timesUp = false;
var finished = false;
$("#practice").click(() => {
    document.querySelector("#difficultyBtn").innerHTML = "Practice";
});
$("#emergency5s").click(() => {
    document.querySelector("#difficultyBtn").innerHTML = "Emergency - 5s";
});
$("#emergency10s").click(() => {
    document.querySelector("#difficultyBtn").innerHTML = "Emergency - 10s";
});
$("#emergency20s").click(() => {
    document.querySelector("#difficultyBtn").innerHTML = "Emergency - 20s";
});
$("#connected").click(() => {
    document.querySelector("#senarioBtn").innerHTML = "Connected Senarios";
});
$("#separated").click(() => {
    document.querySelector("#senarioBtn").innerHTML = "Separated Senarios";
});
$("#start").click(() => {
    if (document.querySelector("#difficultyBtn").innerHTML === "Practice") {
        difficulty = "practice";
    } else {
        difficulty = "emergency";
        emergency = true;
        if (document.querySelector("#difficultyBtn").innerHTML[12] === "5") {
            time = 5;
        } else if (document.querySelector("#difficultyBtn").innerHTML[12] === "1") {
            time = 10;
        } else {
            time = 20;
        }
    }
    if (document.querySelector("#senarioBtn").innerHTML === "Connected Senarios") {
        senario = "connected";
    } else {
        senario = "separated";
    }
    document.querySelector("#difficultyDisplay").innerHTML = document.querySelector("#difficultyBtn").innerHTML + "<br />" + document.querySelector("#senarioBtn").innerHTML;
    $("#select").addClass("inactive");
    if (senario === "connected") {
        $("#chooseSenarioConnected").removeClass("inactive");
    } else {
        $("#chooseSenarioSeparated").removeClass("inactive");
    }
});
$("#fireSenarioSelect").click(() => {
    $("#chooseSenarioConnected").addClass("inactive");
    $("#fireSenario").removeClass("inactive");
});
$(".start").click(() => {
    if (emergency) {
        $(".textbox").addClass("emergency");
        $(".timeTicker").removeClass("inactive");
        timer = time;
        $(".timeLeft").html(timer);
        setInterval(() => {
            timer--;
            if (timer < 0) {
                if (!finished) {
                    points -= 2;
                    timesUp = true;
                    $(".pointsCount").html(points);
                }
            } else {
                $(".timeLeft").html(timer);
            }
        }, 1000);
        $(".answerChoice").click(() => {
            timer = time;
            $(".timeLeft").html(timer);
        });
    }
});
$("#fireSenario .start").click(() => {
    $("#fireSenario .beginning").addClass("inactive");
    $("#fireSenario .q1").removeClass("inactive");
});
$(".answerChoice.dangerous").click(() => {
    points -= 5;
    $(".pointsCount").html(points);
});
$(".answerChoice.correct").click(() => {
    if (!timesUp) {
        points += 5;
        $(".pointsCount").html(points);
    }
});
$("#fireSenario .q19 .answerChoice").click(() => {
    $(".timeTicker").addClass("inactive");
    finished = true;
})
$("#fireSenario .q20 .answerChoice").click(() => {
    if (timesUp) {
        points += 5;
        $(".pointsCount").html(points);
    }
})
$(".q1 .answerChoice").click(() => {
    $(".q1").addClass("inactive")
    $(".q2").removeClass("inactive")
});
$(".q2 .answerChoice").click(() => {
    $(".q2").addClass("inactive")
    $(".q3").removeClass("inactive")
});
$(".q3 .answerChoice").click(() => {
    $(".q3").addClass("inactive")
    $(".q4").removeClass("inactive")
});
$(".q4 .answerChoice").click(() => {
    $(".q4").addClass("inactive")
    $(".q5").removeClass("inactive")
});
$(".q5 .answerChoice").click(() => {
    $(".q5").addClass("inactive")
    $(".q6").removeClass("inactive")
});
$(".q6 .answerChoice").click(() => {
    $(".q6").addClass("inactive")
    $(".q7").removeClass("inactive")
});
$(".q7 .answerChoice").click(() => {
    $(".q7").addClass("inactive")
    $(".q8").removeClass("inactive")
});
$(".q8 .answerChoice").click(() => {
    $(".q8").addClass("inactive")
    $(".q9").removeClass("inactive")
});
$(".q9 .answerChoice").click(() => {
    $(".q9").addClass("inactive")
    $(".q10").removeClass("inactive")
});
$(".q10 .answerChoice").click(() => {
    $(".q10").addClass("inactive")
    $(".q11").removeClass("inactive")
});
$(".q11 .answerChoice").click(() => {
    $(".q11").addClass("inactive")
    $(".q12").removeClass("inactive")
});
$(".q12 .answerChoice").click(() => {
    $(".q12").addClass("inactive")
    $(".q13").removeClass("inactive")
});
$(".q13 .answerChoice").click(() => {
    $(".q13").addClass("inactive")
    $(".q14").removeClass("inactive")
});
$(".q14 .answerChoice").click(() => {
    $(".q14").addClass("inactive")
    $(".q15").removeClass("inactive")
});
$(".q15 .answerChoice").click(() => {
    $(".q15").addClass("inactive")
    $(".q16").removeClass("inactive")
});
$(".q16 .answerChoice").click(() => {
    $(".q16").addClass("inactive")
    $(".q17").removeClass("inactive")
});
$(".q17 .answerChoice").click(() => {
    $(".q17").addClass("inactive")
    $(".q18").removeClass("inactive")
});
$(".q18 .answerChoice").click(() => {
    $(".q18").addClass("inactive")
    $(".q19").removeClass("inactive")
});
$(".q19 .answerChoice").click(() => {
    $(".q19").addClass("inactive")
    $(".q20").removeClass("inactive")
});
$(".q20 .answerChoice").click(() => {
    $(".q20").addClass("inactive")
    $(".results").removeClass("inactive")
    if (points === 100) {
        $(".rank").html("SSS")
        $(".rankTitle").html("Safety Grandmaster")
        $(".rankDesc").html("The highest level of emergency-response proficiency and decision-making.")
    } else if (points >= 95) {
        $(".rank").html("SS")
        $(".rankTitle").html("Incident Commander")
        $(".rankDesc").html("Demonstrates outstanding leadership, coordination, and crisis management.")
    } else if (points >= 90) {
        $(".rank").html("S")
        $(".rankTitle").html("Emergency Specialist")
        $(".rankDesc").html("Exceptionally skilled in complex and high-pressure situations.")
    } else if (points >= 80) {
        $(".rank").html("A")
        $(".rankTitle").html("Senior Responder")
        $(".rankDesc").html("Highly capable of managing serious incidents and assisting others.")
    } else if (points >= 70) {
        $(".rank").html("B")
        $(".rankTitle").html("Qualified Responder")
        $(".rankDesc").html("Demonstrates solid emergency-response skills and sound judgment.")
    } else if (points >= 60) {
        $(".rank").html("C")
        $(".rankTitle").html("Junior Responder")
        $(".rankDesc").html("Can respond to routine incidents and follow established protocols.")
    } else if (points >= 40) {
        $(".rank").html("D")
        $(".rankTitle").html("Novice Responder")
        $(".rankDesc").html("Understands basic emergency procedures but has limited experience.")
    } else if (points >= -10) {
        $(".rank").html("E")
        $(".rankTitle").html("Untrained Civilian")
        $(".rankDesc").html("Has minimal knowledge of emergency response and safety protocols.")
    } else {
        $(".rank").html("F")
        $(".rankTitle").html("Unaware Civilian")
        $(".rankDesc").html("Has little to no awareness of emergency procedures or public safety.")

    }
});