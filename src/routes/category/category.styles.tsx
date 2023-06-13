import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  width: 100%;
  max-width: 1500px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
export const CategoryView = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
