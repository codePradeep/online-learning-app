import {StyleSheet} from 'react-native';
import { COLORS } from '../../../Constants/theme';

export default StyleSheet.create({
  parentContainer: {
  // flex: 0.35,
  // justifyContent:'flex-end'
    
  },
  imgStyle: {
    // height: '43%',
    width: '100%',
    flex: 0.5,
  },
  txtLogin: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',


  },
  titleWrapper: {
    flex: 1,
    // backgroundColor:'pink'
  },
  divider: {
    // flex: 0.1,
    // backgroundColor: 'pink',
  },
  contentWrapper: {
    flex: 1,
    // backgroundColor:'yellow',
    width:'90%',
    alignSelf:'center',
    // justifyContent:'space-evenly'
  },
  txtUser:{
      marginBottom:15,
      color:COLORS.gray50,

  },
  btnWrapper:{
      //flex:0.5,
      //backgroundColor:'green'
  },
  inputWrapper:{
      flex:0.35,
      // backgroundColor:'pink',
      justifyContent:'center',
  },
  btmContainer:{
      flex:1,
      //backgroundColor:"green",
      width:"90%",
      alignSelf: 'center',
  },
  txtOrlogin:{
      textAlign:'center',
      fontWeight:"500",

  },
  socailWrapper:{
      flex:0.3,
    //   backgroundColor:'red',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:15
  },
  googleStyle:{
      flex:0.45,
      backgroundColor:COLORS.gray10,
      borderRadius:30,
      justifyContent:'space-between',
      alignItems: 'center',
      flexDirection:'row',
      paddingHorizontal:40
  },
  txtNewuser:{
      textAlign:'center',
      marginTop:15
  },
  txtSignup:{
    color:COLORS.primary,
    fontWeight:'700'
  },
  googleIconStyle:{
    height:"60%",
    width:"30%"
  },
  txtFb:{
    fontWeight:'500'
  }
});
