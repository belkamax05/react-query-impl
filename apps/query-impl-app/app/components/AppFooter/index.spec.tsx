import { render } from '@testing-library/react';
import AppFooter from '.';
import { START_TIME } from '../../config/env';

describe('AppFooter', () => {
  it('should render the footer with the correct startup and init times', async () => {
    const { baseElement, getByText } = render(<AppFooter />);
    const startupTime = getByText(`Startup time: ${START_TIME.toISOString()}`);
    const initTime = getByText(`Init time: ${new Date().toISOString()}`);
    expect(startupTime).toBeInTheDocument();
    expect(initTime).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
