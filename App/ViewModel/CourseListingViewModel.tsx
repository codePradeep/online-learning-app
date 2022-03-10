import React, {useState} from 'react';
import CourseListingScreen from '../View/Course/CourseListingScreen';

interface inputProps {
  navigation: any;
}

const CourseListingViewModal = (props: inputProps) => {
  const [isVisible, setVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const [isCheck, setCheck] = useState(0);
  const [isAll, setAll] = useState(0);

  const {navigation} = props;

  const newProps = {
    isVisible,
    setVisible,
    navigation,
    selected,
    setSelected,
    isCheck,
    setCheck,
    isAll,
    setAll,
  };

  return <CourseListingScreen {...newProps} />;
};

export default CourseListingViewModal;
