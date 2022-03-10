import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/theme';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
  },

  inputContainer: {
    flex: 0.85,
    padding: 5,
  },
  iconStyle: {
    height: '100%',
    width: '45%',
  },
  iconStyleWrapper: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.gray50,
  },
  txtError: {
    color: 'red',
    fontWeight: '600',
    paddingVertical: 2,
  },
});
