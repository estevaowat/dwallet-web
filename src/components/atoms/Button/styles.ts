import styled from 'styled-components';

const Button = styled.button`
   background: ${props => props.theme.button};
   border: 0;
   border-radius: 8px;

   font-size: 18px;
   font-weight: bold;

   color: ${props => props.theme.text.button};

   margin: 12px 0;
   padding: 12px;
   width: 300px;
`;

export default Button;
