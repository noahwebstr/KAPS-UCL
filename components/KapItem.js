import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import KapDetail from './KapDetail';
import data from '../helpers/tagsCodeColor';

class KapItem extends React.Component {

    render() {
        const { kap, displayDetailForKap } = this.props
        const numberTags = kap.tags.length
        var tagLoop = [];

        for (let i = 0; i < numberTags; i++) {
            tagLoop.push(
                <View key={i}>
                    <Text style={styles.tag_text}>{kap.tags[i]}</Text>
                </View>
            );
        }

        return (
            <TouchableOpacity
                style={styles.main_container}
                onPress={() => displayDetailForKap(kap.id)}>
                <View style={styles.image_container}>
                    <Image
                        style={styles.image}
                        /* TO Be REPLACED by an actual call of API*/
                        //source={require("../helpers/ic_favorite.png")}
                        source={require("../helpers/logo_papyrus.png")}
                    />
                </View>
                <View style={styles.content_container}>
                    <Text style={styles.name_text}>{kap.name}</Text>
                    <View style={styles.tags_container}>
                        {tagLoop}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    main_container: {
        height: 100,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        marginBottom: 5,
        marginLeft: '2%',
        marginRight: '2%',
        /*shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 3,
            height: 3
        }*/
    },
    image_container: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    image: {
        flex: 1,
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    content_container: {
        flex: 1,
        flexDirection: 'column',
        margin: 5
    },
    name_text: {
        fontSize: 30,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        marginLeft: 5
    },
    tags_container: {
        flexDirection: 'row',
        marginTop: 5,
        flexWrap: 'wrap'
    },
    tag_text: {
        backgroundColor: "#99ccff",
        fontSize: 15,
        borderRadius: 10,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5
    }
})

export default KapItem