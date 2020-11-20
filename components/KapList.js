import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import KapItem from './KapItem';

class KapList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            kaps: []
        }

        this._displayDetailForKap = this._displayDetailForKap.bind(this)
    }

    _displayDetailForKap(idKap) {
        this.props.navigation.navigate("KapDetail", { idKap: idKap })
    }

    /* For better performance with FlasList component, the renderItem function is mouved out of the render function */
    _renderItem = ({ item }) => (
        <KapItem
            kap={item}
            displayDetailForKap={this._displayDetailForKap}
        />
    )

    render() {
        return (
            <FlatList
                sytle={styles.list}
                data={this.props.kaps}
                keyExtractor={(item) => item.id.toString()}
                maxToRenderPerBatch="2"
                /*renderItem={({ item }) => (
                    <KapItem
                        kap={item}
                        displayDetailForKap={this._displayDetailForKap}
                    />
                )}*/
                renderItem={this._renderItem}
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    },
    item_container: {
        shadowColor: '#000',
        shadowOpacity: 1,
        marginLeft: '2%',
        marginBottom: 10,
        shadowOffset: {
            widh: 3,
            height: 3
        }
    }
})

export default KapList