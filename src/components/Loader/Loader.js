import styled from "styled-components";
const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingSpinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid blue;
  border-bottom: 16px solid blue;
  width: 30%;
  height: 30%;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const CardContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AnimatedText = styled.h1`
  font-size: 40px;
  font-weight: bold;
  animation: fadeIn 0.5s;
  -webkit-animation: fadeIn 2s infinite;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
      }
      50% {
          opacity: 1;
      }
      100% {
        opacity: 0;
      }
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <CardContainer>
        <LoadingSpinner />
        <AnimatedText>Please wait...</AnimatedText>
      </CardContainer>
    </LoaderContainer>
  );
};
export default Loader;
