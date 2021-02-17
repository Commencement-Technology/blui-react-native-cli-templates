import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { NavDrawerProps, NavigationDrawer } from './navigation-drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import PageOne from '../pages/pageOne';
import PageTwo from '../pages/pageTwo';

const Drawer = createDrawerNavigator();

export type RootStackParamList = {
    Home: undefined;
    PageOne: undefined;
    PageTwo: undefined;
    NavigationDrawer: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const CustomDrawerContent = (props: any): any => (
    <View style={{ height: '100%' }}>
        <NavigationDrawer {...props} />
    </View>
);

export const MainRouter = (): any => (
    <NavigationContainer>
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{ backgroundColor: 'transparent', width: '80%' }}
            drawerContent={(props: NavDrawerProps): ReactNode => <CustomDrawerContent {...props} />}
        >
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="PageOne" component={PageOne} />
            <RootStack.Screen name="PageTwo" component={PageTwo} />
        </Drawer.Navigator>
    </NavigationContainer>
);
