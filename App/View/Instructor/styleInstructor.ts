import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, selectedTheme} from '../../Constants/theme';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  headerContainer: {
    flex: 0.15,
    backgroundColor: COLORS.primary,
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  contentContainer: {
    flex: 0.85,
    backgroundColor: selectedTheme.backgroundColor1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentUprContainer: {
    flex: 0.08,
    //backgroundColor:'green'
  },
  contentMidContainer: {
    //flex:0.15,
    height: 120,
    //backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  contentScrollContainer: {
    flexGrow: 1,
    //flex:1,
    // backgroundColor:'pink'
  },
  backStyle: {
    height: '80%',
    width: '20%',
  },
  shareStyle: {
    height: '80%',
    width: '20%',
  },
  shareIconWrapper: {
    flex: 0.5,
    //backgroundColor:'green',
    //justifyContent:'flex-end',
    alignItems: 'flex-end',
  },
  backIconWrapper: {
    flex: 0.5,
  },
  txtByprog: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 5,
    color:selectedTheme.textColor
  },
  styleFollow: {
    height: '30%',
    width: '20%',
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  txtFollow: {
    color: COLORS.primary,
    fontWeight: '500',
  },
  profileStyle: {
    height: '130%',
    width: '16%',
    borderRadius: 60,
    position: 'relative',
    top: -35,
    left: 165,
  },
  followerWrapper: {
    height: 130,
    //backgroundColor:'green',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  followerItem: {
    height: '65%',
    width: '30%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'red',
  },
  txtCount: {
    fontSize: 18,
    fontWeight: '800',
  },
  txtTitle: {
    fontWeight: 'bold',
  },
  aboutmeStyle: {
    height: 120,
    //width:"100%",
    //flex:0.2,
    //backgroundColor:'red',
    justifyContent: 'space-evenly',
    width: '93%',
    alignSelf: 'center',
  },
  txtAbout: {
    fontSize: 18,
    fontWeight: 'bold',
    color:selectedTheme.textColor
  },
  txtShowmore: {
    color: COLORS.primary,
    fontWeight: 'bold',

  },
  txtLorem:{
    color:selectedTheme.textColor7
  },
  courseView: {
    height: 670,
    //flex:0.3,
    //backgroundColor:'pink',
    width: '93%',
    alignSelf: 'center',
    borderTopWidth: 0.5,
    borderColor: COLORS.gray40,
    marginTop: 10,
  },

  courseContent: {
    height: 160,
    //flex:0.7,
    //backgroundColor:'yellow'
  },
  courseView1: {
    //flex: 1,
    //backgroundColor:'green',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    width: '100%',
    alignSelf: 'center',
  },
  courseViewLeft: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'green'
  },
  courseViewRight: {
    flex: 0.55,
    //backgroundColor:'yellow',
    //padding: 5,
    justifyContent: 'space-evenly',
    //paddingLeft:15
  },
  courseImg: {
    height: '95%',
    width: '95%',
    borderRadius: 10,
  },
  seprator: {
    height: 1,
    width: '97%',
    alignSelf: 'center',
    backgroundColor: COLORS.gray40,
    marginVertical: 10,
  },
  txtDesc: {
    fontWeight: '800',
    paddingVertical: 3,
    color:selectedTheme.textColor
  },
  txtPrice: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 2,
  },
  txtRate: {
    fontWeight: '700',
  },
  txtAuthor: {
    fontWeight: '500',
    paddingVertical: 2,
    color:selectedTheme.textColor7
  },
  txtWrapperCoursetime: {
    //backgroundColor:'pink',
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
  },
  coursetxtStar: {
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor:"blue"
  },
  starStyle: {
    height: '70%',
    width: '20%',
    marginHorizontal: 4,
  },
  IconTimestyle1: {
    height: '100%',
    width: '10%',
    marginLeft: 5,
    marginRight: 5,
  },

  backArrowStyle: {
    height: '25%',
    width: '45%',
  },
  arrowWrapper: {
    height: '23%',
    width: '15%',
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 45,
    left: 23,
  },
  txtMobile: {
    position: 'absolute',
    top: 190,
    left: 23,
    fontWeight: '700',
    fontSize: 28,
    color: 'white',
  },
  mobileStyle: {
    height: '100%',
    width: '30%',
    position: 'absolute',
    left: 240,
    top: 80,
  },
  midContainer: {
    flex: 0.7,
    backgroundColor: 'white',
  },
  seeAllView: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSeeall: {
    color: 'white',
  },
  categoryView: {
    height: Dimensions.get('window').height * 0.25,
    //backgroundColor: 'yellow',
    width: '100%',
  },
  txtpolular: {
    fontSize: 18,
    fontWeight: '800',
  },
  leftheader: {
    flex: 0.5,
    //backgroundColor:"orange",
    justifyContent: 'center',
    //alignItems:'center'
  },
  rightheader: {
    flex: 0.5,
    //backgroundColor:"pink",
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  courseHeader: {
    flex: 0.1,
    //backgroundColor:'red',
    flexDirection: 'row',
  },
  txtMyCourse: {
    fontSize: 18,
    fontWeight: 'bold',
    color:selectedTheme.textColor
  },
  seeallBtn: {
    height: '60%',
    width: '40%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  studentRatingView: {
    flex: 0.4,
    backgroundColor: 'red',
  },
  studentView: {
    height: 300,
    borderTopWidth: 0.5,
    borderColor: COLORS.gray40,
    //backgroundColor: 'pink',
  },
  studentWrapper: {
    flex: 0.9,
    //backgroundColor:'red',
    width: '95%',
    alignSelf: 'center',
  },
  txtstudentRating: {
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 10,
    color:selectedTheme.textColor
  },
  studentCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  studentUprView: {
    flex: 0.2,
    backgroundColor: COLORS.blueColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStudentSatisfy: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  studentlwrView: {
    flex: 0.8,
    //backgroundColor: 'grey',
    marginTop: 10,
  },
  sepratorView: {
    flex: 0.15,
    width: '95%',
    alignItems: 'center',
    alignSelf: 'center',
    //backgroundColor: 'white',
    flexDirection: 'row',
  },
  orangeSeprator: {
    width: '50%',
    height: '40%',
    marginHorizontal: 3,
    backgroundColor: 'orange',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  blueSeprator: {
    width: '28%',
    height: '40%',
    marginHorizontal: 3,
    backgroundColor: 'skyblue',
  },
  purpleSeprator: {
    width: '13%',
    height: '40%',
    marginHorizontal: 3,
    backgroundColor: 'purple',
  },
  redSeprator: {
    width: '5%',
    height: '40%',
    backgroundColor: 'red',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  verySatify: {
    flex: 0.21,
    //backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  studentReview: {
    height: 250,
    //backgroundColor: 'green',
    width: '95%',
    alignSelf: 'center',
  },
  StudentHeader: {
    flex: 0.18,
    //backgroundColor: 'pink',
    flexDirection: 'row',
  },
  reviewCard: {
    flex: 0.85,
    //alignItems:'center',
    //backgroundColor: 'red',
  },
  reviewStyle: {
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.65,
    backgroundColor: COLORS.blueColor,
    flexDirection: 'row',
    alignSelf:'center',
    margin: 5,
    borderRadius: 15,
  },
  reviewleftStyle: {
    flex: 0.3,
    borderRadius: 50,
    alignItems: 'center',
  },
  reviewRightStyle: {
    flex: 0.7,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  iconStyle: {
    height: '30%',
    width: '75%',
    borderRadius: 100,
    marginTop: 1,
  },
  txtDes: {
    width: '90%',
    color: 'white',
  },
  txtDays: {
    color: 'white',
    //textAlignVertical:'bottom'
  },
  connectHereStyle:{
    height:200,
    //backgroundColor:'pink',
    borderTopWidth:0.5,
    borderColor:COLORS.gray50
  },
  connectTopStyle:{
    flex: 0.25,
    width:'95%',
    alignSelf:'center',
    justifyContent:'center',
    //backgroundColor:'pink'
  },
  connectBottomStyle:{
    flex: 0.75,
    //backgroundColor:'red',
    width:'95%',
    alignSelf:'center',
    justifyContent:'space-evenly',
    

  },
  txtConnect:{
    fontSize: 18,
    fontWeight: '700',
    color:selectedTheme.textColor
  },
  twitterStyle:{
    height:"35%",
//width:"95%",
    backgroundColor:'skyblue',
    opacity:0.5,
    flexDirection:'row',
    borderRadius:10
  },
  leftTwitter:{
    flex: 0.2,
    //backgroundColor:'pink'
  },
  midTwitter:{
    //backgroundColor:'white',
    flex: 0.7,
    justifyContent:'center'

  },
  rightTwitter:{
    flex: 0.1,
    justifyContent:'center',
    alignItems:'center'

  },
  txtTwitter:{
    fontSize:16
  },
  backArrowStyle1:{
    height:"70%",
    width:"70%"
  },
  txtFullstack:{
    color:selectedTheme.textColor
  },
  txtTime:{
    color:selectedTheme.textColor
  },
  imgLink:{height: '100%', width: '100%'},
  heartWrapper: {
    height: '20%',
    width: '20%',
    //backgroundColor:'yellow',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  heartStyle: {
    width: '100%',
    height: '100%',

    // position: 'absolute',
    // top:10,
    // right:10
  },
  heartStyleoff: {
    width: '100%',
    height: '100%',
    tintColor: 'white',
  },
  
  
});
