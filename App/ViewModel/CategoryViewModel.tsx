import React, {useState} from 'react';
import CategoryScreen from '../View/Category/CategoryScreen';

interface inputProps {
  navigation: any;
}

const CategoryViewModal = (props: inputProps) => {
  const [selected, setSelected] = useState(0);

  const {navigation} = props;

  const newProps = {navigation, selected, setSelected};

  return <CategoryScreen {...newProps} />;
};

export default CategoryViewModal;
