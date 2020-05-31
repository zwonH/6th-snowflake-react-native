import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';
import { View, Text } from 'react-native';
import NavBar from '~/screens/NavBar';
import { c, d, l } from '~/utils/constant';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import EmailInputForm from '~/components/universal/input/EmailInputForm'
import PasswdInputForm from '~/components/universal/input/PasswdInputForm';
import MarginWide from '~/components/universal/margin/MarginWide';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import BottomButtonLink from '~/components/universal/button/BottomButtonLink';
import Login from './Login';

const Container = styled.View`
  flex:1
`;

const InputContainer = styled.View`
  flex: 1
  margin-right: ${l.mR}px;
  margin-left: ${l.mL}px;
`;

const JoinThird = () => {
  return (
    <Container>
      <InputContainer>
        <TopBarWithIcon/>
        <EmailInputForm/>
        <Text>3번쨰</Text>
        <PasswdInputForm/>   
      </InputContainer>
      <BottomButtonLink
        buttonText={'다음'}
        link={'GenderColor'}
      />
    </Container>
  );
};

export default JoinThird;