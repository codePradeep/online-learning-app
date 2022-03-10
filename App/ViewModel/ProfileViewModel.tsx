import React, {useState} from 'react';
import ProfileScreen from '../View/Profile/ProfileScreen';

interface inputProps {
  navigation: any;
}

const ProfileViewModal = (props: inputProps) => {
  const {navigation} = props;

  const [selectedImg, setImage] = useState(null);

  const newProps = {navigation, selectedImg, setImage};

  return <ProfileScreen {...newProps} />;
};

export default ProfileViewModal;
