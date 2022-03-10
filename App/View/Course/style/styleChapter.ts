import {StyleSheet} from 'react-native';
import {COLORS, selectedTheme} from '../../../Constants/theme';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor:selectedTheme.backgroundColor1
  },
  uprContainer: {
    flex: 0.28,
    //backgroundColor:'yellow'
  },
  tabContainer: {
    flex: 0.06,
    flexDirection: 'row',
    backgroundColor:selectedTheme.backgroundColor1
  },
  tabWrapper: {
    flex: 0.33,
    //backgroundColor:'purple',
    borderBottomWidth: 5,
    borderRadius: 2,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  untabWrapper: {
    flex: 0.33,
    //backgroundColor:'purple',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,

  },
  contentContainer: {
    flex: 0.64,
  },
  txtTitle: {
      fontSize:16,
    fontWeight: '800',
    color:selectedTheme.textColor
  },
});
