import styled from 'styled-components';
import { theme } from '../../GlobalStyles';

const Container = styled.div`
  max-width: ${theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-family: ${theme.fonts.secondary};
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const About = () => {
  return (
    <Container>
      <Title>Sobre</Title>
      <Text>
        Olá, viajantes do universo geek! 👾🚀 Meu nome é Luiz, sou programador por profissão e nerd por vocação. Desde que me entendo por gente (e olha que já faz alguns patch updates), minha vida gira em torno de códigos, animes, filmes e games.
      </Text>
      <Text>
        Se você também é do tipo que assiste a um anime inteiro em um fim de semana, debate teorias malucas sobre filmes e séries ou gasta horas explorando mundos virtuais, então seja bem-vindo ao Keeg Club, o lugar perfeito para geeks como nós!
      </Text>
      <Text>
        Não vou revelar minha idade, mas digamos que já vivi tempo suficiente para ter visto o nascimento do streaming, a ascensão dos isekais e presenciado discussões épicas sobre "quem venceria: Goku ou Superman?".
      </Text>
      <Text>
        Aqui no blog, compartilho tudo o que mais curto sobre cultura pop, tecnologia e aquele universo geek que tanto amamos. Então, prepare-se para reviews, listas, notícias e muito conteúdo feito para quem, assim como eu, respira esse mundo fantástico!
      </Text>
    </Container>
  );
};