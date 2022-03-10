import {Dimensions, StyleSheet} from 'react-native';
import { COLORS, selectedTheme } from '../../Constants/theme';

export default StyleSheet.create({
  parentContiner: {
    flex: 1,
    backgroundColor:COLORS.primary,

  },
  headerContainer: {
    flex: 0.15,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    backgroundColor:COLORS.primary,

    //alignItems:'center',
    // justifyContent:'space-between',
    //paddingHorizontal:30
  },
  titleContainer: {
    flex: 0.15,
    //backgroundColor: 'pink',
    justifyContent:'center',
    paddingHorizontal:15,
    
  },
  contentContainer: {
      flex: 0.7,
      backgroundColor:selectedTheme.backgroundColor1,
      borderTopLeftRadius:20,
      borderTopRightRadius:20
  },
  backStyle: {
    height: '15%',
    width: '50%',
    tintColor:'white'
  },
  txtMember: {
    marginLeft: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: '700',
    color:'white'
  },
  imgWrapper: {
    flex: 0.2,
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtWrapper: {
    flex: 0.6,
    //backgroundColor: 'orange',
    justifyContent: 'center',
  },
  txtstudy:{
    fontSize:28,
    color:'white',
    fontWeight:'600'
  },
  choseTitleView:{
      flex: 0.1,
      //backgroundColor:'green',
      justifyContent:'center',
      paddingHorizontal:15
  },
  txtChoseHelp:{
      fontWeight:'bold',
      fontSize:16
  },
  choseCardView:{
      flex: 0.82,
      //backgroundColor:'pink'
  },
  btnView:{
      flex: 0.13,
      //backgroundColor:'red',
      paddingHorizontal:10
  },
  offercardStyle:{
      height:Dimensions.get('window').height*0.2,
      width:Dimensions.get('window').width*0.45,
      backgroundColor:COLORS.blueColor,
      margin: 5,
      borderRadius:15
  },
 offercardStyle1:{
    height:Dimensions.get('window').height*0.2,
    width:Dimensions.get('window').width*0.45,
    backgroundColor:COLORS.gray10,
    margin: 5,
    borderRadius:15

 },
 txtOffer:{
     color:'white'
 },
 checkView:{
    flex: 0.4,
    flexDirection:'row'
    //backgroundColor:'red'
 },
 txtView:{
    flex: 0.6,
    //backgroundColor:'orange',
    justifyContent:'space-evenly',
    paddingHorizontal:10
 },
 circleView:{
     flex: 0.4,
     //backgroundColor:'red',
     justifyContent:'center',
     alignItems:'center'
 },
 offerView:{
     flex: 0.6,
 },
 circleStyle:{
     height:"80%",
     width:'80%',
     borderRadius:50,
     borderWidth:2,
     backgroundColor:'white',
     justifyContent:'center',
     alignItems:'center'
 },
 checkStyle:{
     height:"80%",
     width:"80%"
 },
 txtPrice:{
     fontSize:22,
     fontWeight:'600',
     color:'white'
 },
 txtMonth:{
     fontSize:14,
     //color:'white'
 },
 txtPrice1:{
    fontSize:22,
    fontWeight:'600',
},
txtMonth1:{
    fontSize:14,
    //color:'black'
},
untxtOffer:{}
});
