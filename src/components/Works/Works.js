import {
  WorksContainer,
  WorksContent,
  WorksTitle,
  WorksCardContent,
  WorksCard,
  WorksIconContainer,
  WorksIcon1,
  WorksIcon2,
  WorksIcon3,
  WorksCardTitle,
  WorksCardText,
} from "./Works.styles";
const Works = () => {
  return (
    <div>
      <WorksContent>
        <WorksContainer>
          <WorksTitle> How it works</WorksTitle>
          <WorksCardContent>
            <WorksCard>
              <WorksIconContainer>
                <WorksIcon1 className="Icon" />
              </WorksIconContainer>
              <WorksCardTitle>Pick a Service</WorksCardTitle>
              <WorksCardText>
                There are different Services available for you to choose.
              </WorksCardText>
            </WorksCard>
            <WorksCard>
              <WorksIconContainer>
                <WorksIcon2 />
              </WorksIconContainer>
              <WorksCardTitle>Book a Service</WorksCardTitle>
              <WorksCardText>
                You can book a service by selecting the service you want.
              </WorksCardText>
            </WorksCard>
            <WorksCard>
              <WorksIconContainer>
                <WorksIcon3 />
              </WorksIconContainer>
              <WorksCardTitle>Enjoy</WorksCardTitle>
              <WorksCardText>
                Enjoy your service. You can cancel the service at any time.
              </WorksCardText>
            </WorksCard>
          </WorksCardContent>
        </WorksContainer>
      </WorksContent>
    </div>
  );
};

export default Works;
