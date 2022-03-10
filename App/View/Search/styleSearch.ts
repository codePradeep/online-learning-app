import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../Constants/theme';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
    //backgroundColor: 'pink',
  },
  headerContainer:{
      flex:0.13,
      justifyContent:'flex-end',
      //backgroundColor:'red'
  },
  midContainer:{
      flex:0.72,
      width:'90%',
      alignSelf:'center',
      //backgroundColor:'yellow'
  },
  btnContainer:{
      flex:0.15,
      //backgroundColor:'green'
  },
  searchWrapper:{
    height:"50%",
    borderRadius:10,
    backgroundColor:'white',
    width:"90%",
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    shadowColor:"grey",
    shadowOpacity: 0.8,
    shadowRadius: 1.5,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  searchIcon:{
    height:"50%",
    width:'15%',
    tintColor:'grey'
  },
  placeholderStyle:{
    height:"100%",
    width:"85%",
    //backgroundColor:'black'
  },
  txtSearch:{
    marginVertical:15,
    fontSize:18,
    fontWeight:'700',
    marginLeft:10
  },
  searchView:{
    backgroundColor:COLORS.gray20,
    padding:15,
    marginHorizontal:5,
    borderRadius:10
  },
  topsearchWrapper:{
    flexDirection:'row',
    //backgroundColor:'red',
    flex:1,
    alignItems:'center'
  },
  imgStyle:{
    //height: Dimensions.get('window').height * 0.4,
    width:"80%",
    height:"80%"
  },
  ImgWrapper:{
    backgroundColor:'red',
  },
  cateImg: {
    height: Dimensions.get('window').height * 0.16,
    width: Dimensions.get('window').width * 0.4,
    marginHorizontal: 10,
  },
  categoryTitle1: {
    marginTop: 90,
    marginLeft: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  

})