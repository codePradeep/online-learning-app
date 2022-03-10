import React from 'react';
import WalkthroughScreen from '../View/Walkthrough/WalkthroughScreen';

interface inputProps {
  navigation: any;
}

const WalkthroughViewModal = (props: inputProps) => {
  const {navigation} = props;

  const newProps = {navigation};

  return <WalkthroughScreen {...newProps} />;
};

export default WalkthroughViewModal;
