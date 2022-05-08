import  React from "react";
import { FlatList } from "react-native";            //wraps all list items
import { ListItem } from "react-native-elements";     //wraps each indvidual item

function Directory(props){
    
    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                onPress={() => props.onPress(item.id)}
                leftAvatar={{source: require('./images/react-lake.jpg')}}
            />   
        )
    }

    return(
        <FlatList
            data={props.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor = {item => item.id.toString()} //expects string so convert id to string
        />
    )
}

export default Directory