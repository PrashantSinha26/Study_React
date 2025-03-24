import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';

it('Should load the restaurant card component with the props', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText('Skyhilton');

  expect(name).toBeInTheDocument();
});
