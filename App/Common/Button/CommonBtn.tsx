import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import style from './styleBtn';



const CommonBtn = ({title, onPress}:any) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={style.parentContainer}>
      <Text style={style.txtTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonBtn;
