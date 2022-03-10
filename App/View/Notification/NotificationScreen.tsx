import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import style from './styleNotification';
import Images from '../../Assets/images';
import Icons from '../../Assets/icons';
import {selectedTheme} from '../../Constants/theme';
import { DummyData, Strings } from '../../Constants';

const NotificationScreen = (newProps: any) => {
  const {navigation} = newProps;

  const RenderList = ():any => {
    return DummyData.NotificationData.map((item:any, index:number) => {
      return (
        <View key={index} style={style.contentWrapper}>
          <View style={style.leftContainer}>
            <Image source={item.icon} style={style.iconStyle} />
          </View>
          <View style={style.rightContainer}>
            <View style={style.txtContainer}>
              <Text style={[style.txtName, {color: selectedTheme.textColor}]}>
                {item.name}
              </Text>
              <Text style={[style.txtTime, {color: selectedTheme.textColor7}]}>
                {item.time}
              </Text>
            </View>
            <Text style={[style.txtDes, {color: selectedTheme.textColor7}]}>
              {item.des}
            </Text>
          </View>
        </View>
      );
    });
  };

  return (
    <ImageBackground
      source={Images.bg}
      style={style.imgStyle}
      resizeMode="cover">
      <View
        style={[
          style.parentContainer,
          {backgroundColor: selectedTheme.backgroundColor1},
        ]}>
        <View style={style.titleWrapper} />
        <View style={style.divider}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              style.backWrapper,
              {backgroundColor: selectedTheme.backgroundColor5},
            ]}>
            <Image source={Icons.back} style={style.styleBack} />
          </TouchableOpacity>
          <Text
            style={[style.txtNotification, {color: selectedTheme.textColor}]}>
            {Strings.notification}
          </Text>
          <Text style={style.txtToday}>{Strings.today}</Text>
        </View>
        <View style={style.contentContainer}>
          <ScrollView contentContainerStyle={style.scrollStyle}>
            <View style={style.uprScroll}>
              <RenderList />
              <RenderList />
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default NotificationScreen;
