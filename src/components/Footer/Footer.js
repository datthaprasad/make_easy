import {
  FooterSection,
  FooterContainer,
  FooterNewsletter,
  FooterNewsletterTitle,
  FooterNewsletterText,
  FooterNewsletterForm,
  FooterNewsletterInput,
  FooterBtn,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinks,
  FooterLinkTitle,
  FooterLink,
  FooterCopyRight,
  FooterLabel,
} from "./Footer.styles";
function Footer() {
  return (
    <div>
      <FooterSection>
        <FooterContainer>
          <FooterNewsletter>
            <FooterNewsletterTitle>
              Join our listing for execlusive discounts and new services
            </FooterNewsletterTitle>
            <FooterNewsletterText>
              We create new world of services for you.
            </FooterNewsletterText>
            <FooterNewsletterForm>
              <FooterLabel htmlFor="email">Email address</FooterLabel>
              <FooterNewsletterInput
                name="email"
                id="email"
                type="email"
                placeholder="Email address"
              />
              <FooterBtn>Submit</FooterBtn>
            </FooterNewsletterForm>
          </FooterNewsletter>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinks>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">Our Admin</FooterLink>
                <FooterLink to="/">Our Executive</FooterLink>
                <FooterLink to="/">Website</FooterLink>
                <FooterLink to="/">Terms of service</FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLinkTitle>Services</FooterLinkTitle>
                <FooterLink to="/">How it works</FooterLink>
                <FooterLink to="/">Payment</FooterLink>
                <FooterLink to="/">Gift cards</FooterLink>
                <FooterLink to="/">Orders</FooterLink>
              </FooterLinks>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinks>
                <FooterLinkTitle>Resources</FooterLinkTitle>
                <FooterLink to="/">Service provider</FooterLink>
                <FooterLink to="/">Developers</FooterLink>
                <FooterLink to="/">FAQ &amp; Support</FooterLink>
                <FooterLink to="/">Affiliate Program</FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLinkTitle>Contact</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Linkedin</FooterLink>
              </FooterLinks>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <FooterCopyRight to="https://github.com/prajna-y-shetty/MakeEasy">
            {" "}
            &copy; Copyright 2020, Designed and coded with 💛 by Prajna Y Shetty
          </FooterCopyRight>
        </FooterContainer>
      </FooterSection>
    </div>
  );
}

export default Footer;
