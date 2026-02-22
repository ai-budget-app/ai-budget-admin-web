import { useState } from 'react';
import { Section, SectionHeader } from '@/shared/ui/Section';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { FaqContainer, FaqItem, FaqQuestion, FaqAnswer, IconWrapper } from './styles';

const faqs = [
  {
    question: 'Как начать пользоваться Zenny?',
    answer: 'Просто создайте аккаунт, добавьте свои счета и начните отслеживать расходы. Всё интуитивно понятно и займёт не более 5 минут.',
  },
  {
    question: 'Мои данные в безопасности?',
    answer: 'Да, мы используем шифрование банковского уровня. Ваши данные никогда не передаются третьим лицам.',
  },
  {
    question: 'Есть ли мобильное приложение?',
    answer: 'Да, приложение доступно для iOS и Android. Синхронизация между устройствами происходит в реальном времени.',
  },
  {
    question: 'Сколько стоит использование?',
    answer: 'Использование полностью бесплатное.',
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Section id="faq">
      <SectionHeader
        title="Часто задаваемые вопросы"
        description="Нашли ответы на самые популярные вопросы"
      />
      <FaqContainer>
        {faqs.map((faq, i) => (
          <FaqItem key={i}>
            <FaqQuestion onClick={() => toggle(i)}>
              {faq.question}
              <IconWrapper>
                {openIndex === i ? <RemoveIcon /> : <AddIcon />}
              </IconWrapper>
            </FaqQuestion>
            {openIndex === i && (
              <FaqAnswer>{faq.answer}</FaqAnswer>
            )}
          </FaqItem>
        ))}
      </FaqContainer>
    </Section>
  );
};