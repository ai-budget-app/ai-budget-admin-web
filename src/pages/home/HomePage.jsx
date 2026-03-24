import {
  SettingsOutlined as SettingsOutlinedIcon,
  AssessmentOutlined as AssessmentOutlinedIcon,
  HistoryOutlined as HistoryOutlinedIcon,
  WarningAmberOutlined as WarningAmberOutlinedIcon,
  AutoGraphOutlined as AutoGraphOutlinedIcon,
  TipsAndUpdatesOutlined as TipsAndUpdatesOutlinedIcon,
  CategoryOutlined as CategoryOutlinedIcon,
  AccountBalanceWalletOutlined as AccountBalanceWalletOutlinedIcon,
  AnalyticsOutlined as AnalyticsOutlinedIcon
} from '@mui/icons-material';
import { PageContainer } from '@/shared/ui/PageContainer';
import DashboardInfoCard from '@/pages/home/ui/DashboardInfoCard/DashboardInfoCard';
import { useMeQuery } from '@/entities/auth/api/authApi';
import {
  HomePageContent,
  HomePageTitle,
  WelcomeName,
  WelcomeSubtitle,
  AppNameLink,
  CardsGrid,
} from './styles';

const CARDS = [
  {
    icon: AnalyticsOutlinedIcon,
    title: 'Анализ бюджета',
    description:
      'Просматривайте расходы и доходы по категориям. ИИ автоматически выявляет паттерны трат и аномалии.',
    linkText: 'Открыть аналитику',
    linkTo: '/analytics',
  },
  {
    icon: AccountBalanceWalletOutlinedIcon,
    title: 'Управление расходами',
    description:
      'Добавляйте и категоризируйте расходы, отслеживайте лимиты и контролируйте баланс в реальном времени.',
    linkText: 'Перейти к расходам',
    linkTo: '/expenses',
  },
  {
    icon: CategoryOutlinedIcon,
    title: 'Категории',
    description:
      'Создавайте собственные категории расходов и доходов для точного учёта и детального контроля финансов.',
    linkText: 'Управлять категориями',
    linkTo: '/categories',
  },
  {
    icon: TipsAndUpdatesOutlinedIcon,
    title: 'ИИ-рекомендации',
    description:
      'Получайте персональные советы по оптимизации бюджета на основе ваших финансовых данных и привычек.',
    linkText: 'Смотреть рекомендации',
    linkTo: '/recommendations',
  },
  {
    icon: AutoGraphOutlinedIcon,
    title: 'Прогноз расходов',
    description:
      'ИИ анализирует историю трат и строит прогноз на следующий месяц, помогая избежать перерасхода.',
    linkText: 'Смотреть прогноз',
    linkTo: '/forecast',
  },
  {
    icon: WarningAmberOutlinedIcon,
    title: 'Аномалии и алерты',
    description:
      'Автоматические уведомления о подозрительных тратах, превышении лимитов и нетипичных паттернах.',
    linkText: 'Настроить алерты',
    linkTo: '/alerts',
  },
  {
    icon: HistoryOutlinedIcon,
    title: 'История операций',
    description: 'Полный журнал всех финансовых операций с фильтрацией по дате, категории и сумме.',
    linkText: 'Открыть историю',
    linkTo: '/history',
  },
  {
    icon: AssessmentOutlinedIcon,
    title: 'Отчёты',
    description:
      'Генерируйте детальные отчёты за любой период. Экспорт в PDF и Excel для удобного хранения данных.',
    linkText: 'Смотреть отчёты',
    linkTo: '/reports',
  },
  {
    icon: SettingsOutlinedIcon,
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
      <HomePageContent>
        <HomePageTitle>
          Добро пожаловать, <WelcomeName>{data?.user?.name ?? 'пользователь'}</WelcomeName>!
        </HomePageTitle>

        <WelcomeSubtitle>
          Управляйте финансами умнее c <AppNameLink to="/home">Zenny</AppNameLink>
        </WelcomeSubtitle>

        <CardsGrid>
          {CARDS.map((card) => (
            <DashboardInfoCard key={card.linkTo} {...card} />
          ))}
        </CardsGrid>
      </HomePageContent>
    </PageContainer>
  );
};

export default HomePage;