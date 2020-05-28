import * as React from 'react';
import styled from 'styled-components/native';
import TextTitleDarkRight from '../../universal/text/TextTitleDarkRight';
import ButtonLinkPurpleLarge from '../../universal/button/ButtonLinkPurpleLarge';
import LineGrayRightLong from '../../universal/line/LineGrayRightLong';
import MarginWide from '../../universal/margin/MarginWide';
import { d, color, c } from '../../../utils/constant';
import MarginNarrow from '../../universal/margin/MarginNarrow';
import TextTag from '../../universal/text/TextTag';
import TextContentDarkRight from '~/components/universal/text/TextContentDarkRight';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import TextContentLightRight from '~/components/universal/text/TextContentLightRight';
import TextContentLightLeft from '~/components/universal/text/TextContentLightLeft';

interface Props {
  tag: any;
  title: string;
  btnText: string;
  link: string;
  content: string;
}

const Container = styled.View`
  margin-right: ${d.px * 20}px;
  margin-left: ${d.px * 30}px;
`;

const TagContainer = styled.View`
  flex-direction: row;
`;

const TagBox = styled.View`
  margin-right: ${d.px * 12}px;
`;

const HomeCardDefaultContentPurpleButton = ({
  tag,
  title,
  btnText,
  link,
  content,
}: Props) => {
  return (
    <>
      <Container>
        <TextTitleDarkRight title={title} />
        <MarginWide />

        <TextContentLightLeft content={content} />
        <MarginMedium />
        <ButtonLinkPurpleLarge buttonText={btnText} link={link} />
        <MarginMedium />
        <TagContainer>
          {tag.map((tag) => {
            return (
              <TagBox>
                <TextTag tag={tag.tag} />
              </TagBox>
            );
          })}
        </TagContainer>
      </Container>
      <MarginNarrow />
      <LineGrayRightLong />
      <MarginWide />
    </>
  );
};

export default HomeCardDefaultContentPurpleButton;
