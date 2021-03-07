import * as S from './styles';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="React avançado logo" />
      <S.Title>React avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS and styled components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="desenvolvedor em frente ao computador"
      />
    </S.Wrapper>
  );
};

export default Main;
