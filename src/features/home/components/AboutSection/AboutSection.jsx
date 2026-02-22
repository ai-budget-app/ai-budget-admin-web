import { Section, SectionHeader } from '@/shared/ui/Section';
import { Card, CardContent } from '@/shared/ui/Card';
import { AboutGrid, AboutIconWrapper, AboutTitle, AboutDescription } from './styles';
import BoltIcon from '@mui/icons-material/Bolt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';

const cards = [
  {
    icon: BoltIcon,
    title: 'Наша миссия',
    description: 'Сделать финансовое планирование доступным и понятным для каждого человека.',
  },
  {
    icon: FavoriteIcon,
    title: 'Наши ценности',
    description: 'Безопасность, прозрачность и простота — три принципа на которых строится Zenny.',
  },
  {
    icon: GroupsIcon,
    title: 'Наша команда',
    description: 'Мы небольшая команда из 12 человек, влюблённых в продукт и финансовые технологии.',
  },
];

export const AboutSection = () => {
  return (
    <Section id="about">
      <SectionHeader
        title="О нас"
        description="Zenny — это современный инструмент для управления личными финансами"
      />
      <AboutGrid>
        {cards.map((card, i) => (
          <Card key={i}>
            <CardContent>
              <AboutIconWrapper>
                <card.icon style={{ fontSize: 32 }} />
              </AboutIconWrapper>
              <AboutTitle>{card.title}</AboutTitle>
              <AboutDescription>{card.description}</AboutDescription>
            </CardContent>
          </Card>
        ))}
      </AboutGrid>
    </Section>
  );
};