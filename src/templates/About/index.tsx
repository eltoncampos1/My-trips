import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My trips</S.Heading>

    <S.Body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aperiam
      praesentium. Error, excepturi? Officia laudantium unde voluptatem nesciunt
      provident dicta repellat porro repudiandae odio iste vero vitae, dolores
      eligendi commodi?
    </S.Body>
  </S.Content>
);

export default AboutTemplate;
