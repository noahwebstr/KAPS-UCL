import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

class KapDetail extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.image_container}>
                    <Image style={styles.image}>

                    </Image>
                </View>

                <Text style={styles.name_text}>

                </Text>

                <View style={styles.buttons_container}>
                    <TouchableOpacity style={styles.btn_add}>
                        <Text style={styles.btn_add_text}></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_event}>
                        <Text style={styles.btn_event_text}></Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.details_container}>
                    <Text style={styles.overview_text}></Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    image_container: {

    },
    image: {

    },
    name_text: {

    },
    buttons_container: {

    },
    btn_add: {

    },
    btn_add_text: {

    },
    btn_event: {

    },
    btn_event_text: {

    },
    details_container: {

    },
    overview_text: {

    },

})


export default KapDetail