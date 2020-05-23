import * as React from 'react';
import ProductBox from '~/components/product/main/ProductBox';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Trio = () => {
  const productList = [
    { type: '얇기', company: '바른 생각', title: '퍼펙트핏' },
    { type: '내구성', company: '이브', title: '울트라씬' },
    { type: '윤활제', company: '듀렉스', title: '필 울트라씬' },
  ];
  return (
    <Container>
      {productList.map((product) => {
        return <ProductBox product={product} />;
      })}
    </Container>
  );
};

export default Trio;