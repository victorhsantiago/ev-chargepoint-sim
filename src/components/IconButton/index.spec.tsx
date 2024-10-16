import { render, screen, fireEvent } from '@testing-library/react';
import IconButton from './index';
import { vi } from 'vitest';
import { Icons } from '@/models';

describe('IconButton Component', () => {
  it('should render with the correct label and aria-label', () => {
    render(<IconButton ariaLabel="Test button" label="Click me" />);

    const button = screen.getByLabelText('Test button');
    expect(button).toBeTruthy();
    expect(button.innerHTML).toContain('Click me');
  });

  it('should render with left and right icons', () => {
    render(
      <IconButton ariaLabel="Icon button" leftIcon="cross" rightIcon="plus" />
    );

    const button = screen.getByLabelText('Icon button');
    expect(button.innerHTML).toContain(Icons.cross);
    expect(button.innerHTML).toContain(Icons.plus);
  });

  it('should call onClick when clicked', () => {
    const handleClick = vi.fn();
    render(
      <IconButton
        ariaLabel="Clickable button"
        label="Click me"
        onClick={handleClick}
      />
    );

    const button = screen.getByLabelText('Clickable button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render with primary style by default', () => {
    render(<IconButton ariaLabel="Primary button" label="Click me" />);

    const button = screen.getByLabelText('Primary button');
    expect(button.classList).toContain('icon-button--primary');
  });

  it('should render with secondary style when specified', () => {
    render(
      <IconButton
        ariaLabel="Secondary button"
        label="Click me"
        style="secondary"
      />
    );

    const button = screen.getByLabelText('Secondary button');
    expect(button.classList).toContain('icon-button--secondary');
  });

  it('should render with the correct button type', () => {
    render(
      <IconButton ariaLabel="Submit button" label="Submit" type="submit" />
    );

    const button = screen.getByLabelText('Submit button');
    expect(button).toHaveProperty('type', 'submit');
  });

  it('should apply additional classes when className prop is passed', () => {
    render(
      <IconButton
        ariaLabel="Styled button"
        label="Click me"
        className="custom-class"
      />
    );

    const button = screen.getByLabelText('Styled button');
    expect(button.classList).toContain('custom-class');
  });
});
