import styled from 'styled-components';

const Entries = styled.section`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-gap: 1rem;
   margin-bottom: 2rem;
`;

export default Entries;
