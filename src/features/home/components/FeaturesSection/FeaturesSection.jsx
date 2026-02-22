import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ShieldIcon from '@mui/icons-material/Shield';
import { Card, CardContent } from '@/shared/ui/Card';
import { Section, SectionHeader } from '@/shared/ui/Section';
import {
  FeaturesGrid,
  FeatureIconWrapper,
  FeatureTitle,
  FeatureDescription,
} from './styles';

const features = [
  {
    icon: AccountBalanceWalletIcon,
    title: 'Учёт расходов',
    description: 'Автоматическая категоризация транзакций и детальная статистика.',
  },
  {
    icon: ShowChartIcon,
    title: 'Аналитика',
    description: 'Понятные графики и отчёты о ваших финансах.',
  },
  {
    icon: ShieldIcon,
    title: 'Безопасность',
    description: 'Банковский уровень защиты ваших данных.',
  },
];

export const FeaturesSection = () => {
  return (
    <Section id="features">
      <SectionHeader
        title="Всё для контроля финансов"
        description="Интуитивные инструменты для правильных финансовых решений"
      />
      <FeaturesGrid>
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardContent>
              <FeatureIconWrapper>
                <feature.icon style={{ fontSize: 32 }} />
              </FeatureIconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </CardContent>
          </Card>
        ))}
      </FeaturesGrid>
    </Section>
  );
};