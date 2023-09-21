import { render } from '@testing-library/react';
import AppHeader from '.';

describe('AppHeader', () => {
  it('should render the header with the correct links', async () => {
    const { baseElement, getByText } = render(<AppHeader />);
    const homeLink = getByText('Home');
    const samplesLink = getByText('Samples');

    expect(homeLink).toBeInTheDocument();
    expect(samplesLink).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
