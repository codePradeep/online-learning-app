import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import Icons from '../../Assets/icons';
import Images from '../../Assets/images';
import { CommonBtn, Input } from '../../Common';
import { Strings } from '../../Constants';
import {selectedTheme} from '../../Constants/theme';
import style from './styles/loginStyle';

interface inputProps {
  navigation: any;
  onSubmit: () => void;
  hasErrorPass: boolean;
  setErrorPass: React.Dispatch<React.SetStateAction<boolean>>;
  hasErrorEmail: boolean;
  setErrorEmail: React.Dispatch<React.SetStateAction<boolean>>;
  errorMsg: string;
  setMsg: React.Dispatch<React.SetStateAction<string>>;
  setPass: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const LoginScreen = (newProps: inputProps) => {
  const {
    navigation,
    onSubmit,
    hasErrorPass,
    setErrorPass,
    hasErrorEmail,
    setErrorEmail,
    errorMsg,
    setMsg,
    setPass,
    setEmail,
  } = newProps;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={Images.bg} style={style.imgStyle}>
        <Text style={[style.txtLogin, {color: selectedTheme.textColor}]}>
          {Strings.Login}
        </Text>
      </ImageBackground>

      <View style={style.divider} />
      <View style={style.contentWrapper}>
        <View style={style.inputWrapper}>
          <Text style={style.txtUser}>{Strings.userormail}</Text>
          <Input
            hasError={hasErrorEmail}
            setError={setErrorEmail}
            errorMsg={errorMsg}
            setMsg={setMsg}
            onChangeText={(item: string) => setEmail(item)}
          />
        </View>

        <View style={style.inputWrapper}>
          <Text style={[style.txtUser, {marginTop: 10}]}>{Strings.pass}</Text>
          <Input
            hasError={hasErrorPass}
            setError={setErrorPass}
            errorMsg={errorMsg}
            setMsg={setMsg}
            onChangeText={(item:string) => setPass(item)}
            isIcon={true}
          />
        </View>
        <View style={style.inputWrapper}>
          <CommonBtn title={Strings.Login} onPress={() => onSubmit()} />
        </View>

        <View style={style.btmContainer}>
          <Text style={[style.txtOrlogin, {color: selectedTheme.textColor7}]}>
            {Strings.orlgnwith}
          </Text>
          <View style={style.socailWrapper}>
            <TouchableOpacity style={style.googleStyle}>
              <Image
                source={Icons.google}
                style={style.googleIconStyle}
                resizeMode="contain"
              />
              <Text style={style.txtFb}>{Strings.google}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.googleStyle}>
              <Image
                source={Icons.fb}
                style={style.googleIconStyle}
                resizeMode="contain"
              />
              <Text style={style.txtFb}>{Strings.fb}</Text>
            </TouchableOpacity>
          </View>
          <Text style={[style.txtNewuser, {color: selectedTheme.textColor7}]}>
            {Strings.newuser}
            <Text
              onPress={() => navigation.navigate('Register')}
              style={style.txtSignup}>
              {Strings.signupnow}
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
