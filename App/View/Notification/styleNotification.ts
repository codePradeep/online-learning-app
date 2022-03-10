import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/theme';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  imgStyle: {
    height: '43%',
    width: '100%',
    flex: 1,
  },
  txtLogin: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
  },
  titleWrapper: {
    flex: 0.05,
    //backgroundColor:'pink'
  },
  divider: {
    flex: 0.2,
    //backgroundColor: 'pink',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },

  txtUser: {
    marginBottom: 15,
    color: COLORS.gray50,
  },
  btnWrapper: {
    //flex:0.5,
    backgroundColor: 'green',
  },
  inputWrapper: {
    flex: 0.3,
    //backgroundColor:'pink',
    justifyContent: 'center',
  },
  btmContainer: {
    flex: 0.3,
    //backgroundColor:"green",
    width: '90%',
    alignSelf: 'center',
  },
  txtOrlogin: {
    textAlign: 'center',
    fontWeight: '500',
  },
  socailWrapper: {
    flex: 0.3,
    //   backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  googleStyle: {
    flex: 0.45,
    backgroundColor: COLORS.gray10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNewuser: {
    textAlign: 'center',
    marginTop: 15,
  },
  txtSignup: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  contentContainer: {
    flex: 0.75,
    //backgroundColor:'green'
  },
  scrollStyle: {
    flexGrow: 1,
    //backgroundColor:'red'
  },
  uprScroll: {
    flex: 1,
    //backgroundColor:'orange',
    paddingHorizontal: 15,
  },
  leftContainer: {
    flex: 0.3,
    //backgroundColor:'white',
    justifyContent: 'center',
    //alignItems:'center'
  },
  contentWrapper: {
    flex: 0.35,
    //backgroundColor:'yellow',
    width: '95%',
    borderBottomWidth: 0.5,
    borderColor: COLORS.gray60,
    alignSelf: 'center',
    //justifyContent:'space-evenly',
    flexDirection: 'row',
  },
  iconStyle: {
    height: '55%',
    width: '55%',
    borderRadius: 50,
  },
  rightContainer: {
    flex: 0.7,
    //backgroundColor:'green',
    justifyContent: 'space-evenly',
  },
  txtDes: {
    fontSize: 16,
    fontWeight: '400',
  },
  txtName: {
    fontWeight: '700',
    fontSize: 16,
  },
  txtTime: {
    marginLeft: 15,
  },
  styleBack: {
    height: '35%',
    width: '70%',
  },
  backWrapper: {
    height: '35%',
    width: '18%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  txtNotification: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtToday: {
    color: COLORS.gray30,
  },
  txtContainer:{flexDirection: 'row'}
});
