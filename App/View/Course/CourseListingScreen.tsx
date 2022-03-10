import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Icons from '../../Assets/icons';
import Images from '../../Assets/images';
import CustomModal from '../../Common/Modal/CustomModal';
import { DummyData, Strings } from '../../Constants';
import {selectedTheme} from '../../Constants/theme';
import style from './style/styleListing';

interface inputProps {
  navigation: any;
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  isCheck: number;
  setCheck: React.Dispatch<React.SetStateAction<number>>;
  isAll: number;
  setAll: React.Dispatch<React.SetStateAction<number>>;
}

const CourseListingScreen = (newProps: inputProps) => {
  const {
    isVisible,
    setVisible,
    selected,
    setSelected,
    navigation,
    isCheck,
    setCheck,
    isAll,
    setAll,
  } = newProps;

  const filterProps = {
    selected,
    setSelected,
    isVisible,
    setVisible,
    isCheck,
    setCheck,
    isAll,
    setAll,
  };

  const FlatListItemSeparator = () => {
    return <View style={style.seprator} />;
  };

  const RenderCourse = () => {
    return (
      <FlatList
        data={DummyData.VideoData}
        ItemSeparatorComponent={FlatListItemSeparator}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('CourseChapter')}
              style={style.courseView}>
              <View style={style.courseViewLeft}>
                <Image
                  source={item.bg}
                  style={style.courseImg}
                  resizeMode="stretch"
                />
              </View>
              <View style={style.courseViewRight}>
                <Text style={[style.txtDesc, {color: selectedTheme.textColor}]}>
                  {item.desc}
                </Text>
                <View style={style.txtWrapperCoursetime}>
                  <Text
                    style={[
                      style.txtAuthor,
                      {color: selectedTheme.textColor7},
                    ]}>
                    {item.author}
                  </Text>
                  <Image
                    source={Icons.time}
                    style={style.IconTimestyle1}
                    resizeMode="contain"
                  />
                  <Text style={{color: selectedTheme.textColor7}}>
                    {item.time}
                  </Text>
                </View>
                <View style={style.coursetxtStar}>
                  <Text style={style.txtPrice}>{item.price}</Text>
                  <Image
                    source={Icons.star}
                    style={style.starStyle}
                    resizeMode="contain"
                  />
                  <Text
                    style={[style.txtRate, {color: selectedTheme.textColor}]}>
                    {item.rate}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  return (
    <View
      style={[
        style.parentContainer,
        {backgroundColor: selectedTheme.backgroundColor1},
      ]}>
      <View style={style.headerContainer}>
        <Image
          source={Images.cardImg}
          style={style.cardStyle}
          resizeMode="cover"
        />
        <Image
          source={Images.mobile}
          style={style.mobileStyle}
          resizeMode="contain"
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.arrowWrapper}>
          <Image
            source={Icons.back}
            style={style.backArrowStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={style.txtMobile}>{Strings.mobiledesign}</Text>
      </View>
      <View
        style={[
          style.midContainer,
          {backgroundColor: selectedTheme.backgroundColor1},
        ]}>
        <View style={style.resultWrapper}>
          <Text>{Strings.result}</Text>
          <TouchableOpacity
            onPress={() => setVisible(!isVisible)}
            style={style.filterWrapper}>
            <Image
              source={Icons.filter}
              style={style.filterImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={style.courseWrapper}>
          <RenderCourse />
        </View>
      </View>
      <CustomModal {...filterProps} />
    </View>
  );
};

export default CourseListingScreen;
