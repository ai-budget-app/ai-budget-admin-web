import Typography from '@mui/material/Typography';
import {
  HoverCard,
  StyledCardContent,
  IconWrapper,
  Description,
  StyledLink,
} from './DashBoardCardStyles';

const DashboardInfoCard = ({ icon: Icon, title, description, linkText, linkTo }) => {
  return (
    <HoverCard>
      <StyledCardContent>
        <IconWrapper>{Icon && <Icon fontSize="inherit" />}</IconWrapper>

        <Typography variant="h5" gutterBottom fontWeight={600}>
          {title}
        </Typography>

        <Description variant="body1" color="text.secondary">
          {description}
        </Description>

        {linkText && linkTo && <StyledLink to={linkTo}>{linkText} →</StyledLink>}
      </StyledCardContent>
    </HoverCard>
  );
};

export default DashboardInfoCard;