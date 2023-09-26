import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import PokemonCard, { PokemonCardProps } from '.';
import pokemonApiSpy from '../../../../testing/spy/pokemonApiSpy';

describe('PokemonCard', () => {
  const queryClient = new QueryClient();

  const wrapper = ({ children }: { children: ReactElement }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('should not fail when no data provided', async () => {
    pokemonApiSpy.useFetch.mockReturnValue({});
    const { baseElement } = render(
      <PokemonCard {...({} as PokemonCardProps)} />,
      { wrapper }
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should render the pokemon name and id', async () => {
    pokemonApiSpy.useFetch.mockReturnValue({
      data: {
        id: 25,
        name: 'pikachu',
        sprites: { front_default: 'https://img.png' },
        base_experience: 112,
      },
    });

    const pokemonName = 'pikachu';
    const pokemonId = 25;

    const { baseElement, getByText } = render(
      <PokemonCard name={pokemonName} />,
      { wrapper }
    );

    expect(getByText(`#${pokemonId} - ${pokemonName}`)).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
