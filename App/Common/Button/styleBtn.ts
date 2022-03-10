import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../../Constants/theme';

export default StyleSheet.create({
  parentContainer: {
    flex: 0.6,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    color: 'white',
    fontWeight:'700',
    fontSize:16
  },
});
