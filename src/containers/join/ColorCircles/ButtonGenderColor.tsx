import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import HomeMain from '~/screens/home/HomeMain';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '~/navigation/RootTabNavigation';
import { d, c } from '~/utils/constant';

interface Props {
  children: React.ReactNode;
  navigation: StackNavigationProp<RootTabParamList>;
}

const Screen = styled.View`
  flex: 1;
  background-color: white;
`;

const Container = styled.TouchableOpacity`
  height: ${d.height / 11}px;
  width: ${d.width}px;
  position: absolute;
  bottom: 0px;
  flex: 1;
  flex-direction: row;

  padding-top: ${d.px * 10}px;
  justify-content: center;
`;

const Title = styled.Text`
  color: white;
  font-size: ${d.px * 15}px;
  font-weight: 400;
`;

const ButtonGenderColor = ({ children, navigation }: Props) => {
  const womanColor = useSelector(
    (state: State) => state.genderColorReducer.womanColor
  );
  const manColor = useSelector(
    (state: State) => state.genderColorReducer.manColor
  );
  return (
    <Screen>
      {children}
      <Container
        style={{
          backgroundColor:
            womanColor === null
              ? c.lightGray
              : manColor === null
              ? c.lightGray
              : c.purple,
        }}
        onPress={() => navigation.navigate('HomeStack')}
      >
        <Title>눈송이 시작하기</Title>
      </Container>
    </Screen>
  );
};

export default withNavigation(ButtonGenderColor);
