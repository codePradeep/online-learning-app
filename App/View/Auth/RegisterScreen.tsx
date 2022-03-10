import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icons from '../../Assets/icons';


import {selectedTheme} from '../../Constants/theme';
import style from './styles/registerStyle';
import { CommonBtn, Input } from '../../Common';
import { DummyData, Strings } from '../../Constants';

interface inputProps {
  navigation: any;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setErrorPass: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  hasErrorUser: boolean;
  setUsername: React.Dispatch<React.SetStateAction<boolean>>;
  hasErroEmail: boolean;
  setErrorEmail: React.Dispatch<React.SetStateAction<boolean>>;
  hasPass: boolean;
  setPass: React.Dispatch<React.SetStateAction<string>>;
  errormsg: string;
  setMsg: React.Dispatch<React.SetStateAction<string>>;
  handleSignup: () => void;
}

const RegisterScreen = (newProps: inputProps) => {
  const {
    navigation,
    selected,
    setSelected,
    setErrorPass,
    setUser,
    setEmail,
    hasErrorUser,
    setUsername,
    hasErroEmail,
    setErrorEmail,
    hasPass,
    setPass,
    errormsg,
    setMsg,
    handleSignup,
  } = newProps;

  const RenderCards = ():any => {
    return DummyData.CardsData.map((item: any, index: number) => (
      <TouchableOpacity
        onPress={() => setSelected(index)}
        style={selected == index ? style.leftCard : style.onleftCard}>
        {selected == index ? (
          <Image
            source={Icons.completed}
            style={style.completedStyle}
            resizeMode="contain"
          />
        ) : (
          <View style={style.circleStyle} />
        )}

        <View style={style.txtWrapper}>
          <Text style={selected == index ? style.txtIam : style.txtIamBlack}>
            {item.text1}
          </Text>
          <Text
            style={
              selected == index ? style.txtStudent : style.txtStudentblack
            }>
            {item.text2}
          </Text>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View
      style={[
        style.parentContainer,
        {backgroundColor: selectedTheme.backgroundColor1},
      ]}>
      <View style={style.divider} />
      <Text style={[style.txtRegister, {color: selectedTheme.textColor}]}>
        {Strings.Register}
      </Text>
      <View style={style.cardStyle}>
        <RenderCards />
      </View>
      <View style={style.contentContainer}>
        <Text style={style.txtUser}>{Strings.username}</Text>
        <View style={style.inputWrapper}>
          <Input
            setError={setUsername}
            hasError={hasErrorUser}
            setMsg={setMsg}
            errorMsg={errormsg}
            onChangeText={(item: string) => setUser(item)}
          />
        </View>
        <Text style={style.txtUser}>{Strings.email}</Text>
        <View style={style.inputWrapper}>
          <Input
            setError={setErrorEmail}
            setMsg={setMsg}
            errorMsg={errormsg}
            hasError={hasErroEmail}
            onChangeText={(item: string) => setEmail(item)}
          />
        </View>
        <Text style={style.txtUser}>{Strings.pass}</Text>
        <View style={style.inputWrapper}>
          <Input
            setError={setErrorPass}
            setMsg={setMsg}
            errorMsg={errormsg}
            hasError={hasPass}
            onChangeText={(item: string) => setPass(item)}
            isIcon={true}
          />
        </View>
      </View>
      <View style={style.btnContainer}>
        <CommonBtn
          title={Strings.createAccount}
          onPress={() => handleSignup()}
        />
      </View>

      <View style={style.btmContainer}>
        <Text style={[style.txtOrlogin, {color: selectedTheme.textColor7}]}>
          {Strings.orsignup}
        </Text>
        <View style={style.socailWrapper}>
          <TouchableOpacity style={style.googleStyle}>
            <Image
              source={Icons.google}
              style={style.googleIconStyle}
              resizeMode="contain"
            />
            <Text>{Strings.google}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.googleStyle}>
            <Image
              source={Icons.fb}
              style={style.googleIconStyle}
              resizeMode="contain"
            />
            <Text>{Strings.fb}</Text>
          </TouchableOpacity>
        </View>
        <Text style={[style.txtNewuser, {color: selectedTheme.textColor7}]}>
          {Strings.already}
          <Text
            onPress={() => navigation.navigate('Login')}
            style={style.txtSignup}>
            {' ' + Strings.Login}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
