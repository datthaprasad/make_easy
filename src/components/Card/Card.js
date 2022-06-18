import {
  CardSubtitle,
  CardContainer,
  CardTitle,
  CardText,
  CardButton,
} from "./Card.styles";

export const Card = ({ name, description, price }) => {
  return (
    <CardContainer>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>{description}</CardSubtitle>
      {/* <CardText>{description}</CardText> */}
      <CardButton>{price}</CardButton>
    </CardContainer>
  );
};
