import  React, { Component } from "react";
import { FlatList } from "react-native";            //wraps all list items
import { ListItem } from "react-native-elements";     //wraps each indvidual item
import { CAMPSITES } from '../shared/campsites'

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Directory'          //set header title for directory
    }

    render() {
        const { navigate } = this.props.navigation; //taking only navigate from react navigation
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })} //arguments where to navigate to and id of pressed campsite
                    leftAvatar={{ source: require('./images/react-lake.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory