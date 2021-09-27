import styled from "styled-components";

export const SearchContainer = styled.div`
  // height: 3.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  margin-top: 1rem;
  width: 35%;
  height: 3.25rem;
  border: none;
  font-size: 1.125rem;
  text-indent: 10px;
  color: #727E8E
  width: 200px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #6898d5;
  }
`;

export const SearchButton = styled.button`
  margin-top: 1rem;
  height: 3.25rem;
  border: none;
  background-color: #6495ed;
  font-size: 1.125rem;
  color: white;
  width: 20%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #6898d5;
  }
`;
