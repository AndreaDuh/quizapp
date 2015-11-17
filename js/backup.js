	$(document).ready(function () {
		$(".answers").click(function (event) {
        event.preventDefault();
        var selectedNumber = +$(this).attr("class").substring(6);
        answerQuestion(selectedNumber);
    	});

	var quiz;
	var totalQuestions;
	var currentQuestionNumber;

/* Function for the user to input an answer */
	function answerQuestion(answerNumber) {
		var question = quiz.questions [currentQuestionNumber - 1];
		question.userAnswer = answerNumber;
		showAnswer(question.message, question.userAnswer == qustion.correctAnswer);
	}

/* Function for user to move on to the next question */
	function moveNext() {
		$()
		if (currentQuestionNumber < totalQuestions) {
			currentQuestionNumber++;
			updateDisplayForQuesation(quiz.questions[currentQuestionNumber - 1]);
		}
			else {
				finish();
			}
		}

	function updateDisplayForQuestion(question) {
	    $("#questions").text(questions.question);
	    for (var i = 0; i <= 3; i++) {
	        $("#answerNumber" + (i + 1)).text(questions.answers[i].answer);
	    }
	}

/* Function for when the user finishes quiz */
	function finish() {
	    var score = 0;
	    for (var i = 0; i < quiz.questions.length; i++) {
	        var question = quiz.questions[i];
	        if (question.correctAnswer == question.userAnswer) {
	            score++;
	        }
	    }

		    var message = "Hey! You did it! I hoped you didn't google the answers. I put a curse on everyone who did. ;) You scored " + score + " out of a possible " + quiz.questions.length + ".";
		    showFinish(message);
	}

/* Bootstrap Modal Messages */	
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
	                    $("#quizBoard").hide();
	                    $("#menu").show();
	                }
	            }
	        ]
	    });
	}


/* Questions and Answers section */
	var data =
	{
		quiz: [
			{
				questions: [
				{
                    
                    question: "Who was the original killer in the Friday the 13th films?",
                    correctAnswer: "4. Pamel Voorhees",
                    userAnswer: 0,
                    message: "While Jason Voorhees is the iconic killer from the franchise, it was Pamela; Jason's mother who first started it all in the original.",
                    answers: [
                        {
                            answer: "1. Michael Myers",
                        },
                        {
                            answer: "2. Jason Voorhees",
                        },
                        {
                            answer: "3. Freddy Krueger",
                        },
                        {
                            answer: "4. Pamela Voorhees",
                        }
                    ]
                },
		
				{
                    
                    question: "Who did Johnny Depp play in the hit slasher Nightmare on Elm Street?",
                    correctAnswer: "2. Glen Lantz",
                    userAnswer: 0,
                    message: "Glen Lantz is considered to be one of Johnny's breakout roles in the 80s.",
                    answers: [
                        {
                            answer: "1. Jordan Thompson",
                        },
                        {
                            answer: "2. Glen Lantz",
                        },
                        {
                            answer: "3. Bobby Gray",
                        },
                        {
                            answer: "4. Freddy Collins",
                        }
                    ]
                },

                {
                    
                    question: "Which one of these ladies is not considered to be a final girl?",
                    correctAnswer: "3. Selina Kyle",
                    userAnswer: 0,
                    message: "A final girl is characterized as the innocent and sweet girl, who ends up as the sole survivor in the end. Selina Kyle is Catwoman, a comic book character.",
                    answers: [
                        {
                            answer: "1. Sidney Prescott",
                        },
                        {
                            answer: "2. Laurie Strode",
                        },
                        {
                            answer: "3. Selina Kyle",
                        },
                        {
                            answer: "4. Nancy Thompson",
                        }
                    ]
                },

                {
                    
                    question: "Accoring to Jamie Kennedy's Scream character, Randy Meeks; which one of these is a rule to survive a horror movie?",
                    correctAnswer: "1. Don't have sex",
                    userAnswer: 0,
                    message: "While all of these are useful, Randy emphasized on not having sex becasue it is a sin factor.",
                    answers: [
                        {
                            answer: "1. Don't have sex",
                        },
                        {
                            answer: "2. Never walk alone",
                        },
                        {
                            answer: "3. Grab a lethal weapon",
                        },
                        {
                            answer: "4. Hide and call the cops",
                        }
                    ]
                },

                {
                    
                    question: "There is only one thing that can break Dracula's trance spell, what is it?",
                    correctAnswer: "2. True Love",
                    userAnswer: 0,
                    message: "Dracula can be such a romantic. True love can break the trance he puts on his victims.",
                    answers: [
                        {
                            answer: "1. Garlic",
                        },
                        {
                            answer: "2. True love",
                        },
                        {
                            answer: "3. Stab Dracula with a wooden stake",
                        },
                        {
                            answer: "4. Burning his coffin",
                        }
                    ]
                },

                {
                    
                    question: "What demon was Regan possessed by in the Exorcist movie?",
                    correctAnswer: "4. Pazuzu",
                    userAnswer: 0,
                    message: "Poor little Regan was possessed by a demon named Pazuzu. Which by the way is based on a true story.",
                    answers: [
                        {
                            answer: "1. Balthazar",
                        },
                        {
                            answer: "2. Lucifer",
                        },
                        {
                            answer: "3. Azazel",
                        },
                        {
                            answer: "4. Pazuzu",
                        }
                    ]
                },

                {
                    
                    question: "Michael Myers usually uses what weapon to kill his vicims?",
                    correctAnswer: "1. Kitchen Knife",
                    userAnswer: 0,
                    message: "A simple kitchen knife is what Michael used to kill his older sister and many others.",
                    answers: [
                        {
                            answer: "1. Kitchen Knife",
                        },
                        {
                            answer: "2. Chainsaw",
                        },
                        {
                            answer: "3. Gloves with sharp knives attached to it",
                        },
                        {
                            answer: "4. Machete",
                        }
                    ]
                },

                {
                    
                    question: "Leatherface of The Texas Chainsaw franchise is based off what real life serial killer?",
                    correctAnswer: "3. Ed Gein",
                    userAnswer: 0,
                    message: "Ed Gein is an inspiration for many fictional killers in cinemaas his real life actions are truly horrifying as it gets.",
                    answers: [
                        {
                            answer: "1. John Wayne Gacy",
                        },
                        {
                            answer: "2. Henry Howard Holmes",
                        },
                        {
                            answer: "3. Ed Gein",
                        },
                        {
                            answer: "4. Ted Bundy",
                        }
                    ]
                }
        	}
        ]
    };

});









var Question1 = {
        answerNumber: 1,
        question: "Who was the original killer in the Friday the 13th films?",
        correctAnswer: '4. Pamela Voorhees',
        userAnswer: 0,
        message: "Glen Lantz is considered to be one of Johnny's breakout roles in the 80s.",
        answers: ['1. Michael Myers', '2. Jason Voorhees', '3.Freddy Frueger', '4.Pamela Voorhees'],
    };

    var Question2 = {
        answerNumber: 2,
        question: "Who did Johnny Depp play in the hit slasher Nightmare on Elm Street?",
        correctAnswer: "2. Glen Lantz",
        userAnswer: 0,
        message: "A final girl is characterized as the innocent and sweet girl, who ends up as the sole survivor in the end. Selina Kyle is Catwoman, a comic book character.",
        answers: ['1. Jordan Thompson', '2. Glen Lantz', '3. Bobby Gray', '4. Freddy Collins'],
    };

    var Question3 = {
        answerNumber: 3,
        question: "Which one of these ladies is not considered to be a final girl?",
        correctAnswer: "3. Selina Kyle",
        userAnswer: 0,
        message: "While Jason Voorhees is the iconic killer from the franchise, it was Pamela; Jason's mother who first started it all in the original.",
        answers: ['1. Sidney Prescott', '2. Laurie Strode', '3. Selina Kyle', '4. Nancy Thompson'],
    };

    var Question4 = {
        answerNumber: 4,
        question: "Accoring to Jamie Kennedy's Scream character, Randy Meeks; which one of these is a rule to survive a horror movie?",
        correctAnswer: "1. Don't have sex",
        userAnswer: 0,
        message: "While all of these are useful, Randy emphasized on not having sex becasue it is a sin factor.",
        answers: ["1. Don't have sex'", '2. Never walk alone', '3. Grab a lethal weapon', '4. Hide and call the cops'],
    };

    var Question5 = {
        answerNumber: 5,
        question: "There is only one thing that can break Dracula's trance spell, what is it?",
        correctAnswer: "2. True Love",
        userAnswer: 0,
        message: "Dracula can be such a romantic sap. True love is what can break his trance.",
        answers: ['1. Garlic', '2. True love', '3. Stab Dracula with a wooden stake', '4. Burning his coffin'],
    };

    var Question6 = {
        answerNumber: 6,
        question: "What demon was Regan possessed by in the Exorcist movie?",
        correctAnswer: "4. Pazuzu",
        userAnswer: 0,
        message: "Poor little Regan was possessed by a demon named Pazuzu. Which by the way is based on a true story.",
        answers: ['1. Balthazar', '2. Lucifer', '3. Azazel', '4. Pazuzu'],
    };

    var Question7 = {
        answerNumber: 7,
        question: "Michael Myers usually uses what weapon to kill his vicims?",
        correctAnswer: "1. Kitchen Knife",
        userAnswer: 0,
        message: "A simple kitchen knife is what Michael used to kill his older sister and many others.",
        answers: ['1. Kitchen Knife', '2. Chainsaw', '3. Gloves with sharp knives attached to it', '4. Machete'],
    };

    var Question8 = {
        answerNumber: 8,
        question: "Leatherface of The Texas Chainsaw franchise is based off what real life serial killer?",
        correctAnswer: "3. Ed Gein",
        userAnswer: 0,
        message: "Ed Gein is an inspiration for many fictional killers in cinemaas his real life actions are truly horrifying as it gets.",
        answers: ['1. John Wayne Gacy', '2. Henry Howard Holmes', '3. Ed Gein', '4. Ted Bundy'],
    };