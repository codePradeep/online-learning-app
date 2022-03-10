import { StyleSheet } from "react-native";
import { COLORS, selectedTheme } from "../../../Constants/theme";

export default StyleSheet.create({
    parentContainer:{
        flex:1,
        // backgroundColor:'pink',
        //width:'95%',
        //alignSelf:'center'
        //flexDirection:'row'
    },
    leftContainer:{
        flex:0.2,
        //backgroundColor:'red',
        alignItems:'center',
        
    },
    rightContainer:{
        flex:0.8,
        //backgroundColor:'blue',

    },
    contentContainer:{
        flex:1,
        flexDirection:'row',
        // backgroundColor:'red'
    },
    btnContainer:{
        flex:0.1,
        // paddingTop:6,
        backgroundColor:COLORS.gray10,
        flexDirection:'row',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    profileStyle:{
        height:"8%",
        width:'50%',
        borderRadius:30,
        marginTop:30
    },
    cmntUprContainer:{
        flex:0.33,
        //backgroundColor:'red'
    },
    subContainer:{
        flex:0.7,
        //backgroundColor:'yellow'
    },
    uprCmntView:{
        flex:0.65,
        //backgroundColor:'white',
        justifyContent:'space-evenly'
    },
    lwrCmntView:{
        flex:0.35,
        //backgroundColor:'white',
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        flexDirection:'row',
        borderColor:COLORS.gray40
        //alignItems:'center'
    },
    txtByProg:{
        fontWeight:'bold',
        color:selectedTheme.textColor
    },
    commentStyle:{
        height:'38%',
        width:"25%"
    },
    comntWrapper:{
        // backgroundColor:'red',
        // flexDirection:'row',
        // width:"33%",
        // height:'100%',
        // justifyContent:'center',
        // alignItems:'center'
        flex:0.4,
        //backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    heartWrapper:{
        flex:0.3,
        //backgroundColor:'pink',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    dayWrpr:{
        flex:0.3,
        justifyContent:'center'
    },
    subCommentView:{
        flex:1,
        flexDirection:'row'
    },
    subcmntLeftView:{
        flex:0.2,
        //backgroundColor:'red'
    },
    subcmntRightView:{
        flex:0.8,
        //backgroundColor:'blue'

    },
    stud1Style:{
        height:"38%",
        width:"70%",
        borderRadius:50,
        margin:5
    },
    txtTitle:{
        fontWeight:'bold',
        paddingVertical:1,
        color:selectedTheme.textColor
    },
    txtWrapper:{
        //backgroundColor:'pink',
    paddingVertical:10},
    subCmntStyle:{
        flex:0.5,
        //backgroundColor: 'white',
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        paddingVertical:5,
        flexDirection:'row',
        borderColor:COLORS.gray40

      },
      replyStyle:{
          width:"15%",
          height:"50%"
      },
      subcomntWrapper:{
          flex:0.3,
          //backgroundColor:'red',
          flexDirection:'row',
          justifyContent:'space-evenly',
          alignItems:'center',
          paddingVertical:5
      },
      subheartWrapper:{
          flex:0.3,
          //backgroundColor:'pink',
          flexDirection:'row',
          justifyContent:'space-evenly',
          alignItems:'center'
      },
      subdayWrpr:{
          flex:0.4,
          //backgroundColor:'orange',
          justifyContent:'center'
      },
      inputWrapper:{
          flex:0.9,
          paddingLeft:10,
          justifyContent: 'center',
        //   backgroundColor:'red'
      },
      sendWrapper:{
        flex:0.1,
        justifyContent:'center'
      },
      sendIconStyle:{
          height:"60%",
          width:"60%"
      },
      txtInputStyle:{
          flex:1,
          //backgroundColor:'green',
          padding: 5,
      },
      txtBold:{
          fontWeight:'bold'
      }
    
})