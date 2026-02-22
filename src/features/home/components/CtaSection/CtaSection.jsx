import { ButtonFilled } from '@/shared/ui/Button';
import {
  CtaSectionContainer,
  CtaInner,
  CtaGradientBox,
  CtaTitle,
  CtaDescription,
} from './styles';

export const CtaSection = () => {
  return (
    <CtaSectionContainer>
      <CtaInner>
        <CtaGradientBox>
          <CtaTitle>Готовы начать?</CtaTitle>
          <CtaDescription>Присоединяйтесь к тысячам пользователей</CtaDescription>
          <ButtonFilled size="large">
            Создать аккаунт
          </ButtonFilled>
        </CtaGradientBox>
      </CtaInner>
    </CtaSectionContainer>
  );
};