import styled from "styled-components";

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(to bottom right, black, #121212);
  border: 1px solid #f5f5f5;
  margin-top: 20px;
`;

export const ProfileName = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 10px;
  color: #f5f5f5;
  position: relative;
  text-transform: uppercase;
  text-align: center;
`;

export const ProfileEmail = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  position: relative;
  left: 0;
`;

export const ProfileService = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProfileButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  transform: translateY(100%);
`;

export const StyledLabel = styled.span`
  font-size: 1.8rem;
  color: #f1f1f1;
  margin: 5px;
  font-weight: normal;
  text-transform: uppercase;
`;
