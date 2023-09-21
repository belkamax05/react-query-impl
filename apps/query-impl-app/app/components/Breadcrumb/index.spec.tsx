import { render } from '@testing-library/react';
import * as navigation from 'next/navigation';
import Breadcrumb from '.';

jest.mock('next/navigation');

const usePathnameSpy = jest.spyOn(navigation, 'usePathname');

describe('Breadcrumb', () => {
  beforeEach(() => {
    usePathnameSpy.mockReturnValue('/path/to/some/page');
  });

  it('should render the correct href for each breadcrumb link', () => {
    const { getByText } = render(<Breadcrumb />);
    expect(getByText('Path').getAttribute('href')).toBe('/path');
    expect(getByText('To').getAttribute('href')).toBe('/path/to');
    expect(getByText('Some').getAttribute('href')).toBe('/path/to/some');
    expect(getByText('Page').getAttribute('href')).toBe('/path/to/some/page');
  });
});
