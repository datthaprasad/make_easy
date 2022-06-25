import {
  CardSubtitle,
  CardContainer,
  CardTitle,
  CardButton,
} from "./Card.styles";

export const Card = ({ name, description, price, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>{description}</CardSubtitle>
      {/* <CardText>{description}</CardText> */}
      <CardButton>{price}</CardButton>
    </CardContainer>
  );
};
