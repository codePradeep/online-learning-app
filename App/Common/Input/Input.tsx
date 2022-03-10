import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Icons from '../../Assets/icons';
import style from './inputStyle';

interface inputProps { 
  isIcon:boolean,
  hasError:boolean,
  setError:boolean,
  errorMsg:string,
  setMsg:string,
  onChangeText:()=>void,
}

const Input = ({
  isIcon,
  hasError,
  setError,
  errorMsg,
  setMsg,
  onChangeText,
}: any) => {
  const [toggle, setToggle] = useState(true);


  return (
    <View style={style.parentContainer}>
      <View style={style.wrapperContainer}>
        <TextInput
          style={style.inputContainer}
          onChangeText={(item: string) => {
            onChangeText(item), setError(false), setMsg('');
          }}
          secureTextEntry={isIcon && toggle}
        />
        {isIcon && (
          <TouchableOpacity
            onPress={() => setToggle(!toggle)}
            style={style.iconStyleWrapper}>
            <Image
              source={!toggle ? Icons.eye : Icons.eyeClose}
              style={style.iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      {hasError && <Text style={style.txtError}>{errorMsg}</Text>}
    </View>
  );
};

export default Input;
