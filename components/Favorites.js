import React from 'react'
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native'

import {ListItem} from 'react-native-elements';
import {styling} from '../util/styling';
import Swipeable from 'react-native-swipeable-row';
import AsyncStorage from '@react-native-community/async-storage';



class Favorites extends React.Component {
    constructor(props) {
        super(props);

        this.state =
            {
                favorites:[]
            };
    }
    static navigationOptions = {
        header: null
    };
    componentWillMount() {
        this.getFavoritesList().then()
    }

    getFavoritesList = async () => {
        try {
            let favorites = AsyncStorage.getItem("FAVORITES").then((res)=>{
                if ( favorites !== null) {
                    this.setState({favorites:JSON.parse(res)})
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    renderItem = ({item}) => {
        return (
            <Swipeable
                rightContent={<View></View>}
        onRightActionRelease = {()=> this.removeFromFavs(item.url)}
            >
            <ListItem
        onPress={() => this.props.navigation.navigate('Profile', {person: item})}
        containerStyle={
            styles.container
        }
        titleStyle={styles.title}
        title={item.name}
        />
        </Swipeable>
    )
    };

    keyExtractor = (person) => person.name;

    removeFromFavs = async (url) => {
       let newFavorites = this.state.favorites.filter(favorite => {return favorite.url !== url})
        this.setState({favorites : newFavorites})
        try{ await AsyncStorage.removeItem("FAVORITES")
            await AsyncStorage.setItem("FAVORITES",JSON.stringify(newFavorites))}
        catch(err) {console.log(err)}
    }


    render() {
        return (
            <View style={{display: "flex", flex: 1}}>
                <FlatList
                    style={{backgroundColor: '#1C1C1C'}}
                    keyExtractor={this.keyExtractor}
                    data={this.state.favorites}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }

}


const styles = styling;

export default Favorites

