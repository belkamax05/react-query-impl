import { render, screen, fireEvent } from '@testing-library/react';
import CounterPanel from '.';

describe('CounterPanel', () => {
  it('should render the counter value', () => {
    const counter = 5;
    const { baseElement, getByTestId } = render(<CounterPanel counter={counter} />);

    expect(getByTestId(`counter-value`)).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  it('should call onIncrement when the increment button is clicked', () => {
    const onIncrement = jest.fn();
    render(<CounterPanel counter={0} onIncrement={onIncrement} />);
    const incrementButton = screen.getByText('Inc');
    fireEvent.click(incrementButton);
    expect(onIncrement).toHaveBeenCalled();
  });

  it('should call onDecrement when the decrement button is clicked', () => {
    const onDecrement = jest.fn();
    render(<CounterPanel counter={0} onDecrement={onDecrement} />);
    const decrementButton = screen.getByText('Dec');
    fireEvent.click(decrementButton);
    expect(onDecrement).toHaveBeenCalled();
  });
});