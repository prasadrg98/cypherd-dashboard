/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Browser from '../screens/Browser';
import Options from '../screens/Options';
import Portfolio from '../screens/portfolio';
import Shortcuts from '../screens/Shortcuts';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Portfolio"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint, headerShown: false
            }}>
            <BottomTab.Screen
                name="Browser"
                component={Browser}
                options={({ navigation }: RootTabScreenProps<'Browser'>) => ({
                    title: 'Browser',
                    tabBarIcon: ({ color }) => <FontAwesome5 name="firefox-browser" size={30} color="black" />
                })}
            />
            <BottomTab.Screen
                name="Portfolio"
                component={Portfolio}
                options={({ navigation }: RootTabScreenProps<'Portfolio'>) => ({
                    title: 'Portfolio',
                    tabBarIcon: ({ color }) => <Feather name="pie-chart" size={30} color="black" />
                })}
            />
            <BottomTab.Screen
                name="Shortcuts"
                component={Shortcuts}
                options={({ navigation }: RootTabScreenProps<'Shortcuts'>) => ({
                    title: 'Shortcuts',
                    tabBarIcon: ({ color }) => <FontAwesome5 name='sitemap' size={30} color="black"></FontAwesome5>
                })}
            />
            <BottomTab.Screen
                name="Options"
                component={Options}
                options={({ navigation }: RootTabScreenProps<'Options'>) => ({
                    title: 'Options',
                    tabBarIcon: ({ color }) => <Ionicons name="options" size={30} color="black" />
                })}
            />

        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
