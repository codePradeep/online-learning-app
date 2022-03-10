import {StyleSheet} from 'react-native';
import {COLORS} from '../../../Constants/theme';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
    //backgroundColor:'pink'
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
    flex: 0.1,
    //backgroundColor:'pink'
  },
  divider: {
    flex: 0.05,
    //backgroundColor: 'green',
  },
  txtRegister: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
  },
  cardStyle: {
    flex: 0.2,
    //backgroundColor:'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  leftCard: {
    height: '70%',
    width: '45%',
    backgroundColor: 'rgb(48,50,78)',
    borderRadius: 10,
  },
  contentContainer: {
    flex: 0.35,
    //backgroundColor:'yellow',
    width: '90%',
    alignSelf: 'center',
  },
  btmContainer: {
    flex: 0.3,
    //backgroundColor:'red',
    width: '90%',
    alignSelf: 'center',
  },
  inputWrapper: {
    flex: 0.5,
    marginTop: 20,
    //backgroundColor:'pink',
    marginBottom: 20,
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
    height: '100%',
    width: '45%',
    //flex:0.45,
    backgroundColor: COLORS.gray10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  txtNewuser: {
    textAlign: 'center',
    marginTop: 15,
  },
  txtSignup: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  completedStyle: {
    width: '25%',
    height: '25%',
    alignSelf: 'flex-end',
    margin: 5,
  },
  txtStudent: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    //margin:20
  },
  txtIam: {
    //margin:5
    color: 'white',
  },
  txtWrapper: {
    //backgroundColor:'green',
    marginTop: 25,
    marginLeft: 10,
  },
  txtUser: {
    //marginBottom:15,
    color: COLORS.gray50,
  },
  btnContainer: {
    flex: 0.1,
    //backgroundColor:'black',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  circleStyle: {
    width: '20%',
    height: '27%',
    margin: 5,
    borderRadius: 15,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    borderWidth: 1,
  },
  onleftCard: {
    height: '70%',
    width: '45%',
    backgroundColor: 'rgb(236,244,240)',
    borderRadius: 10,
  },
  txtIamBlack: {
    color: 'black',
  },
  txtStudentblack: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
    googleIconStyle:{
    height:"60%",
    width:"30%"
  },
});
