import styled from 'styled-components';

const Profile = styled.div`
   display: flex;
   align-items: center;

   span {
      padding: 1rem;
      font-size: 1rem;
   }

   @media (max-width: 375px) {
      span {
         display: none;
      }
   }

   @media (min-width: 500px) {
      font-size: 2rem;
   }
`;

export default Profile;
