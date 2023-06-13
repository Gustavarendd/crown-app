import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 200px;
  width: 400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 30px;
  padding: 10px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PaymentButton = styled(Button)`
  margin-top: 30px;
  max-width: 30%;
  align-self: center;
`;
