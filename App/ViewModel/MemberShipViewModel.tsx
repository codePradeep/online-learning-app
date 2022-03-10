import React from 'react';
import {MembershipScreen} from '.';

interface inputProps {
  navigation: any;
}

const MemberShipViewModal = (props: inputProps) => {
  const {navigation} = props;

  const newProps = {navigation};

  return <MembershipScreen {...newProps} />;
};

export default MemberShipViewModal;
