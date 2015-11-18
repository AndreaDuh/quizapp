$(document).ready(function () {
		function answerQuestion(answerNumber) {
		var question = quiz.questions[currentQuestionNumber];
		question.userAnswer = answerNumber;
		showAnswer(question.message, question.userAnswer === question.correctAnswer);
	}

/* Global Variables */
	var totalQuestions = 8;
	var currentQuestionNumber = 0;
	var answerNumber = document.getElementById('#answerNumber');

	/* Questions and Answers section */
	var quiz = {
		questions: [
			{
			                    number: 1,
			                    question: "Who was the original killer in the Friday the 13th films?",
			                    correctAnswer: 4,
			                    userAnswer: 0,
			                    message: "While Jason Voorhees is the iconic killer from the franchise, it was Pamela; Jason's mother who first started it all in the original.",
			                    answers: [
			                        {
			                            number: 1,
			                            answer: "Michael Myers"
			                        },
			                        {
			                            number: 2,
			                            answer: "Jason Voorhees"
			                        },
			                        {
			                            number: 3,
			                            answer: "Freddy Krueger"
			                        },
			                        {
			                            number: 4,
			                            answer: "Pamela Voorhees"
			                        }
			                    ]
				                },
				                {
				                    number: 2,
				                    question: "Who did Johnny Depp play in the hit slasher Nightmare on Elm Street?",
				                    correctAnswer: 2,
				                    userAnswer: 0,
				                    message: "Glen Lantz is considered to be one of Johnny's breakout roles in the 80s.",
				                    answers: [
				                        {
				                            number: 1,
				                            answer: "1. Jordan Thompson"                
				                        },
				                        {
				                            number: 2,
				                            answer: "2. Glen Lantz"
				                        },
				                        {
				                            number: 3,
				                            answer: "3. Bobby Gray"
				                        },
				                        {
				                            number: 4,
				                            answer: "4. Freddy Collins"
				                        }
				                    ]
				                },
				                {
				                    number: 3,
				                    question: "Which one of these ladies is not considered to be a final girl?",
				                    correctAnswer: 3,
				                    userAnswer: 0,
				                    message: "A final girl is characterized as the innocent and sweet girl, who ends up as the sole survivor in the end. Selina Kyle is Catwoman, a comic book character. Duh!",
				                    answers: [
				                        {
				                            number: 1,
				                            answer: "1. Sidney Prescott"
				                        },
				                        {
				                            number: 2,
				                            answer: "2. Laurie Strode"
				                        },
				                        {
				                            number: 3,
				                            answer: "3. Selina Kyle"
				                        },
				                        {
				                            number: 4,
				                            answer: "4. Nancy Thompson"
				                        }
				                    ]
				                },
				                {
				                    number: 4,
				                    question: "Accoring to Jamie Kennedy's Scream character, Randy Meeks; which one of these is a rule to survive a horror movie?",
				                    correctAnswer: 1,
				                    userAnswer: 0,
				                    message: "While all of these are useful, Randy emphasized on not having sex becasue it is a sin factor.",
				                    answers: [
				                        {
				                            number: 1,
				                            answer: "1. Don't have sex"
				                        },
				                        {
				                            number: 2,
				                            answer: "2. Never walk alone"
				                        },
				                        {
				                            number: 3,
				                            answer: "3. Grab a lethal weapon"
				                        },
				                        {
				                            number: 4,
				                            answer: "4. Hide and call the cops"
				                        }
				                    ]
				                },
				                {
				                    number: 5,
				                    question: "There is only one thing that can break Dracula's trance spell, what is it?",
				                    correctAnswer: 2,
				                    userAnswer: 0,
				                    message: "Dracula can be such a romantic. True love can break the trance he puts on his victims.",
				                    answers: [
				                        {
				                            number: 1,
				                            answer: "1. Garlic"
				                        },
				                        {
				                            number: 2,
				                            answer: "2. True love"
				                        },
				                        {
				                            number: 3,
				                            answer: "3. Stab Dracula with a wooden stake"
				                        },
				                        {
				                            number: 4,
				                            answer: "4. Burning his coffin"
				                        }
				                    ]
				                },
				                {
				                    number: 6,
				                    question: "What demon was Regan possessed by in the Exorcist movie?",
				                    correctAnswer: 4,
				                    userAnswer: 0,
				                    message: "Poor little Regan was possessed by a demon named Pazuzu. Which by the way is based on a true story.",
				                    answers: [
				                        {
				                            number: 1,
				                            answer: "1. Balthazar"
				                        },
				                        {
				                            number: 2,
				                            answer: "2. Lucifer"
				                        },
				                        {
				                            number: 3,
				                            answer: "3. Azazel"
				                        },
				                        {
				                            number: 4,
				                            answer: "4. Pazuzu"
				                        }
				                    ]
				                },
				                {
				                    number: 7,
				                    question: "Michael Myers usually uses what weapon to kill his victims?",
				                    correctAnswer: 1,
				                    userAnswer: 0,
				                    message: "A simple kitchen knife is all Michael needed to kill victims, including his sister.",
				                    answers: [
				                        {
				                            number: 1,
				                            answer: "1. Kitchen Knife"
				                        },
				                        {
				                            number: 2,
				                            answer: "2. Chainsaw"
				                        },
				                        {
				                            number: 3,
				                            answer: "3. Gloves with sharp knives attached to it"
				                        },
				                        {
				                            number: 4,
				                            answer: "4. Machete"
				                        }
				                    ]
				                },
				                {
				                    number: 8,
				                    question: "Leatherface of The Texas Chainsaw franchise is based off what real life serial killer?",
				                    correctAnswer: 3,
				                    userAnswer: 0,
				                    message: "Ed Gein is an inspiration for many fictional killers in cinemaas his real life actions are truly horrifying as it gets.",
				                    answers: [
				                        {
				                            number: 1,
				                            answer: "1. John Wayne Gacy"
				                        },
				                        {
				                            number: 2,
				                            answer: "2. Henry Howard Holmes"
				                        },
				                        {
				                            number: 3,
				                            answer: "3. Ed Gein"
				                        },
				                        {
				                            number: 4,
				                            answer: "4. Ted Bundy"
				                        }
				                    ]
				                }
		]
	};

/* For the user to answer the Question */
	$(".answer").click(function (event) {
        event.preventDefault();
        var selectedNumber = +$(this).attr("id").substring(6);
        answerQuestion(selectedNumber);
    });

/* Move on to next Question */
	function moveNext() {
    if (currentQuestionNumber < totalQuestions - 1) {
        currentQuestionNumber++;
        updateDisplayForQuestion(quiz.questions[currentQuestionNumber]);
    }
    else {
        finish();
    }
}

function updateDisplayForQuestion(question) {
    $("#questionNumber").text(question.number + "/" + totalQuestions - 1);
    $("#question").text(question.question);
    for (var i = 0; i <= 3; i++) {
        $("#answer" + (i + 1)).text(question.answers[i].answer);
    }
}


function finish() {
    var score = 0;
    for (var i = 0; i < quiz.questions.length; i++) {
        var question = quiz.questions[i];
        if (question.correctAnswer == question.userAnswer) {
            score++;
        }
    }

    var message = "Hey you did it! I hope you didn't google any answers, cause I put a curse on everyone who did. :) Anyways, you got: " + score + " out of a possible " + quiz.questions.length + ".";
    showFinish(message);
}

/* Bootstrap Modal for quiz */
	function showAnswer(message, correct) {
    var title = "Correct";
    var type = BootstrapDialog.TYPE_SUCCESS;
    if (!correct) {
        title = "Incorrect";
        type = BootstrapDialog.TYPE_DANGER;
    }
    BootstrapDialog.show({
        message: message,
        title: title,
        type: type,
        onhidden: function (dialogRef) {
            moveNext();
        },
        buttons: [
            {
                id: 'btn-ok',
                icon: 'glyphicon glyphicon-check',
                label: 'OK',
                cssClass: 'btn-primary',
                autospin: false,
                action: function (dialogRef) {
                    dialogRef.close();
                }
            }
        ]
    });
}

function showFinish(message) {
    BootstrapDialog.show({
        title: "Completed",
        message: message,
        buttons: [
            {
                id: 'btn-ok',
                icon: 'glyphicon glyphicon-check',
                label: 'OK',
                cssClass: 'btn-primary',
                autospin: false,
                action: function (dialogRef) {
                    dialogRef.close();
                }
            }
        ]
    });
}

});