import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/theme';

export default StyleSheet.create({
  tabBar: {
    height: 80,
    position: 'absolute',
    bottom: 20,
    right: 16,
    left: 16,
    borderRadius: 10,
    backgroundColor: COLORS.blueColor,
  },
  renderButton: {
    height: '160%',
    borderRadius: 10,
    width: '33.3%',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: focused ? COLORS.primary : 'white',
  },
  IconStyle: {height: '60%', width: '24%', tintColor: 'black'},
  imgStyle: {height: '60%', width: '30%', tintColor: 'black'},
  txtLable: {
    color: 'white',
  },
});
