import React from 'react';
import {View, TouchableOpacity, Text, Image, FlatList} from 'react-native';
import style from './styleCategory';
import Icons from '../../Assets/icons';
import CommonBtn from '../../Common/Button/CommonBtn';
import { DummyData, Strings } from '../../Constants';

interface inputProps {
  navigation: any;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const CategoryScreen = (newProps: inputProps) => {
  const {navigation, selected, setSelected} = newProps;

  const RenderList = () => {
    return (
      <FlatList
        numColumns={3}
        data={DummyData.categoiresData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => setSelected(index)}
            style={selected != index ? style.listView : style.unlistView}>
            <Image
              source={item.icon}
              style={style.iconStyle}
              resizeMode="contain"
            />
            <Text style={selected == index ? style.txtList : style.untxtList}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  };

  return (
    <View style={style.parentContainer}>
      <View style={style.headerContainer}>
        <TouchableOpacity style={style.backWrapper}>
          <Image
            source={Icons.back}
            style={style.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={style.ContentContainer}>
        <Text style={style.txtCategory}>{Strings.chooseCategory}</Text>
        <RenderList />
      </View>
      <View style={style.btmContainer}>
        <CommonBtn
          title={Strings.continue}
          onPress={() => navigation.navigate('CustomTab')}
        />
      </View>
    </View>
  );
};

export default CategoryScreen;
