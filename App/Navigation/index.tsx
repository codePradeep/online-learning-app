import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CategoryViewModal,
  CourseChapterViewModal,
  CourseListingViewModal,
  HomeViewModal,
  InstructorViewModal,
  LoginViewModal,
  MemberShipViewModal,
  NotificationViewModal,
  ProfileViewModal,
  RegisterViewModal,
  SearchViewModal,
  WalkthroughViewModal,
} from '../ViewModel';
import CustomTab from './BottomTab/CustomTab';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Walkthrough"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="CustomTab" component={CustomTab} />
        <Stack.Screen name="Category" component={CategoryViewModal} />
        <Stack.Screen name="Login" component={LoginViewModal} />
        <Stack.Screen name="Register" component={RegisterViewModal} />
        <Stack.Screen name="Search" component={SearchViewModal} />
        <Stack.Screen name="Home" component={HomeViewModal} />
        <Stack.Screen name="Profile" component={ProfileViewModal} />
        <Stack.Screen name="Walkthrough" component={WalkthroughViewModal} />
        <Stack.Screen name="CourseListing" component={CourseListingViewModal} />
        <Stack.Screen name="CourseChapter" component={CourseChapterViewModal} />
        <Stack.Screen name="Instructor" component={InstructorViewModal} />
        <Stack.Screen name="Membership" component={MemberShipViewModal} />
        <Stack.Screen name="Notification" component={NotificationViewModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
