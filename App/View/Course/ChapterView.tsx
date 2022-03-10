import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icons from '../../Assets/icons';
import Images from '../../Assets/images';
import style from './style/styleChapterView';
import {selectedTheme} from '../../Constants/theme';
import {DummyData, Strings} from '../../Constants';

const ChapterView = (chapterProps: any) => {
  const {navigation} = chapterProps;

  const RenderCourse = (): any => {
    return DummyData.VideoData.map((item, index) => (
      <View key={index} style={style.courseView}>
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
            <Text style={[style.txtAuthor, {color: selectedTheme.textColor7}]}>
              {item.author}
            </Text>
            <Image
              source={Icons.time}
              style={style.IconTimestyle1}
              resizeMode="contain"
            />
            <Text>{item.time}</Text>
          </View>
          <View style={style.coursetxtStar}>
            <Text style={style.txtPrice}>{item.price}</Text>
            <Image
              source={Icons.star}
              style={style.starStyle}
              resizeMode="contain"
            />
            <Text style={style.txtRate}>{item.rate}</Text>
          </View>
        </View>
      </View>
    ));
  };

  const RenderChapter = (): any => {
    return DummyData.chapterData.map((item, index) => (
      <View key={index} style={style.chapterWrapper}>
        <View style={style.IconWrapper}>
          <Image
            source={item.icon}
            style={style.iconStyle}
            resizeMode="contain"
          />
        </View>
        <View style={style.txtWrapper}>
          <Text style={[style.txtTitle, {color: selectedTheme.textColor}]}>
            {item.title}
          </Text>
          <Text style={style.txtTime}>{item.time}</Text>
        </View>
        <View style={style.chapterbtnWrapper}>
          <Text style={style.txtSize}>{item.size}</Text>
          <Image
            source={item.downloadStatus}
            style={style.iconStyle}
            resizeMode="contain"
          />
        </View>
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={style.scrollContainer}>
      <View
        style={[
          style.containerHeight,
          {backgroundColor: selectedTheme.backgroundColor1},
        ]}>
        <View style={style.containerWrapper}>
          <Text
            style={[style.txtTheUltimate, {color: selectedTheme.textColor}]}>
            {Strings.theultimate}
          </Text>
          <View style={style.followContainer}>
            <View style={style.profileWrapper}>
              <Image
                source={Images.profile}
                style={style.styleProfile}
                resizeMode="contain"
              />
            </View>
            <View style={style.txtWrapper}>
              <Text style={[style.txtByprog, {color: selectedTheme.textColor}]}>
                {Strings.byprog}
              </Text>
              <Text
                style={[style.txtFullstack, {color: selectedTheme.textColor7}]}>
                {Strings.fullstack}
              </Text>
            </View>
            <View style={style.btnWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Instructor')}
                style={style.followBtn}>
                <Text style={style.txtFollow}>{Strings.follow + ' +'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.renderChapterView}>
            <RenderChapter />
          </View>
        </View>
        <View style={style.popularWrapperStyle}>
          <View style={style.popularStyle}>
            <Text style={[style.txtpolular, {color: selectedTheme.textColor}]}>
              {Strings.popularcourse}
            </Text>
            <TouchableOpacity style={style.seeAllView}>
              <Text style={style.txtSeeall}>{Strings.seeall}</Text>
            </TouchableOpacity>
          </View>
          <RenderCourse />
        </View>
      </View>
    </ScrollView>
  );
};

export default ChapterView;
