import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../Constants/theme';
import style from './styleTab';
import {
  HomeViewModal,
  ProfileViewModal,
  SearchViewModal,
} from '../../ViewModel';
import Icons from '../../Assets/icons';

const Tab = createBottomTabNavigator();

const tabArr = [
  {route: 'Home', label: 'Home', type: Icons.home, component: HomeViewModal},
  {
    route: 'Search',
    label: 'Search',
    type: Icons.search,
    component: SearchViewModal,
  },
  {
    route: 'Profile',
    label: 'Profile',
    type: Icons.profile,
    component: ProfileViewModal,
  },
];

const CustomTab = () => {
  const RenderTabIcon = ({ Icon}:any) => {
    return (
      <Image
        source={Icon}
        style={{height: '60%', width: '30%', tintColor: 'black'}}
        resizeMode="contain"
      />
    );
  };

  const RenderButton = (props:any) => {
    console.log(props);

    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: '160%',
          borderRadius: focused ? 10 : 10,
          width: '33.3%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: focused ? COLORS.primary : COLORS.blueColor,
        }}>
        <Image
          source={item.type}
          style={{
            height: '60%',
            width: '24%',
            tintColor: focused ? 'white' : 'white',
          }}
          resizeMode="contain"
        />
        <Text style={style.txtLable}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View style={[{flex: 1, backgroundColor: 'red'}]}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: style.tabBar,
          }}>
          {tabArr.map((item, index) => {
            return (
              <Tab.Screen
                key={`item` + index}
                name={item.route}
                component={item.component}
                options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({focused}) => (
                    <RenderTabIcon focused={focused} Icon={item.type} />
                  ),
                  tabBarButton: props => (
                    <RenderButton {...props} item={item} />
                  ),
                }}
              />
            );
          })}
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default CustomTab;
