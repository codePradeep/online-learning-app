import { Dimensions, StyleSheet } from "react-native";
import { COLORS, selectedTheme } from "../../../Constants/theme";

export default StyleSheet.create({
    courseView: {
        flex: 0.4,
        //backgroundColor:'green',
        margin: 5,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:5,
        width:"95%",
        alignSelf:'center'
      },
      courseViewLeft: {
        flex: 0.45,
        justifyContent: 'center',
        //alignItems: 'center',
        // backgroundColor:'green'
      },
      courseViewRight: {
        flex: 0.55,
        //backgroundColor:'yellow',
        padding: 5,
        //justifyContent: 'space-between',
        //paddingLeft:15
      },
      courseImg: {
        height: '100%',
        width: '85%',
        borderRadius: 10,
      },
      seprator:{
        height: 1,
        width: "97%",
        alignSelf:'center',
        backgroundColor:COLORS.gray40,
        marginVertical:10
      },
      txtDesc:{
          fontWeight:"800",
          paddingVertical:3,
          color:selectedTheme.textColor

      },
      txtPrice:{
          color:COLORS.primary,
          fontSize:18,
          fontWeight:"700",
          paddingVertical:2
      },
      txtRate:{
          fontWeight:"700"
      },
      txtAuthor:{
          fontWeight:"500",
          paddingVertical:2,
          color:selectedTheme.textColor
      },
      txtWrapperCoursetime: {
        //backgroundColor:'pink',
        flexDirection: 'row',
        paddingVertical: 8,
        alignItems:'center'
      },
      coursetxtStar: {
          flexDirection:'row',
          alignItems:'center',
          //backgroundColor:"blue"
      },
      starStyle:{
        height:"70%",
        width:"20%",
        marginHorizontal:4,
    },
    IconTimestyle1: {
        height: '100%',
        width: '10%',
        marginLeft:5,
        marginRight:5
      },
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
        //backgroundColor:'white',
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
        //backgroundColor:'white'
    },
    seeAllView: {
        paddingHorizontal:20,
        paddingVertical:12,
        borderRadius: 30,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
      },
      txtSeeall: {
        color: 'white',
        fontSize:16,
        fontWeight:'600'
        
      },
      categoryView: {
        height: Dimensions.get('window').height * 0.25,
        //backgroundColor: 'yellow',
        width: '100%',
      },
      txtpolular:{
          fontSize:18,
          fontWeight:'700',
          color:selectedTheme.textColor
      },
      txtTheUltimate:{
        fontSize:22,
        fontWeight:"bold",
        paddingVertical:25,
        color:selectedTheme.textColor
      },
      profileWrapper:{
        flex:0.2,
        //backgroundColor:'yellow',
        justifyContent:'center'
      },
      txtWrapper:{
        flex: 0.55,
        //backgroundColor:'pink',
        justifyContent:'center'
      },
      btnWrapper:{
        flex: 0.25,
        //backgroundColor:'green',
        justifyContent:'center',
        //flexDirection:'row',
        //alignItems:'center'
    
      },
      followBtn:{
        height:"75%",
        borderRadius:30,
        backgroundColor:COLORS.primary,
        alignItems:'center',
        justifyContent:'center'
      },
      txtFollow:{
        fontWeight:'bold',
        color:'white'
      },
      styleProfile:{
        height:"75%",
        width:"70%",
        borderRadius:30
      },
      txtByprog:{
        fontWeight:'bold',
        fontSize:16,
        color:selectedTheme.textColor
      },
      txtFullstack:{
        fontSize:16,
        fontWeight:"400",
        color:selectedTheme.textColor

      },
      followContainer:{
        flex:0.2,
        flexDirection:'row',
        //backgroundColor:'red',
        borderBottomWidth:1
      },
      IconWrapper:{
        flex: 0.2,
        // /backgroundColor:'white',
        justifyContent:'center'
      },
      iconStyle:{
        height:"35%",
        width:"45%"
      },
      chapterbtnWrapper:{
        flex: 0.25,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      },
      txtTitle:{
        fontSize:16,
        fontWeight:'700',
        color:selectedTheme.textColor
      },
      txtTime:{
        color:COLORS.gray40
      },
      txtSize:{
        color:COLORS.gray40
      },
      chapterWrapper:{flex:0.33,
        flexDirection:'row',
        // backgroundColor:'yellow',
        borderBottomWidth:0.3,
        borderColor:'grey'
      
      },
        renderChapterView:{flex:0.8
        },
        popularStyle:{
          height: 60,
          alignItems: 'center',
          width: '95%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          //backgroundColor:'green'
        },

        popularWrapperStyle:{flex: 0.55},
        scrollContainer:{flexGrow: 1},
        containerHeight:{height: 1000},
        containerWrapper:{flex: 0.45, width: '95%', alignSelf: 'center'}

})