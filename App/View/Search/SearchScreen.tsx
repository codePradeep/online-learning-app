import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import style from './styleSearch';
import Icons from '../../Assets/icons';
import {selectedTheme} from '../../Constants/theme';
import { DummyData, Strings } from '../../Constants';

interface inputProps {
  navigation: any;
  isRender: boolean;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchScreen = (newProps: inputProps) => {
  const {navigation, isRender, setRender} = newProps;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRender(!isRender);
    });

    return unsubscribe;
  }, [navigation, isRender]);

  const RenderSearches = ():any => {
    return DummyData.topsearches.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={style.searchView}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      );
    });
  };

  const RenderCategory = () => {
    return (
      <FlatList
        numColumns={2}
        data={DummyData.CategoryData}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('CourseListing')}>
              <ImageBackground
                source={item.bg}
                style={style.cateImg}
                resizeMode="contain">
                <Text style={style.categoryTitle1}>{item.title}</Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    );
  };
  return (
    <View
      style={[
        style.parentContainer,
        {backgroundColor: selectedTheme.backgroundColor1},
      ]}>
      <View style={style.headerContainer}>
        <View
          style={[
            style.searchWrapper,
            {backgroundColor: selectedTheme.backgroundColor1},
          ]}>
          <Image
            source={Icons.search}
            style={style.searchIcon}
            resizeMode="contain"
          />
          <TextInput
            placeholder={Strings.searchFortopic}
            style={[
              style.placeholderStyle,
              {backgroundColor: selectedTheme.backgroundColor1},
            ]}
          />
        </View>
      </View>
      <View style={style.midContainer}>
        <Text style={[style.txtSearch, {color: selectedTheme.textColor}]}>
          {Strings.topsearches}
        </Text>
        <View style={style.topsearchWrapper}>
          <RenderSearches />
        </View>
        <Text style={[style.txtSearch, {color: selectedTheme.textColor}]}>
          {Strings.browseCat}
        </Text>
        <RenderCategory />
      </View>
      <View style={style.btnContainer}></View>
    </View>
  );
};

export default SearchScreen;
