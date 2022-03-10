import React from 'react'
import {  Text, TouchableOpacity, Image } from 'react-native'
import style from './styleCategory';

const RenderItem = ({item,index,selected,setSelected}:any) => {
  return (
    <TouchableOpacity
            onPress={() => setSelected(1)}
            style={selected != index ? style.listView : style.unlistView}>
            <Image
              source={item.icon}
              style={style.iconStyle}
              resizeMode="contain"
            />
            <Text style={selected == index ? style.txtList : style.untxtList}>
              {item.title}
            </Text>
          </TouchableOpacity>
  )
}

export default RenderItem