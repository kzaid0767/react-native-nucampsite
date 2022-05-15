import  React, { Component } from "react";
import { View, FlatList, Text } from "react-native";            //wraps all list items
//import { ListItem } from "react-native-elements";     wraps each indvidual item
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent'

const mapStateToProps = state => {
    return {
        campsites: state.campsites
    };
};

class Directory extends Component {

    static navigationOptions = {
        title: 'Directory'          //set header title for directory
    }

    render() {
        const { navigate } = this.props.navigation; //taking only navigate from react navigation
        const renderDirectoryItem = ({item}) => {
            return (
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })} //arguments where to navigate to and id of pressed campsite
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        if (this.props.campsites.isLoading) {
            return <Loading />;
        }
        if (this.props.campsites.errMess) {
            return (
                <View>
                    <Text>{this.props.campsites.errMess}</Text>
                </View>
            );
        }

        return (
            <FlatList
                data={this.props.campsites.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Directory);