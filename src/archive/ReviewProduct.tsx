import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';

const Container = styled.View`
  height: ${d.width * 0.8}px;
  width: ${d.width}px;
  background-color: white;
  border-radius: 50px;
`;

const BackContainer = styled.View`
  height: ${d.width * 0.6}px;
  width: ${d.width}px;
  background-color: white;
  flex-direction: row;
`;

const ProductInfoContainer = styled.View`
  height: ${d.width * 0.45}px;
  width: ${d.width * 0.38}px;
  margin-top: ${d.width * 0.05}px;
  margin-left: ${d.width * 0.1}px;
`;

const RankNumText = styled.Text`
  color: ${c.darkGray};
  font-weight: 900;
  font-size: ${d.px * 13}px;
`;

const BrandText = styled.Text`
  color: ${c.darkGray};
  font-weight: 900;
  margin-top: ${d.width * 0.03}px;
  font-size: ${d.px * 16}px;
`;

const NameText = styled.Text`
  color: ${c.darkGray};
  font-weight: 900;
  margin-top: ${d.width * 0.02}px;
  font-size: ${d.px * 23}px;
`;

const ThreeInfoContainer = styled.View`
  margin-top: ${d.width * 0.04}px;
`;

const InfoText = styled.Text`
  color: ${c.darkGray};
  margin-top: ${d.width * 0.01}px;
`;

const TotalScoreText = styled.Text`
  color: ${c.darkGray};
  margin-top: ${d.width * 0.02}px;
  font-weight: 700;
  font-size: ${d.px * 42}px;
`;

const ImageContainer = styled.View`
  margin-top: ${d.width * 0.05}px;
`;

const Image = styled.Image`
  height: ${d.width * 0.52}px;
  width: ${d.width * 0.5}px;
  resize-mode: contain;
`;

const TrioScoreContainer = styled.View`
  height: ${d.width * 0.1}px;
  width: ${d.width}px;
  margin-top: ${d.width * 0.02}px;
  flex-direction: row;
  justify-content: space-around;
`;

const EachScoreContainer = styled.View`
  align-items: center;
`;

const ScoreTitle = styled.Text`
  margin-top: ${d.width * 0.01}px;
  color: ${c.darkGray};
  font-weight: 700;
  font-size: ${d.px * 15}px;
`;

const Score = styled.Text`
  color: ${c.darkGray};
  margin-top: ${d.width * 0.01}px;
  font-weight: 700;
  font-size: ${d.px * 13}px;
`;

const ReviewProduct = (props) => {
  return (
    <Container>
      <BackContainer>
        <ProductInfoContainer>
          <RankNumText>
            {props.rankInfo.style} {props.rankInfo.rank}위
          </RankNumText>
          <BrandText>{props.productInfo.brand}</BrandText>
          <NameText>{props.productInfo.name}</NameText>
          <ThreeInfoContainer>
            <InfoText>길이 {props.productInfo.length}mm</InfoText>
            <InfoText>폭 {props.productInfo.width}mm</InfoText>
            <InfoText>두께 {props.productInfo.thickness}mm</InfoText>
          </ThreeInfoContainer>
          <TotalScoreText>{props.score.totalScore}</TotalScoreText>
        </ProductInfoContainer>
        <ImageContainer>
          <Image source={require('~/img/ultraThin.png')} />
        </ImageContainer>
      </BackContainer>
      <TrioScoreContainer>
        <EachScoreContainer>
          <ScoreTitle>얇기</ScoreTitle>
          <Score>{props.score.thinScore}</Score>
        </EachScoreContainer>
        <EachScoreContainer>
          <ScoreTitle>내구성</ScoreTitle>
          <Score>{props.score.durableScore}</Score>
        </EachScoreContainer>
        <EachScoreContainer>
          <ScoreTitle>윤활제</ScoreTitle>
          <Score>{props.score.slushScore}</Score>
        </EachScoreContainer>
      </TrioScoreContainer>
    </Container>
  );
};

export default ReviewProduct;
