import styled from 'styled-components';

const Row = styled.div`
   display: grid;
   grid-template-columns:
      3rem minmax(0, 10rem) minmax(0, 10rem) minmax(0, 10rem)
      minmax(0, 10rem);
   min-width: 500px;
   grid-gap: 1rem;
   margin: 1rem 0;
   justify-items: stretch;
   align-items: center;
`;

export default Row;
