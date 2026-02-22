import { StatCard } from '@/shared/ui/StatCard';
import { ButtonFilled, ButtonOutlined } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/Card';
import GradientText from '../GradientText/GradientText';
import {
  HeroSectionContainer,
  SilkWrapper,
  GradientOverlay,
  ContentWrapper,
  ButtonGroup,
  DashboardWrapper,
  DashboardGlow,
  StatsGrid,
  ChartContainer,
  ChartBar,
} from './styles';
import Silk from '../Silk/Silk';

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <SilkWrapper>
        <Silk
          speed={5}
          scale={1}
          color="#3a88fe"
          noiseIntensity={1.5}
          rotation={0}
        />
      </SilkWrapper>

      <GradientOverlay />

      <ContentWrapper>
        <GradientText
          colors={['#0062ff', '#FF9FFC', '#00fbff']}
          animationSpeed={2}
          showBorder={false}
          className="hero-gradient-text"
        >
          Финансы под
          <br />
          контролем
        </GradientText>

        <ButtonGroup>
          <ButtonFilled size="large">
            Попробовать
          </ButtonFilled>
          <ButtonOutlined size="large">
            Узнать больше
          </ButtonOutlined>
        </ButtonGroup>

        <DashboardPreview />
      </ContentWrapper>
    </HeroSectionContainer>
  );
};

const DashboardPreview = () => {
  const stats = [
    { label: 'Баланс', value: '₽124,500', change: '+12.5%', positive: true },
    { label: 'Доходы', value: '₽85,000', change: '+8.2%', positive: true },
    { label: 'Расходы', value: '₽42,300', change: '-3.1%', positive: false },
    { label: 'Накопления', value: '₽215,700', change: '+15.7%', positive: true },
  ];

  const chartData = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];

  return (
    <DashboardWrapper>
      <DashboardGlow />
      <Card>
        <CardContent>
          <StatsGrid>
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </StatsGrid>
          <ChartContainer>
            {chartData.map((height, i) => (
              <ChartBar key={i} style={{ height: `${height}%` }} />
            ))}
          </ChartContainer>
        </CardContent>
      </Card>
    </DashboardWrapper>
  );
};