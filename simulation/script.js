var difficulty;
var time;
var senario;
var points = 0;
var emergency = false;
var timer;
var timesUp = false;
var finished = false;
var paused = false;
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
$("#floodSenarioSelect").click(() => {
    $("#chooseSenarioConnected").addClass("inactive");
    $("#floodSenario").removeClass("inactive");
});
$("#separated1SenarioSelect").click(() => {
    $("#chooseSenarioSeparated").addClass("inactive");
    $("#separatedSenario1").removeClass("inactive");
});
$(".start").click(() => {
    if (emergency) {
        $(".textbox").addClass("emergency");
        $(".timeTicker").removeClass("inactive");
        timer = time;
        $(".timeLeft").html(timer);
        setInterval(() => {
            if (!paused) {
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
            }
        }, 1000);
        $(".answerChoice").click(() => {
            timer = time;
            $(".timeLeft").html(timer);
        });
    }
});
$("#separatedSenario1 .start").click(() => {
    $("#separatedSenario1 .beginning").addClass("inactive");
    $("#separatedSenario1 .q1").removeClass("inactive");
});
$("#fireSenario .start").click(() => {
    $("#fireSenario .beginning").addClass("inactive");
    $("#fireSenario .q1").removeClass("inactive");
});
$("#floodSenario .start").click(() => {
    $("#floodSenario .beginning").addClass("inactive");
    $("#floodSenario .q1").removeClass("inactive");
});
$(".answerChoice").click(() => {
    timesUp = false;
})
$(".answerChoice.dangerous").click(() => {
    if (!paused) {
        points -= 5;
        $(".pointsCount").html(points);
    }
});
$(".answerChoice.correct").click(() => {
    if (!paused) {
        if (!timesUp) {
            points += 5;
            $(".pointsCount").html(points);
        }
    }
});
$("#fireSenario .q19 .answerChoice").click(() => {
    if (!paused) {
        $(".timeTicker").addClass("inactive");
        finished = true;
    }
})
$("#fireSenario .q20 .answerChoice").click(() => {
    if (!paused) {
        if (timesUp) {
            points += 5;
            $(".pointsCount").html(points);
        }
    }
})
$(".q1 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q1").addClass("inactive")
            $(".q2").removeClass("inactive")
        }, 3000)
    }
});
$(".q2 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q2").addClass("inactive")
            $(".q3").removeClass("inactive")
        }, 3000)
    }
});
$(".q3 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q3").addClass("inactive")
            $(".q4").removeClass("inactive")
        }, 3000)
    }
});
$(".q4 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q4").addClass("inactive")
            $(".q5").removeClass("inactive")
        }, 3000)
    }
});
$(".q5 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q5").addClass("inactive")
            $(".q6").removeClass("inactive")
        }, 3000)
    }
});
$(".q6 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q6").addClass("inactive")
            $(".q7").removeClass("inactive")
        }, 3000)
    }
});
$(".q7 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q7").addClass("inactive")
            $(".q8").removeClass("inactive")
        }, 3000)
    }
});
$(".q8 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q8").addClass("inactive")
            $(".q9").removeClass("inactive")
        }, 3000)
    }
});
$(".q9 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q9").addClass("inactive")
            $(".q10").removeClass("inactive")
        }, 3000)
    }
});
$(".q10 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q10").addClass("inactive")
            $(".q11").removeClass("inactive")
        }, 3000)
    }
});
$(".q11 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q11").addClass("inactive")
            $(".q12").removeClass("inactive")
        }, 3000)
    }
});
$(".q12 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q12").addClass("inactive")
            $(".q13").removeClass("inactive")
        }, 3000)
    }
});
$(".q13 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q13").addClass("inactive")
            $(".q14").removeClass("inactive")
        }, 3000)
    }
});
$(".q14 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q14").addClass("inactive")
            $(".q15").removeClass("inactive")
        }, 3000)
    }
});
$(".q15 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q15").addClass("inactive")
            $(".q16").removeClass("inactive")
        }, 3000)
    }
});
$(".q16 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q16").addClass("inactive")
            $(".q17").removeClass("inactive")
        }, 3000)
    }
});
$(".q17 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q17").addClass("inactive")
            $(".q18").removeClass("inactive")
        }, 3000)
    }
});
$(".q18 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q18").addClass("inactive")
            $(".q19").removeClass("inactive")
        }, 3000)
    }
});
$(".q19 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q19").addClass("inactive")
            $(".q20").removeClass("inactive")
        }, 3000)
    }
});
$(".q20 .answerChoice").click(() => {
    if (!paused) {
        paused = true;
        $(".answerChoice").addClass("showColor");
        setTimeout(() => {
            $(".answerChoice").removeClass("showColor");
            paused = false;
            $(".q20").addClass("inactive")
            $(".results").removeClass("inactive")
            if (points === 100) {
                $(".rank").html("SSS")
                $(".rankTitle").html("Master Responder")
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
        }, 3000)
    }
})