import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom';
import Quiz from '../quiz';

test('check quiz', () => {
    render(<Quiz/>);
    const quizElement = screen.getByTestId('q1');
    expect(quizElement).toBeInTheDocument();
    expect(quizElement).toHaveTextContent('HTML');
})



