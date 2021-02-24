import styled from "styled-components";

export const AnchContainer = styled.div`
  display: flex;
  max-width: 60rem;
  margin: auto auto;
`;

export const Anch = styled.a`
  text-decoration: underline;
  color: white;
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    color: pink;
    text-decoration: none;
  }
`;
