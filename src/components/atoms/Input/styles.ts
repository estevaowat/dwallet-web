import styled from 'styled-components';

const Input = styled.input`
   padding: 12px;
   border-radius: 8px;
   border: 2px solid
      ${props => {
         console.log(props.theme);
         return props.theme.primary;
      }};
   font-size: 16px;
   margin: 12px 0;
   width: 300px;

   :focus {
      border: 2px solid ${props => props.theme.selected};
      transition: border 0.2s linear;
   }

   .has-error {
      border: 2px solid ${props => props.theme.border.error};
   }
`;

export default Input;
