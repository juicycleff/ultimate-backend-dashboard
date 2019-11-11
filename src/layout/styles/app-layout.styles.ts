import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr 100px;
  grid-template-areas: "header" "main" "footer";
  min-height: 100%;
  height: auto;
`;
