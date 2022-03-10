import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, selectedTheme} from '../../Constants/theme';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: selectedTheme.backgroundColor1,
  },
  headerContainer: {
    flex: 0.1,
    //backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  midContainer: {
    flex: 0.8,
  },
  iconCamera: {
    height: '20%',
    width: '20%',
    position: 'absolute',
    top: 80,
  },

  txtProfile: {
    marginLeft: 20,
    fontSize: 28,
    fontWeight: '900',
    color: selectedTheme.textColor
  },
  midlwrContainer: {
    height: Dimensions.get('window').height * 0.35,
    //backgroundColor: COLORS.blueColor,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 0.3,
    borderRadius: 10,
    marginBottom: 30,
  },
  miduprContainer: {
    height: Dimensions.get('window').height * 0.35,
    //backgroundColor: COLORS.gray10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    justifyContent: 'space-between',
  },
  cardContainer: {
    height: Dimensions.get('window').height * 0.23,
    backgroundColor: selectedTheme.backgroundColor2,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  leftCardView: {
    height: '70%',
    width: '30%',
    //backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightCardView: {
    height: '100%',
    width: '70%',
    //backgroundColor:'pink'
  },
  profileImg: {
    height: '45%',
    width: '60%',
    borderRadius: 70,
  },
  txtBypro: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginVertical: 10,
  },
  progressBar: {
    height: '10%',
    width: '95%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  progressBarInner: {
    height: '100%',
    backgroundColor: COLORS.primary,
    width: '70%',
    borderRadius: 10,
  },
  overWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  becomeMemberWrapper: {
    backgroundColor: selectedTheme.backgroundColor4,
    width: '65%',
    height: '20%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  txtFullstack: {
    color: 'white',
    marginVertical: 10,
  },
  txtOverall: {
    color: 'white',
    marginVertical: 2,
  },
  iconStyle: {
    height: Dimensions.get('window').height * 0.07,
    width: '40%',
    tintColor: COLORS.primary,
  },
  UprView: {
    //backgroundColor:'red',
    flexDirection: 'row',
  },
  imageView: {
    //backgroundColor:'yellow',
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtView: {
    flex: 0.7,
    justifyContent: 'center',
  },
  txtTitle: {
    color: COLORS.gray50,
  },
  txtName: {
    fontSize: 16,
    fontWeight: '700',
    color: selectedTheme.textColor
  },
  rightStyle: {
    width: '60%',
    height: '25%',
    tintColor: selectedTheme.white,
  },
  arrowView: {
    flex: 0.1,
    //backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunStyleWrapper: {
    flex: 1,
  },
  sunStyle: {
    height: '45%',
    width: '175%',
    tintColor: selectedTheme.white
  },
  txtMember:{color: selectedTheme.textColor}
});
