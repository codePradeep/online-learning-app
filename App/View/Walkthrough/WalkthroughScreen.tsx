import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import style from './styleWalk';
import {selectedTheme} from '../../Constants/theme';
import { DummyData, Strings } from '../../Constants';


interface inputProps {
  navigation: any;
}

const WalkthroughScreen = (newProps: inputProps) => {
  const {navigation} = newProps;

  const {width: windowWidth, height: windowHeight} = Dimensions.get('screen');

  const Flatlistref = useRef<any | null>(null);

  const scrollX = useRef(new Animated.Value(0)).current;

  const RenderImage = () => {
    return (
      <FlatList
        ref={Flatlistref}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={DummyData.Sliderdata}
        renderItem={({item, index}) => (
          <Image
            key={`item` + index}
            source={item.img}
            style={style.imgStyle}
            resizeMode="contain"
          />
        )}
        onScroll={e => scrollX.setValue(e.nativeEvent.contentOffset.x)}
      />
    );
  };

  return (
    <View style={style.parentContainer}>
      <View style={style.titleView}>
        <Text
          style={[style.txtExploreOnline, {color: selectedTheme.textColor}]}>
          {Strings.ExploreOnline}
        </Text>
      </View>
      <View style={style.desView}>
        <Text style={{color: selectedTheme.textColor7}}>{Strings.allType}</Text>
      </View>
      <View style={style.ImgView}>
        <RenderImage />
      </View>
      <View style={style.btnView}>
        <View style={style.dotsWrapper}>
          { DummyData.dotsData.map((item, index) => {
            const dots = scrollX.interpolate({
              inputRange: [
                windowWidth * (index - 1),
                windowWidth * index,
                windowWidth * (index + 1),
              ],
              outputRange: [10, 30, 10],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={index}
                style={[
                  style.normalDots,
                  {
                    width: dots,
                  },
                ]}
              />
            );
          })}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={style.nextStyle}>
          <Text style={style.txtNxt}>{Strings.next}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WalkthroughScreen;
