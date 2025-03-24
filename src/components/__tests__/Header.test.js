import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import '@testing-library/jest-dom';

it('Should load header componenent to be render', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Suppose the card item get change 0 to 1 then it will show the error. For that we should use JAX-RS ("/text.../")

  const cardItems = screen.getByText(/Cart:/);

  const loginButton = screen.getByRole('button', { name: 'Login' });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole('button', { name: 'Logout' });
  expect(logoutButton).toBeInTheDocument();
});
