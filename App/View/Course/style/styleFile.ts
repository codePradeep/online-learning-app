import {StyleSheet} from 'react-native';
import {COLORS, selectedTheme} from '../../../Constants/theme';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
    //backgroundColor:'pink',
    width: '90%',
    alignSelf: 'center',
  },
  uprContainer: {
    flex: 0.3,
    //backgroundColor:'red'
  },
  lwrContainer: {
    flex: 0.7,
    //backgroundColor:'yellow'
  },
  txtStudent: {
    fontSize: 21,
    fontWeight: '800',
    paddingVertical: 15,
    marginLeft: 5,
    color:selectedTheme.textColor
    //marginTop:20
  },
  imgStyle: {
    height: '95%',
    width: '95%',
    borderRadius: 10,
  },
  studentWrpr: {
    flex: 0.23,
    flexDirection: 'row',
    //backgroundColor:'orange',
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    //margin:5
  },
  txtTxt: {
    marginLeft: 0,
    marginRight: 0,
    color: COLORS.primary,
    fontWeight: 'bold',
    
  },
  lwrUprContainer: {
    flex: 0.11,
    //backgroundColor:'white',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  lwrlwrContainer: {
    flex: 0.85,
  },
  txtFile: {
    fontSize: 21,
    fontWeight: '800',
    color:selectedTheme.textColor
  },
  iconStyle: {
    height: '90%',
    width: '100%',
    borderRadius: 10,
  },
  fileWrpr: {
    flex: 0.25,
    flexDirection: 'row',
    //backgroundColor:'orange',
    //paddingHorizontal:6,
    //justifyContent:'center',
    //alignItems:'center',
    margin: 5,
  },
  iconView: {
    flex: 0.2,
    //backgroundColor:'blue',
    justifyContent: 'center',
  },
  txtView: {
    flex: 0.65,
    //backgroundColor:'white',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: '600',
    color:selectedTheme.textColor
  },
  txtDesc: {
    color: COLORS.gray50,
  },
  txtDate: {
    fontWeight: '500',
    color:selectedTheme.textColor
  },
  styleDot: {
    flex: 0.15,
    //backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    height: '100%',
    width: '50%',
  },
  studentWrapper: {flexDirection: 'row', flex: 0.8},
});
