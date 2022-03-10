import React, {useState} from 'react';
import { DummyData } from '../Constants';
import InstructorScreen from '../View/Instructor/InstructorScreen';


interface inputProps {
  navigation: any;
}

const InstructorViewModal = (props: inputProps) => {
  const [selected, setSelected] = useState(false);
  const [videoData, setVideoData] = useState(DummyData.VideoData);

  const {navigation} = props;

  const newProps = {videoData, setVideoData, navigation, selected, setSelected};

  return <InstructorScreen {...newProps} />;
};

export default InstructorViewModal;
