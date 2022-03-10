import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Icons from '../../Assets/icons';
import Images from '../../Assets/images';
import style from './styleInstructor';
import {selectedTheme} from '../../Constants/theme';
import { DummyData, Strings } from '../../Constants';

interface inputProps {
  navigation: any;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  videoData: any;
  setVideoData: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
        bg: any;
        time: string;
        author: string;
        price: string;
        rate: number;
        desc: string;
        isTrue: boolean;
      }[]
    >
  >;
}

const InstructorScreen = (newProps: inputProps) => {
  const {videoData, setVideoData, navigation, selected, setSelected} = newProps;

  const RenderFollower = ():any => {
    const data = DummyData.followerData;
    return data.map((item:any, index:number) => {
      return (
        <View
          key={index}
          style={[
            style.followerItem,
            {backgroundColor: item.color, opacity: 0.5},
          ]}>
          <Text style={style.txtCount}>{item.count}</Text>
          <Text style={style.txtTitle}>{item.title}</Text>
        </View>
      );
    });
  };

  const handleImg = (id: number, item: any) => {
    setSelected(!selected);

    let markers = [...videoData];
    markers[id] = {...markers[id], isTrue: selected};
    setVideoData(markers);
  };

  const RenderCourse = () => {
    let data = videoData;
    return data.map((item: any, index: number) => {
      return (
        <View key={index} style={style.courseView1}>
          <View style={style.courseViewLeft}>
            <Image
              source={item.bg}
              style={style.courseImg}
              resizeMode="stretch"
            />
            <TouchableOpacity
              onPress={() => handleImg(index, item)}
              style={style.heartWrapper}>
              <Image
                source={Icons.heart}
                resizeMode="contain"
                style={!item.isTrue ? style.heartStyleoff : style.heartStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={style.courseViewRight}>
            <Text style={[style.txtDesc, {color: selectedTheme.textColor}]}>
              {item.desc}
            </Text>
            <View style={style.txtWrapperCoursetime}>
              <Text
                style={[style.txtAuthor, {color: selectedTheme.textColor7}]}>
                {item.author}
              </Text>
              <Image
                source={Icons.time}
                style={style.IconTimestyle1}
                resizeMode="contain"
              />
              <Text style={style.txtTime}>{item.time}</Text>
            </View>
            <View style={style.coursetxtStar}>
              <Text style={style.txtPrice}>{item.price}</Text>
              <Image
                source={Icons.star}
                style={style.starStyle}
                resizeMode="contain"
              />
              <Text style={[style.txtRate, {color: selectedTheme.textColor}]}>
                {item.rate}
              </Text>
            </View>
          </View>
        </View>
      );
    });
  };

  const RenderStudentReview = () => {
    return (
      <FlatList
        data={DummyData.ReviewData}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <View style={style.reviewStyle}>
              <View style={style.reviewleftStyle}>
                <Image
                  source={item.icon}
                  style={style.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={style.reviewRightStyle}>
                <Text style={style.txtDes}>{item.des}</Text>
                <Text style={style.txtDays}>{item.days}</Text>
              </View>
            </View>
          );
        }}
      />
    );
  };

  return (
    <View style={style.parentContainer}>
      <View style={style.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.backIconWrapper}>
          <Image
            source={Icons.back}
            style={style.backStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.shareIconWrapper}>
          <Image
            source={Icons.share}
            style={style.shareStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          style.contentContainer,
          {backgroundColor: selectedTheme.backgroundColor1},
        ]}>
        <View style={style.contentUprContainer}>
          <Image
            source={Images.profile}
            style={style.profileStyle}
            resizeMode="contain"
          />
        </View>
        <View style={style.contentMidContainer}>
          <Text style={[style.txtByprog, {color: selectedTheme.textColor}]}>
            {Strings.byprog}
          </Text>
          <Text style={[style.txtFullstack, {color: selectedTheme.textColor7}]}>
            {Strings.fullstack}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('CustomTab')}
            style={style.styleFollow}>
            <Text style={style.txtFollow}>{'+' + ' ' + Strings.follow}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={style.contentScrollContainer}>
          <View style={style.followerWrapper}>
            <RenderFollower />
          </View>
          <View style={style.aboutmeStyle}>
            <Text style={[style.txtAbout, {color: selectedTheme.textColor}]}>
              {Strings.about}
            </Text>
            <Text style={[style.txtLorem, {color: selectedTheme.textColor7}]}>
              {Strings.lorem}
            </Text>
            <Text style={style.txtShowmore}>{Strings.showMore}</Text>
          </View>
          <View style={style.courseView}>
            <View style={style.courseHeader}>
              <View style={style.leftheader}>
                <Text
                  style={[style.txtMyCourse, {color: selectedTheme.textColor}]}>
                  {Strings.mycourse}
                </Text>
              </View>
              <View style={style.rightheader}>
                <TouchableOpacity style={style.seeallBtn}>
                  <Text style={style.txtSeeall}>{Strings.seeall}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.courseContent}>
              <RenderCourse />
            </View>
          </View>
          <View style={style.studentView}>
            <View style={style.studentWrapper}>
              <Text
                style={[
                  style.txtstudentRating,
                  {color: selectedTheme.textColor},
                ]}>
                {Strings.studentrating}
              </Text>
              <View style={style.studentCard}>
                <View style={style.studentUprView}>
                  <Text style={style.txtStudentSatisfy}>
                    {Strings.studentSatisfy}
                  </Text>
                </View>
                <View style={style.studentlwrView}>
                  <View style={style.sepratorView}>
                    <View style={style.orangeSeprator} />
                    <View style={style.blueSeprator} />
                    <View style={style.purpleSeprator} />
                    <View style={style.redSeprator} />
                  </View>
                  <View style={style.verySatify}>
                    <Text>{Strings.verysatisy}</Text>
                    <Text>{'587'}</Text>
                  </View>
                  <View style={style.verySatify}>
                    <Text>{Strings.satisy}</Text>
                    <Text>{'377'}</Text>
                  </View>
                  <View style={style.verySatify}>
                    <Text>{Strings.netural}</Text>
                    <Text>{'200'}</Text>
                  </View>
                  <View style={style.verySatify}>
                    <Text>{Strings.poor}</Text>
                    <Text>{'84'}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={style.studentReview}>
            <View style={style.StudentHeader}>
              <View style={style.leftheader}>
                <Text
                  style={[style.txtMyCourse, {color: selectedTheme.textColor}]}>
                  {Strings.studentReview}
                </Text>
              </View>
              <View style={style.rightheader}>
                <TouchableOpacity style={style.seeallBtn}>
                  <Text style={style.txtSeeall}>{Strings.seeall}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.reviewCard}>
              <RenderStudentReview />
            </View>
          </View>
          <View style={style.connectHereStyle}>
            <View style={style.connectTopStyle}>
              <Text
                style={[style.txtConnect, {color: selectedTheme.textColor}]}>
                {Strings.connectHere}
              </Text>
            </View>
            <View style={style.connectBottomStyle}>
              <View style={style.twitterStyle}>
                <View style={style.leftTwitter}>
                  <Image
                    source={Images.twitter}
                    style={style.imgLink}
                    resizeMode="contain"
                  />
                </View>
                <View style={style.midTwitter}>
                  <Text style={style.txtTwitter}>{'Twitter'}</Text>
                </View>
                <TouchableOpacity style={style.rightTwitter}>
                  <Image
                    source={Icons.rightArrow}
                    style={style.backArrowStyle1}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={style.twitterStyle}>
                <View style={style.leftTwitter}>
                  <Image
                    source={Images.linkdin}
                    style={style.imgLink}
                    resizeMode="contain"
                  />
                </View>
                <View style={style.midTwitter}>
                  <Text>{'Linkedin'}</Text>
                </View>
                <TouchableOpacity style={style.rightTwitter}>
                  <Image
                    source={Icons.rightArrow}
                    style={style.backArrowStyle1}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default InstructorScreen;
