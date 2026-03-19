import styled from 'styled-components';

const StatCardContainer = styled.div`
  background: ${({ theme }) => theme.palette.background.paper};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
`;

const StatLabel = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 4px;
`;

const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const StatChange = styled.p`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${({ positive }) => (positive ? '#22c55e' : '#ef4444')};
`;

export const StatCard = ({ label, value, change, positive }) => {
  return (
    <StatCardContainer>
      <StatLabel>{label}</StatLabel>
      <StatValue>{value}</StatValue>
      {change && <StatChange positive={positive}>{change}</StatChange>}
    </StatCardContainer>
  );
};
