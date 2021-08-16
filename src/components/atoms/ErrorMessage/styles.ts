import styled from 'styled-components';

const ErrorMessage = styled.span`
   color: ${props => props.theme.text.error};
   margin: 1rem 0;
`;

export default ErrorMessage;
