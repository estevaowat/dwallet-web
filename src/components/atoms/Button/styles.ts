import styled from 'styled-components';

const Button = styled.button`
   background: ${props => props.theme.button.default};
   border: 0;
   border-radius: 8px;

   font-size: 18px;
   font-weight: bold;

   color: ${props => props.theme.text.button};

   margin: 12px 0;
   padding: 12px;
   width: 300px;
   &:hover {
      background: ${props => props.theme.button.focused};
      transition: background 0.3s linear;
   }

   &:focus {
      background: ${props => props.theme.button.focused};
   }
`;

export default Button;
