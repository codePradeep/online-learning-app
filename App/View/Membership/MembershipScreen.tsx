import React, {useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import Icons from '../../Assets/icons';
import CommonBtn from '../../Common/Button/CommonBtn';

import style from './styleMembership';
import {selectedTheme} from '../../Constants/theme';
import { DummyData, Strings } from '../../Constants';

interface inputProps {
  navigation: any;
}

const MembershipScreen = (newProps: inputProps) => {
  const [selected, setSelected] = useState(0);

  const {navigation} = newProps;

  const RenderCard = () => {
    return (
      <FlatList
        data={ DummyData.MembershipCardData}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={{justifyContent: 'center'}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => setSelected(index)}
              style={
                index == selected
                  ? style.offercardStyle
                  : [style.offercardStyle1]
              }>
              <View style={style.checkView}>
                <View style={style.circleView}>
                  <View style={style.circleStyle}>
                    {index == selected && (
                      <Image
                        source={Icons.check}
                        resizeMode="contain"
                        style={style.checkStyle}
                      />
                    )}
                  </View>
                </View>
                <View style={style.offerView} />
              </View>
              <View style={style.txtView}>
                <Text
                  style={
                    index == selected
                      ? style.txtPrice
                      : [style.txtPrice1, {color: selectedTheme.textColor}]
                  }>
                  {item.price}
                  <Text
                    style={
                      index == selected
                        ? style.txtMonth
                        : [style.txtMonth1, {color: selectedTheme.textColor}]
                    }>
                    {item.month}
                  </Text>
                </Text>
                <Text
                  style={index == selected ? style.txtOffer : style.untxtOffer}>
                  {item.offer}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  return (
    <View style={style.parentContiner}>
      <View style={style.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.imgWrapper}>
          <Image source={Icons.back} style={style.backStyle} />
        </TouchableOpacity>
        <View style={style.txtWrapper}>
          <Text style={style.txtMember}>{Strings.member}</Text>
        </View>
      </View>
      <View style={style.titleContainer}>
        <Text style={style.txtstudy}>{Strings.unlimitedStudy}</Text>
      </View>
      <View
        style={[
          style.contentContainer,
          {backgroundColor: selectedTheme.backgroundColor1},
        ]}>
        <View style={style.choseTitleView}>
          <Text style={style.txtChoseHelp}>{Strings.choseplan}</Text>
        </View>
        <View style={style.choseCardView}>
          <RenderCard />
        </View>
        <View style={style.btnView}>
          <CommonBtn
            title={Strings.startTrail}
            onPress={() => navigation.navigate('CustomTab')}
          />
        </View>
      </View>
    </View>
  );
};

export default MembershipScreen;
