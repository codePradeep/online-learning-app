import {StyleSheet} from 'react-native';
import {COLORS, selectedTheme} from '../../Constants/theme';

export default StyleSheet.create({
  parentContainer: {
    //flex:1,
    //backgroundColor:'red'
  },
  modal: {
    //justifyContent: 'flex-end',
    //alignItems: 'center',
    backgroundColor: 'white',
    height: '85%',
    width: '100%',
    borderRadius: 10,
    //borderWidth: 1,
    borderColor: '#fff',
    //alignSelf:'flex-end',
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  modalWrapper: {height: '100%', width: '100%'},
  uprContainer: {height: '15%', width: '100%'},
  headerContainer: {
    flex: 0.1,
    //backgroundColor: 'red',
    flexDirection: 'row',
  },
  leftheaderContainer: {
    flex: 0.2,
  },
  midheaderContainer: {
    flex: 0.6,
    //backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightheaderContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtFilter: {
    fontSize: 24,
    fontWeight: '800',
  },
  classTypeView: {
    flex: 0.2,
    //backgroundColor:'red',
    width: '95%',
    alignSelf: 'center',
  },
  iconStyle: {
    height: '40%',
    width: '60%',
    tintColor: 'white',
    margin: 10,
  },
  iconStyle1: {
    height: '40%',
    width: '60%',
    tintColor: 'black',
    margin: 10,
  },
  typeWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemWrapper: {
    flex: 0.3,
    width: '30%',
    backgroundColor: COLORS.blueColor,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 8,
  },
  itemWrapper1: {
    flex: 0.3,
    width: '30%',
    backgroundColor: COLORS.gray10,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 8,
  },
  txtClassType: {
    color: COLORS.blueColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  txtTitle: {
    color: 'white',
  },
  txtTitle1: {
    color: 'black',
  },
  classLevelView: {
    flex: 0.25,
    //backgroundColor:'red',
    width: '95%',
    alignSelf: 'center',
  },
  levelWrapper: {
    flex: 1,

    //backgroundColor:'green'
  },
  levelItemWrapper: {
    //backgroundColor:'green',
    flex: 0.33,
    borderBottomWidth: 0.5,
    borderColor: COLORS.gray20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    //justifyContent:'center',
    //margin:5,
  },
  checkWrapper: {
    flex: 0.2,
    //backgroundColor:'pink',
    alignItems: 'center',
  },
  checkstyle: {
    height: '100%',
    width: '50%',
  },
  txtName: {
    fontWeight: '600',
  },
  createWithView: {
    flex: 0.2,
    //backgroundColor:'red',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  withinWrapper: {
    flex: 1,
  },
  WithinItemWrapper: {
    flex: 0.3,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: COLORS.blueColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  WithinItemWrapper1: {
    flex: 0.3,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: COLORS.gray10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCreated: {
    paddingVertical: 10,
    fontWeight: '600',
  },
  txtWithTitle: {
    color: 'white',
  },
  btnContainer: {
    flex: 0.25,
    //backgroundColor:'red',
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnStyle: {
    width: '45%',
    height: '30%',
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyleoff: {
    width: '45%',
    height: '30%',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  txtReset: {
    color: 'black',
  },
  txtCancel: {
    color: selectedTheme.textColor,
  },
});
