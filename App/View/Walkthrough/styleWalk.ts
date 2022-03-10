import { Dimensions, StyleSheet } from "react-native";
import { COLORS, selectedTheme } from "../../Constants/theme";

export default StyleSheet.create({
    parentContainer: {
      flex: 1,
      backgroundColor:selectedTheme.backgroundColor1

    },
    titleView:{
      flex:0.2,
      //backgroundColor:'red',
      justifyContent:'flex-end',
      paddingHorizontal:15

    },
    desView:{
      flex:0.1,
      justifyContent:'center',
      //backgroundColor:'grey',
      paddingHorizontal:15
    },
    ImgView:{
      flex:0.5,
      //backgroundColor:'yellow',
      //justifyContent:'center'
    },
    btnView:{
      flex:0.2,
      //backgroundColor:'green',
      justifyContent:'space-between',
      flexDirection:'row'
    },
    workStyle:{
      height:"90%",
      width:"100%"
    },
    txtExploreOnline:{
      fontSize:32,
      fontWeight:'800'
    },
    nextStyle:{
      width:"30%",
      height:"30%",
      backgroundColor:COLORS.primary,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      borderTopLeftRadius:15,
      borderBottomLeftRadius:15

    },
    txtNxt:{
      color:"white",
      fontSize:16,
      fontWeight:'600'
    },
    imgStyle:{
      // height:Dimensions.get('screen').height*0.01,
      // width:"10%"
      // width:Dimensions.get('screen').width*80
    height:400,
    width:400
    },
    normalDots:{
      height: 10,
      width:50,
      backgroundColor: COLORS.blueColor,
      borderRadius: 40,
      marginHorizontal:5
    },
    dotsWrapper:{flex: 0.6, alignItems:'center',
    marginLeft:10,
     flexDirection: 'row'}

})