import React, { useState } from 'react';

export default function Quiz() {
	const questions = [
		{
			questionText: 'What does HTML Stand for?',
			answerOptions: [
				{ answerText: 'Hyper Teenage Mutant Lizards', isCorrect: false },
				{ answerText: 'Hyper Text Messaging Language', isCorrect: false },
				{ answerText: 'Hyper Text Markup Language', isCorrect: true },
				{ answerText: 'Hyper Text Madeup Language', isCorrect: false },
			],
		},
		{
			questionText: 'Q2',
			answerOptions: [
				{ answerText: 'wrong', isCorrect: false },
				{ answerText: 'right', isCorrect: true },
				{ answerText: 'wrong', isCorrect: false },
				{ answerText: 'wrong', isCorrect: false },
			],
		},
		{
			questionText: 'Q3',
			answerOptions: [
				{ answerText: 'right', isCorrect: true },
				{ answerText: 'wrong', isCorrect: false },
				{ answerText: 'wrong', isCorrect: false },
				{ answerText: 'wrong', isCorrect: false },
			],
		},
		{
			questionText: 'Q4',
			answerOptions: [
				{ answerText: 'wrong', isCorrect: false },
				{ answerText: 'wrong', isCorrect: false },
				{ answerText: 'wrong', isCorrect: false },
				{ answerText: 'right', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}