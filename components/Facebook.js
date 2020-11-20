import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native'
import { initializeAsync, logInWithReadPermissionsAsync } from 'expo-facebook'

class Facebook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedin: false
        }

        this._loginWithFacebook = this._loginWithFacebook.bind(this)
    }

    async _loginWithFacebook() {
        try {
            await initializeAsync({
                appId: '863516664210422'
            });

            const {
                type,
                token,
                expirationDate,
                permissions,
                declinedPermission,
            } = await logInWithReadPermissionsAsync({
                permissions: ['public_profile']
            });

            if (type === 'success') {
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            }
            else {

            }
        }
        catch ({ message }) {
            Alert.alert(`Facebook Login Error: ${message}`);
        }
    }

    render() {
        return (
            < View style={styles.main_container} >
                <TouchableOpacity
                    style={styles.btn_login}
                    onPress={this._loginWithFacebook}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#e9ebee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_login: {
        backgroundColor: '#4267b2',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    }
})

export default Facebook