import styled from 'styled-components';

const Entries = styled.section`
   display: grid;
   border: 1px solid red;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   align-items: center;
   justify-items: center;
   grid-gap: 1rem;
`;

export default Entries;
