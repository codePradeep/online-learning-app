import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, selectedTheme} from '../../Constants/theme';

export default StyleSheet.create({
  parentContainer: {
    // flex: 1,
    backgroundColor: 'pink',
  },
  mainWrapper: {
    flex: 1,
    backgroundColor: selectedTheme.backgroundColor1,
  },
  headerContainer: {
    //height:"50%",
    flex: 0.15,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
alignItems:'flex-end'
  },
  headerLeft: {
    flex: 0.8,
    //backgroundColor:'red',
    justifyContent: 'center',
  },
  notiStyle: {
    height: '40%',
    width: '40%',
    tintColor: selectedTheme.white,
  },
  headerRight: {
    flex: 0.2,
    //backgroundColor:'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: selectedTheme.textColor,
  },
  txtDate: {
    color: COLORS.gray60,
  },
  cardView: {
    height: Dimensions.get('window').height * 0.4,

    width: '90%',
    alignSelf: 'center',

    //backgroundColor: 'pink',
  },
  cardStyle: {
    height: '100%',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
  },
  txthow: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  txtmake: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    width: '90%',
  },
  txtName: {
    color: 'white',
  },
  cardTxtWrapper: {
    flex: 0.45,
    paddingLeft: 10,
    paddingTop: 10,
    //backgroundColor:'black',
    justifyContent: 'space-evenly',
  },
  cardImgWrapper: {
    flex: 0.3,
  },
  cardButton: {
    flex: 0.2,
    //backgroundColor:'yellow',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  startBtnStyle: {
    height: '80%',
    width: '45%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardViewImg: {
    height: Dimensions.get('window').height * 0.4,
    //flex:1,
    //backgroundColor:'yellow',
    width: '100%',
    alignSelf: 'center',
  },
  txtStartLearn: {
    color: 'black',
    fontWeight: '700',
  },
  videoView: {
    height: Dimensions.get('window').height * 0.28,
    //  backgroundColor:'yellow',
    width: '100%',
    //alignSelf:'center'
  },
  videoImg: {
    // height:"80%",
    // width:"80%"
    height: Dimensions.get('window').height * 0.2,
    width: '100%',
    borderRadius: 10,
    marginHorizontal: 18,
  },
  playIcon: {
    marginHorizontal: 18,
    height: '80%',
  },
  videoContentWrapper: {
    // backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtVideoTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: selectedTheme.textColor,
  },
  IconTimestyle: {
    height: '100%',
    width: '10%',
  },
  videoTimeTxt: {
    marginLeft: 5,
    color: selectedTheme.textColor7,
  },
  categoryView: {
    height: Dimensions.get('window').height * 0.25,
    //backgroundColor: 'yellow',
    width: '100%',
  },
  popularView: {
    height: Dimensions.get('window').height * 0.8,
    //backgroundColor: 'red',
    width: '100%',
  },
  categoryTitle: {
    flex: 0.25,
    //backgroundColor:'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  seeAllView: {
    height: '65%',
    width: '30%',
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSeeall: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  categoryWrapper: {
    flex: 0.8,
    //backgroundColor: 'white',
  },
  cateImg: {
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.5,
    marginHorizontal: 10,
  },
  categoryTitle1: {
    marginTop: 110,
    marginLeft: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  categoryTXt: {
    fontSize: 18,
    color: selectedTheme.textColor,
    fontWeight: '800',
  },
  popularTitle: {
    flex: 0.07,
    //backgroundColor:'red',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  courseView: {
    flex: 0.4,
    //backgroundColor:'green',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    height: '95%',
    width: '95%',
    borderRadius: 10,
  },
  IconTimestyle1: {
    height: '100%',
    width: '10%',
    marginHorizontal: 5,
  },
  txtWrapperCoursetime: {
    //backgroundColor:'pink',
    flexDirection: 'row',
    padding: 5,
  },
  coursetxtStar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starStyle: {
    height: '80%',
    width: '20%',
  },
  CardWrapper: {
    flex: 1,
    //backgroundColor: 'white'
  },
  videoTxt: {padding: 5},
  videoTxtWrapper: {flexDirection: 'row'},
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
  heartWrapper: {
    height: '20%',
    width: '20%',
    //backgroundColor:'yellow',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  txtPrice: {
    fontSize: 20,
    color: COLORS.primary,
    fontWeight: '600',
  },
  txtRate: {
    fontWeight: 'bold',
  },
  txtDes: {color: selectedTheme.textColor},
  txtAuthor: {color: selectedTheme.textColor7},
  txtTime: {color: selectedTheme.textColor7},
});
