import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, selectedTheme} from '../../Constants/theme';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: selectedTheme.backgroundColor1,
  },
  headerContainer: {
    flex: 0.15,
    //backgroundColor:'red',
    justifyContent: 'flex-end',
    width: '90%',
    alignSelf: 'center',
  },
  backIcon: {
    width: '55%',
  },
  backWrapper: {
    //marginTop:20,
    height: '50%',
    width: '18%',
    borderRadius: 40,
    backgroundColor: COLORS.backColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContentContainer: {
    flex: 0.7,
    //backgroundColor:'yellow',
    width: '90%',
    alignSelf: 'center',
  },
  txtCategory: {
    fontSize: 24,
    fontWeight: '800',
    marginTop: 20,
    marginBottom: 30,
    color: selectedTheme.textColor,
  },
  listView: {
    flex: 0.33,
    backgroundColor: 'rgb(236,243,239)',
    margin: 5,
    padding: 11,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    
  },
  unlistView: {
    //marginTop:10,
    flex: 0.33,
    backgroundColor: COLORS.blueColor,
    margin: 5,
    padding: 11,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
  },
  txtList: {
    //padding: 10,
    fontSize: 11,
    fontWeight: 'bold',
    color: 'white',
  },
  iconStyle: {
    // height: '50%',
    // width: '40%',
    height: Dimensions.get('screen').height*0.05,
    //width: Dimensions.get("screen").width*0.2,
    tintColor: 'grey',
    margin:25
  },
  btmContainer: {
    flex: 0.1,
    //backgroundColor:'green',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  untxtList: {
    //padding: 14,
    fontSize: 11,
    fontWeight: 'bold',
    // color:"white"
  },
});
