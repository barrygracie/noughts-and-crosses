import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom';
import App from '../index';

test('check sidenav', () => {
    render(<App/>);
    const sidenavElement = screen.getByTestId('sn1');
    expect(sidenavElement).toBeInTheDocument();
    expect(sidenavElement).toHaveTextContent('Contents');
})



