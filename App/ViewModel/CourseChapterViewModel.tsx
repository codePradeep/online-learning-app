import React, {useState} from 'react';
import { DummyData } from '../Constants';
import CourseChapterScreen from '../View/Course/CourseChapterScreen';

interface inputProps {
  navigation: any;
}

const CourseChapterViewModal = (props: inputProps) => {
  const [tabData, setData] = useState(DummyData.DataTab);

  const {navigation} = props;

  const newProps = {navigation, tabData};

  return <CourseChapterScreen {...newProps} />;
};

export default CourseChapterViewModal;
