import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icons from '../../Assets/icons';
import Images from '../../Assets/images';

import style from './styleProfile';
import {selectedTheme, toggleSelectedTheme} from '../../Constants/theme';
import { DummyData, Strings } from '../../Constants';

interface inputProps {
  navigation: any;
  setImage: any;
  selectedImg: null;
}

const ProfileScreen = (newProps: inputProps) => {
  const [isRender, setRender] = useState(false);

  const {navigation, selectedImg, setImage} = newProps;

  // function that handle theme

  function toggleThemeHanddler() {
    toggleSelectedTheme();
    setRender(!isRender);
    console.log('render', isRender);
  }

  // function that handle change profile action

  const selectFile = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      
    },
    (response) => {
      console.log(response);
     
    });
    if (result) {
      setImage(result?.assets[0].uri);
    }
  };

  // upper view component

  const RenderUprlist = ():any => {
    return DummyData.profileData1.map((item, index) => {
      return (
        <View key={index} style={style.UprView}>
          <View style={style.imageView}>
            <Image
              source={item.icon}
              style={style.iconStyle}
              resizeMode="contain"
            />
          </View>
          <View style={style.txtView}>
            <Text style={[style.txtTitle, {color: selectedTheme.textColor7}]}>
              {item.title}
            </Text>
            <Text style={[style.txtName, {color: selectedTheme.textColor}]}>
              {item.name}
            </Text>
          </View>
          <View style={style.arrowView}>
            <Image
              source={Icons.rightArrow}
              style={[style.rightStyle, {tintColor: selectedTheme.white}]}
              resizeMode="contain"
            />
          </View>
        </View>
      );
    });
  };

  // lower view component

  const Renderlwrlist = ():any => {
    return DummyData.profileData2.map((item, index) => {
      return (
        <View key={index} style={style.UprView}>
          <View style={style.imageView}>
            <Image
              source={item.icon}
              style={style.iconStyle}
              resizeMode="contain"
            />
          </View>
          <View style={style.txtView}>
            <Text style={[style.txtName, {color: selectedTheme.textColor}]}>
              {item.title}
            </Text>
          </View>
          <View style={style.arrowView}>
            <Image
              source={Icons.rightArrow}
              style={[style.rightStyle, {tintColor: selectedTheme.white}]}
              resizeMode="contain"
            />
          </View>
        </View>
      );
    });
  };

  return (
    <View
      style={[
        style.parentContainer,
        {backgroundColor: selectedTheme.backgroundColor1},
      ]}>
      <View style={style.headerContainer}>
        <Text style={[style.txtProfile, {color: selectedTheme.textColor}]}>
          {Strings.profile}
        </Text>
        <TouchableOpacity
          onPress={() => toggleThemeHanddler()}
          style={style.sunStyleWrapper}>
          <Image
            source={Icons.sun}
            style={[style.sunStyle, {tintColor: selectedTheme.white}]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={style.midContainer}>
        <View style={style.cardContainer}>
          <TouchableOpacity
            onPress={() => selectFile()}
            style={style.leftCardView}>
            <Image
              source={selectedImg ? {uri: selectedImg} : Images.profile}
              style={style.profileImg}
              resizeMode="contain"
            />
            <Image
              source={Icons.camera}
              resizeMode="contain"
              style={style.iconCamera}
            />
          </TouchableOpacity>
          <View style={style.rightCardView}>
            <Text style={style.txtBypro}>{Strings.byprog}</Text>
            <Text style={style.txtFullstack}>{Strings.fullstack}</Text>
            <View style={style.progressBar}>
              <View style={style.progressBarInner} />
            </View>
            <View style={style.overWrapper}>
              <Text style={style.txtOverall}>{Strings.overall}</Text>
              <Text style={style.txtOverall}>58%</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Membership')}
              style={style.becomeMemberWrapper}>
              <Text style={style.txtMember}>{Strings.becomeMember}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.miduprContainer}>
          <RenderUprlist />
        </View>
        <View style={style.midlwrContainer}>
          <Renderlwrlist />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
