import styled from 'styled-components';
import { Card, CardContent } from '@/shared/ui/Card';
import Typography from '@mui/material/Typography';

const HoverCard = styled(Card)`
  && {
    height: 100%;
    cursor: default;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      border-color 0.2s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.14);
      border-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

const StyledCardContent = styled(CardContent)`
  && {
    padding: 32px !important;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.75rem;
  margin-bottom: 16px;
  line-height: 1;
`;

const Description = styled(Typography)`
  && {
    flex: 1;
    margin-bottom: 20px;
  }
`;

const StyledLink = styled.a`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
  margin-top: auto;

  &:hover {
    text-decoration: underline;
  }
`;

const DashboardInfoCard = ({ icon, title, description, linkText, linkTo }) => {
  return (
    <HoverCard>
      <StyledCardContent>
        <IconWrapper>{icon}</IconWrapper>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          {title}
        </Typography>
        <Description variant="body1" color="text.secondary">
          {description}
        </Description>
        {linkText && linkTo && <StyledLink href={linkTo}>{linkText} →</StyledLink>}
      </StyledCardContent>
    </HoverCard>
  );
};

export default DashboardInfoCard;
