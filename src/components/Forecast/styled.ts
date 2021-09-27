import styled from "styled-components";

export const ForecastContainer = styled.div`
  margin-top: 1rem;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 1.5rem 2rem;
  overflow: hidden;
`;
export const SectionTitle = styled.h6`
  font-weight: 500;
  font-size: 1rem;
  color: #727e8e;
`;
export const ForecastItems = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;

  > :last-child {
    margin-right: 0;
  }
`;
export const ForecastItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  h6 {
    font-weight: 600;
    font-size: 0.8rem;
    color: #4581c5;
  }
  svg {
    width: 4rem;
    height: 4rem;
    margin: 0.7rem 0;
  }
  p {
    font-size: 0.7rem;
    color: #4a6fa1;
    max-width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  span {
    font-size: 1.1rem;
    color: #4a6fa1;
    width: 7rem;
    text-align: center;
  }
`;
