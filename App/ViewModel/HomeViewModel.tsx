import React, {useState} from 'react';
import { DummyData } from '../Constants';
import HomeScreen from '../View/Home/HomeScreen';


interface inputProps {
  navigation: any;
}

const HomeViewModal = (props: inputProps) => {
  const [selected, setSelected] = useState(false);
  const [videoData, setVideoData] = useState(DummyData.VideoData);
  const [isRender, setRender] = useState(false);

  const {navigation} = props;

  const newProps = {
    navigation,
    isRender,
    setRender,
    selected,
    setSelected,
    videoData,
    setVideoData,
  };

  return <HomeScreen {...newProps} />;
};

export default HomeViewModal;
