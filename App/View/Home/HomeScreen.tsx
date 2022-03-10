import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import style from './styleHome';
import Icons from '../../Assets/icons';
import Images from '../../Assets/images';
import {selectedTheme} from '../../Constants/theme';
import { DummyData, Strings } from '../../Constants';

interface inputProps {
  navigation: any;
  isRender: boolean;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
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

const HomeScreen = (newProps: inputProps) => {
  const {
    navigation,
    isRender,
    setRender,
    selected,
    setSelected,
    videoData,
    setVideoData,
  } = newProps;

  //function that handle ToggleHeart

  const handleImg = (id: number, item: any) => {
    setSelected(!selected);

    let markers = [...videoData];
    markers[id] = {...markers[id], isTrue: selected};
    setVideoData(markers);
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRender(!isRender);
    });

    return unsubscribe;
  }, [navigation, isRender]);

  //render Video component

  const RenderVideo = () => {
    return (
      <FlatList
        horizontal={true}
        data={videoData}
        keyExtractor={(_, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={{marginLeft: 4}}>
              <Image
                key={index}
                source={item.bg}
                style={style.videoImg}
                resizeMode="stretch"
              />
              <View style={style.videoContentWrapper}>
                <Image
                  source={Icons.play}
                  style={style.playIcon}
                  resizeMode="contain"
                />
                <View style={style.videoTxt}>
                  <Text
                    style={[
                      style.txtVideoTitle,
                      {color: selectedTheme.textColor},
                    ]}>
                    {item.title}
                  </Text>
                  <View style={style.videoTxtWrapper}>
                    <Image
                      source={Icons.time}
                      style={style.IconTimestyle}
                      resizeMode="contain"
                    />
                    <Text
                      style={[
                        style.videoTimeTxt,
                        {color: selectedTheme.textColor7},
                      ]}>
                      {item.time}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    );
  };

  //render Category component

  const RenderCategory = () => {
    return (
      <FlatList
        horizontal={true}
        data={ DummyData.CategoryData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('CourseChapter')}>
              <ImageBackground
                source={item.bg}
                style={style.cateImg}
                resizeMode="contain">
                <Text
                  style={[
                    style.categoryTitle1,
                    {color: selectedTheme.textColor4},
                  ]}>
                  {item.title}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  //render Course component

  const RenderCourse = () => {
    return videoData.map((item: any, index: number) => (
      <View key={index} style={style.courseView}>
        <View style={style.courseViewLeft}>
          <Image
            // key={index}

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
          <Text style={[style.txtDes, {color: selectedTheme.textColor}]}>
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
            <Text style={[style.txtTime, {color: selectedTheme.textColor7}]}>
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
            <Text style={style.txtRate}>{item.rate}</Text>
          </View>
        </View>
      </View>
    ));
  };

  return (
    <View
      style={[
        style.mainWrapper,
        {backgroundColor: selectedTheme.backgroundColor1},
      ]}>
      <View style={style.headerContainer}>
        <View style={style.headerLeft}>
          <Text style={[style.headerTitle, {color: selectedTheme.textColor}]}>
            {Strings.helloProg}
          </Text>
          <Text style={style.txtDate}>{Strings.date}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
          style={style.headerRight}>
          <Image
            source={Icons.notification}
            style={[style.notiStyle, {tintColor: selectedTheme.white}]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.CardWrapper}>
        <View style={style.cardView}>
          <ImageBackground
            source={Images.cardImg}
            resizeMode="contain"
            style={style.cardViewImg}>
            <View style={style.cardTxtWrapper}>
              <Text style={style.txthow}>{Strings.howto}</Text>
              <Text style={style.txtmake}>{Strings.makeur}</Text>
              <Text style={style.txtName}>{Strings.byscoot}</Text>
            </View>
            <View style={style.cardImgWrapper}>
              <Image source={Images.startLarning} resizeMode="contain" />
            </View>
            <View style={style.cardButton}>
              <TouchableOpacity style={style.startBtnStyle}>
                <Text style={style.txtStartLearn}>{Strings.startear}</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={style.videoView}>
          <RenderVideo />
        </View>
        <View style={style.categoryView}>
          <View style={style.categoryTitle}>
            <Text style={[style.categoryTXt, {color: selectedTheme.textColor}]}>
              {Strings.category}
            </Text>
            <TouchableOpacity style={style.seeAllView}>
              <Text style={style.txtSeeall}>{Strings.seeall}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.categoryWrapper}>
            <RenderCategory />
          </View>
        </View>
        <View style={style.popularView}>
          <View style={style.popularTitle}>
            <Text style={[style.categoryTXt, {color: selectedTheme.textColor}]}>
              {Strings.category}
            </Text>
            <TouchableOpacity style={style.seeAllView}>
              <Text style={style.txtSeeall}>{Strings.seeall}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.categoryWrapper}>
            <RenderCourse />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
