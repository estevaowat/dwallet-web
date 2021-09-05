import React from 'react';

import { render, screen } from '@testing-library/react';

import AvatarImage from './AvatarImage';

test('should render AvatarImage', () => {
   render(<AvatarImage />);
   const imageDescription = screen.getByAltText(/avatar/i);
   expect(imageDescription).toBeInTheDocument();
});
