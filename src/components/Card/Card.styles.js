import styled from "styled-components";

export const CardContainer = styled.div`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  display: flex;
  width: 75%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  @media only screen and (max-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  margin : 0 auto;
`;

export const CardTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ebd0d0;
  margin: 0;
  text-transform: uppercase;
  padding: 1rem 0;
`;

export const CardSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f1f1f1;
  margin: 0;
  padding: 0.5rem 0;
`;

export const CardText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ebd0d0;
  margin: 0;
`;

export const CardButton = styled.button`
  background: linear-gradient(to right, #000 0%, #03219b 55%, #000 100%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  margin: 1rem 0;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  transform: translateY(1.5rem);
`;
