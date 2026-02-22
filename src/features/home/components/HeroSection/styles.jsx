import styled from 'styled-components';

export const HeroSectionContainer = styled.section`
  padding-top: 128px;
  padding-bottom: 80px;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  isolation: isolate;
`;

export const SilkWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(to bottom,
    rgba(255,255,255,0.5) 0%,
    rgba(255,255,255,0.3) 50%,
    rgba(255,255,255,1) 100%
  );
  pointer-events: none;
`;

export const ContentWrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 64px;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const DashboardWrapper = styled.div`
  position: relative;
  max-width: 56rem;
  margin: 0 auto;
`;

export const DashboardGlow = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(59,130,246,0.2), rgba(99,102,241,0.2));
  border-radius: 24px;
  filter: blur(48px);
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ChartContainer = styled.div`
  height: 192px;
  background: linear-gradient(to bottom right, rgba(59,130,246,0.05), rgba(99,102,241,0.05));
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 16px;
`;

export const ChartBar = styled.div`
  width: 24px;
  background: linear-gradient(to top, #3b82f6, #60a5fa);
  border-radius: 4px 4px 0 0;
  transition: background 0.2s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to top, #2563eb, #3b82f6);
  }
`;