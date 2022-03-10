import React, {useState} from 'react';
import SearchScreen from '../View/Search/SearchScreen';

interface inputProps {
  navigation: any;
}

const SearchViewModal = (props: inputProps) => {
  const [isRender, setRender] = useState(false);

  const {navigation} = props;

  const newProps = {navigation, isRender, setRender};
  return <SearchScreen {...newProps} />;
};

export default SearchViewModal;
