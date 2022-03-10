import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/theme";

export default StyleSheet.create({
    parentContainer:{
        flex:1,
        //backgroundColor:'pink'
    },
    headerContainer:{
        flex:0.3,
        //backgroundColor:'red',
    },
    backArrowStyle:{
        height:"25%",
        width:"45%"
    },
    arrowWrapper:{
        height:"23%",
        width:"15%",
        borderRadius:35,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
        top:45,
        left:23
    },
    txtMobile:{
        position:'absolute',
        top:190,
        left:23,
        fontWeight:"700",
        fontSize:28,
        color:'white'
    },
    mobileStyle:{
        height:"100%",
        width:"30%",
        position:'absolute',
        left:240,
        top:80
    },
    midContainer:{
        flex:0.7,
        backgroundColor:'white'
    },
    resultWrapper:{
        flex:0.1,
        //backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        alignItems:'center'
    },
    filterWrapper:{
        height:"70%",
        width:"12%",
        borderRadius:10,
        backgroundColor:COLORS.primary,
        justifyContent:'center',
        alignItems:'center'
    },
    filterImg:{
        height:"100%",
        width:"60%"

    },
    courseWrapper:{
        flex:0.9,
        //backgroundColor:'yellow',
        width:"90%",
        alignSelf:'center'
    },
    courseView: {
        flex: 0.4,
        //backgroundColor:'green',
        margin: 5,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:25
      },
      courseViewLeft: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
      },
      courseViewRight: {
        flex: 0.55,
        //backgroundColor:'red',
        justifyContent: 'space-evenly',
        //paddingLeft:15
      },
      courseImg: {
        height: '115%',
        width: '85%',
        borderRadius: 10,
      },
      IconTimestyle1: {
        height: '100%',
        width: '10%',
        marginLeft:5,
        marginRight:5
      },
      txtWrapperCoursetime: {
        //backgroundColor:'pink',
        flexDirection: 'row',
        paddingVertical: 8,
      },
      coursetxtStar: {
          flexDirection:'row'
      },
      starStyle:{
          height:"100%",
          width:"20%"
      },
      seprator:{
        height: 1,
        width: "97%",
        alignSelf:'center',
        backgroundColor:COLORS.gray40,
        marginVertical:10
      },
      txtDesc:{
          fontWeight:"800"
      },
      txtPrice:{
          color:COLORS.primary,
          fontSize:16,
          fontWeight:"600"
      },
      txtRate:{
          fontWeight:"700"
      },
      txtAuthor:{
          fontWeight:"500"
      },
      cardStyle:{height: '100%', width: '100%', borderBottomLeftRadius: 60}
})