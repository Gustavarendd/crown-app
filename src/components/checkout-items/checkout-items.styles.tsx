import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  /* max-height: 200px; */
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  overflow: hidden;
`;
export const ImageContainer = styled.div`
  width: 23%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Name = styled.span`
  width: 23%;
  text-align: center;
`;

export const QuantityContainer = styled.div`
  display: flex;
  width: 23%;
  justify-content: center;
  gap: 10%;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.div`
  display: flex;
  justify-content: center;
  width: 23%;
`;

export const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 23%;
`;
