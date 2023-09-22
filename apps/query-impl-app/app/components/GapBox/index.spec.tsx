import { render } from '@testing-library/react';
import { GapBox } from './index';

describe('GapBox', () => {
  it('should render with default props', () => {
    const { container } = render(<GapBox />);
    expect(container.firstChild).toHaveStyle('display: flex');
    expect(container.firstChild).toHaveStyle('gap: 8px');

    expect(container).toMatchSnapshot();
  });

  it('should render with custom props', () => {
    const { container } = render(<GapBox display="grid" gap={2} />);
    expect(container.firstChild).toHaveStyle('display: grid');
    expect(container.firstChild).toHaveStyle('gap: 16px');

    expect(container).toMatchSnapshot();
  });
});
