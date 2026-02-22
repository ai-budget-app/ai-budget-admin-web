import { FooterContainer, FooterContent, FooterText } from './styles';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          Copyright © {year} Zenny. All rights reserved.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};