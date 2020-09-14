import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components';

function HomeScreen(props) {
    const { navigation } = props;
    const navigate = () => {
        navigation.navigate('Calculation');
    }
    return (
        <View accessibilityLabel="ViewHomeScreen" testID="ViewHomeScreen" style={{flex: 1, justifyContent: 'center'}}>
            <Button accessibilityLabel="homeButton" testID="homeButton" onPress={navigate} label='perhitungan diskon'/>
        </View>
    )
}

export default HomeScreen;