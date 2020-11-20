import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import KapTab from '../components/KapTab';
import KapDetail from '../components/KapDetail';
import EventTab from '../components/EventTab';
import EventDetail from '../components/EventDetail';
import AboutTab from '../components/AboutTab';


const Tab = createBottomTabNavigator();

const KapStack = createStackNavigator();

function KapStackScreen() {
    return (
        <KapStack.Navigator>
            <KapStack.Screen name="Kaps" component={KapTab} />
            <KapStack.Screen name="KapDetail" component={KapDetail} />
        </KapStack.Navigator>
    )
}

const EventStack = createStackNavigator();

function EventStackScreen() {
    return (
        <EventStack.Navigator>
            <EventStack.Screen name="Events" component={EventTab} />
            <EventStack.Screen name="EventDetail" component={EventDetail} />
        </EventStack.Navigator>
    )
}

class MainNavigation extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Kaps" component={KapStackScreen} />
                    <Tab.Screen name="Events" component={EventStackScreen} />
                    <Tab.Screen name="About" component={AboutTab} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default MainNavigation