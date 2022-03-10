import React from 'react';
import NotificationScreen from '../View/Notification/NotificationScreen';

interface inputProps {
  navigation: any;
}

const NotificationViewModal = (props: inputProps) => {
  const {navigation} = props;

  const newProps = {navigation};

  return <NotificationScreen {...newProps} />;
};

export default NotificationViewModal;
