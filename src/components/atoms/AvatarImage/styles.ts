import styled from 'styled-components';

const AvatarImage = styled.img`
   height: 5rem;
   width: 5rem;
   border-radius: 50%;

   @media (max-width: 800px) {
      height: 3rem;
      width: 3rem;
   }
`;

export default AvatarImage;
