import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style/styleChapter';
import VideoPlayer from 'react-native-video-player';
import ChapterView from './ChapterView';
import ChapterFIlesView from './ChapterFIlesView';
import DiscussionView from './DiscussionView';
import {selectedTheme} from '../../Constants/theme';

interface inputProps {
  navigation: any;
  tabData: any;
}

const CourseChapterScreen = (newProps: inputProps) => {
  const [selectedid, setSelected] = useState(0);

  const {tabData, navigation} = newProps;

  const chapterProps = {navigation};

  const handlePress = (newitem: any, newindex: number) => {
    if (newitem.id == newindex) {
      setSelected(newindex);
    } else {
    }
  };

  const RenderTabView = () => {
    switch (selectedid) {
      case 0:
        return <ChapterView {...chapterProps} />;
      case 1:
        return <ChapterFIlesView />;
      case 2:
        return <DiscussionView />;

      default:
        return <ChapterView />;
    }
  };

  const RenderTabButton = () => {
    const tempArr = tabData;

    return tempArr.map((item: any, index: number) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(item, index)}
          style={index == selectedid ? style.tabWrapper : style.untabWrapper}>
          <Text style={[style.txtTitle, {color: selectedTheme.textColor}]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={style.parentContainer}>
      <View style={style.uprContainer}>
        <VideoPlayer
          video={{
            uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
          }}
          videoWidth={1600}
          videoHeight={1000}
          thumbnail={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg',
          }}
        />
      </View>
      <View
        style={[
          style.tabContainer,
          {backgroundColor: selectedTheme.backgroundColor1},
        ]}>
        <RenderTabButton />
      </View>
      <View style={style.contentContainer}>
        <RenderTabView />
      </View>
    </View>
  );
};

export default CourseChapterScreen;
