import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PageContainer } from '@/shared/ui/PageContainer';
import DashboardInfoCard from '@/shared/ui/DashboardInfoCard';
import { useMeQuery } from '@/entities/auth/api/authApi';

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 32px 64px;
`;

const Welcome = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const WelcomeName = styled.span`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.palette.primary.main},
    ${({ theme }) => (theme.palette.mode === 'dark' ? '#64b5f6' : '#1565c0')}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;
  margin-bottom: 52px;
`;

const AppName = styled(Link)`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CARDS = [
  {
    icon: '📊',
    title: 'Анализ бюджета',
    description:
      'Просматривайте расходы и доходы по категориям. ИИ автоматически выявляет паттерны трат и аномалии.',
    linkText: 'Открыть аналитику',
    linkTo: '/analytics',
  },
  {
    icon: '💰',
    title: 'Управление расходами',
    description:
      'Добавляйте и категоризируйте расходы, отслеживайте лимиты и контролируйте баланс в реальном времени.',
    linkText: 'Перейти к расходам',
    linkTo: '/expenses',
  },
  {
    icon: '📁',
    title: 'Категории',
    description:
      'Создавайте собственные категории расходов и доходов для точного учёта и детального контроля финансов.',
    linkText: 'Управлять категориями',
    linkTo: '/categories',
  },
  {
    icon: '🤖',
    title: 'ИИ-рекомендации',
    description:
      'Получайте персональные советы по оптимизации бюджета на основе ваших финансовых данных и привычек.',
    linkText: 'Смотреть рекомендации',
    linkTo: '/recommendations',
  },
  {
    icon: '🔮',
    title: 'Прогноз расходов',
    description:
      'ИИ анализирует историю трат и строит прогноз на следующий месяц, помогая избежать перерасхода.',
    linkText: 'Смотреть прогноз',
    linkTo: '/forecast',
  },
  {
    icon: '⚠️',
    title: 'Аномалии и алерты',
    description:
      'Автоматические уведомления о подозрительных тратах, превышении лимитов и нетипичных паттернах.',
    linkText: 'Настроить алерты',
    linkTo: '/alerts',
  },
  {
    icon: '📅',
    title: 'История операций',
    description: 'Полный журнал всех финансовых операций с фильтрацией по дате, категории и сумме.',
    linkText: 'Открыть историю',
    linkTo: '/history',
  },
  {
    icon: '📈',
    title: 'Отчёты',
    description:
      'Генерируйте детальные отчёты за любой период. Экспорт в PDF и Excel для удобного хранения данных.',
    linkText: 'Смотреть отчёты',
    linkTo: '/reports',
  },
  {
    icon: '⚙️',
    title: 'Настройки профиля',
    description:
      'Управляйте личными данными, сменяйте пароль и настраивайте предпочтения отображения бюджета.',
    linkText: 'Открыть настройки',
    linkTo: '/settings',
  },
];

const HomePage = () => {
  const { data } = useMeQuery();

  return (
    <PageContainer>
      <Inner>
        <Welcome>
          Добро пожаловать, <WelcomeName>{data?.user?.name ?? 'пользователь'}</WelcomeName>!
        </Welcome>
        <Subtitle>
          Управляйте финансами умнее c <AppName to="/home">Zenny</AppName>
        </Subtitle>
        <CardsGrid>
          {CARDS.map((card) => (
            <DashboardInfoCard key={card.linkTo} {...card} />
          ))}
        </CardsGrid>
      </Inner>
    </PageContainer>
  );
};

export default HomePage;
