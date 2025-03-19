import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import "@testing-library/jest-dom";

// Describe is use to group the test cases

describe('Test cases of Contact Componnet', () => {

  // We can use it/test both are same.
  
  it('Should load the contact us componenent', () => {
    render(<Contact />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test('Should load the button on Contact componenent', () => {
    render(<Contact />);

    const button = screen.getByRole('button');

    //Assertion
    expect(button).toBeInTheDocument();
  });
});