import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KapList from './KapList';
import data from '../helpers/kapData';

class KapTab extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            kaps: data
        }
    }

    _loadKaps() {

    }


    render() {
        return (
            <View style={styles.main_container}>
                <KapList
                    kaps={this.state.kaps}
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    searchButton: {

    }
})

export default KapTab