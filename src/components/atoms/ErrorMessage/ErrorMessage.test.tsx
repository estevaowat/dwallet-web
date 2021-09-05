import React from 'react';

import { render, screen } from '@testing-library/react';

import ErrorMessage from './ErrorMessage';

it('should render ErrorMessage', () => {
   render(<ErrorMessage text="User or password incorrect" />);
   const errorMessage = screen.getByText('User or password incorrect');
   expect(errorMessage).toBeInTheDocument();
});
