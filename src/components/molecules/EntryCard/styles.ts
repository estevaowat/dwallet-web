import styled from 'styled-components';

const StyledEntryCard = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #ffffff;
   max-width: 250px;
   padding: 1.5rem;
   border-radius: 1.25rem;
`;

const TitleHeaderEntryCard = styled.div`
   font-size: 1rem;
   font-weight: bold;
   margin-bottom: 1rem;
`;

const AmountEntryCard = styled.div`
   display: flex;
   flex-direction: row;
   align-items: baseline;
   color: '#333';
   font-weight: bold;
   margin-bottom: 1rem;
`;

const AmountTextEntryCard = styled.span`
   font-size: 0.75rem;
   color: ${props => props.theme.text.entryCard};
   font-weight: normal;
   padding-left: 0.5rem;
`;

const Graph = styled.div``;

export {
   StyledEntryCard,
   TitleHeaderEntryCard,
   AmountEntryCard,
   AmountTextEntryCard,
   Graph,
};
