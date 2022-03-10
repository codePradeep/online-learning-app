import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icons from '../../Assets/icons';
import style from './style/styleFile';
import {selectedTheme} from '../../Constants/theme';
import { DummyData, Strings } from '../../Constants';

const ChapterFIlesView = () => {
  //function that return student view

  const RenderStudents = ():any => {
    const data = DummyData.StudentData;
    return data.map((item:any, index:number) => (
      <View key={index} style={style.studentWrpr}>
        <Image source={item.icon} style={style.imgStyle} />
        <Text style={style.txtTxt}>{item.title}</Text>
      </View>
    ));
  };

  //function that return files view

  const RenderFiles = ():any => {
    const data = DummyData.FileData;
    return data.map((item, index) => (
      <View key={index} style={style.fileWrpr}>
        <View style={style.iconView}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={style.iconStyle}
          />
        </View>
        <View style={style.txtView}>
          <Text style={[style.txtTitle, {color: selectedTheme.textColor}]}>
            {item.title}
          </Text>
          <Text style={style.txtDesc}>{item.desc}</Text>
          <Text style={[style.txtDate, {color: selectedTheme.textColor}]}>
            {item.date}
          </Text>
        </View>
        <TouchableOpacity style={style.styleDot}>
          <Image
            source={Icons.menu}
            style={style.menuIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View
      style={[
        style.parentContainer,
        {
          width: '100%',
          paddingHorizontal: 15,
          backgroundColor: selectedTheme.backgroundColor1,
        },
      ]}>
      <View style={style.uprContainer}>
        <Text style={[style.txtStudent, {color: selectedTheme.textColor}]}>
          {Strings.students}
        </Text>
        <View style={style.studentWrapper}>
          <RenderStudents />
        </View>
      </View>
      <View style={style.lwrContainer}>
        <View style={style.lwrUprContainer}>
          <Text style={[style.txtFile, {color: selectedTheme.textColor}]}>
            {Strings.file}
          </Text>
        </View>
        <View style={style.lwrlwrContainer}>
          <RenderFiles />
        </View>
      </View>
    </View>
  );
};

export default ChapterFIlesView;
