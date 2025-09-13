import {render, screen} from "@testing-library/react";
import {Button} from "./Button";
import '@testing-library/jest-dom';

describe('Button tests', () => {
  test('should render correctly', () => {
    render(<Button />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    screen.debug();
  })
})