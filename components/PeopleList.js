import React from 'react';
import {
    FlatList,
    View
} from 'react-native';
import {
    ListItem,
    SearchBar,
    Icon
} from 'react-native-elements';


import {styling} from '../util/styling'


class People extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                people: [],
                peopleBkp: []
            };
    }
    static navigationOptions = {
        header: null

    };
people=[
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/1/",
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/",
            "https://swapi.co/api/films/7/"
        ],
        "species": [
            "https://swapi.co/api/species/1/"
        ],
        "vehicles": [
            "https://swapi.co/api/vehicles/14/",
            "https://swapi.co/api/vehicles/30/"
        ],
        "starships": [
            "https://swapi.co/api/starships/12/",
            "https://swapi.co/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.co/api/people/1/"
    },
    {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a",
        "homeworld": "https://swapi.co/api/planets/1/",
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/"
        ],
        "species": [
            "https://swapi.co/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:10:51.357000Z",
        "edited": "2014-12-20T21:17:50.309000Z",
        "url": "https://swapi.co/api/people/2/"
    },
    {
        "name": "R2-D2",
        "height": "96",
        "mass": "32",
        "hair_color": "n/a",
        "skin_color": "white, blue",
        "eye_color": "red",
        "birth_year": "33BBY",
        "gender": "n/a",
        "homeworld": "https://swapi.co/api/planets/8/",
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/",
            "https://swapi.co/api/films/7/"
        ],
        "species": [
            "https://swapi.co/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:11:50.376000Z",
        "edited": "2014-12-20T21:17:50.311000Z",
        "url": "https://swapi.co/api/people/3/"
    },
    {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "hair_color": "none",
        "skin_color": "white",
        "eye_color": "yellow",
        "birth_year": "41.9BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/1/",
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/"
        ],
        "species": [
            "https://swapi.co/api/species/1/"
        ],
        "vehicles": [],
        "starships": [
            "https://swapi.co/api/starships/13/"
        ],
        "created": "2014-12-10T15:18:20.704000Z",
        "edited": "2014-12-20T21:17:50.313000Z",
        "url": "https://swapi.co/api/people/4/"
    }]

    renderItem = ({item}) => {
        return (
            <ListItem
                containerStyle={
                    styles.container
                }
                leftAvatar={{height: 50, width: 50, source: {uri: "https://vignette.wikia.nocookie.net/battlefront/images/a/ae/Battlefront_II_дарт_вейдер.jpg/revision/latest?cb=20171023200245&path-prefix=ru"}}}
                onPress={() => this.props.navigation.navigate('Profile', { person: item })}
                titleStyle={styles.homeTitle}
                title={item.name}
            />
        )
    };

    searchList = (text) => {
        let newData = this.state.peopleBkp.filter((item)=>{
            const itemData = item.name.toLowerCase();
            const textData = text.toLowerCase();
            return itemData.indexOf(textData)> -1
        });
        this.setState({
            query: text,
            people: newData
        });
    };


    renderHeader = () => {
        return (
           <View>
                <SearchBar
                    containerStyle={{display: "flex", flex: 1}}
                    placeholder="Type Here..."
                    searchIcon=<Icon name='search' type='font-awesome' color='#cc3a00' size={10}/>
                round
                lightTheme
                value={this.state.query}
                style={{display: 'flex', flexDirection: "row"}}
                onChangeText={(text) => this.searchList(text)}
                />
            </View>
        )
    };

    keyExtractor = (item) => item.name;


    componentDidMount() {

                this.setState({people : this.people, peopleBkp : this.people})

    }

    render() {
        return (
            <View style={{display: "flex", flex: 1}}>
                <FlatList
                    style={{backgroundColor: '#1C1C1C'}}
                    keyExtractor={this.keyExtractor}
                    data={this.state.people}
                    renderItem={this.renderItem}
                    ListHeaderComponent={this.renderHeader()}
                />
            </View>
        )
    }
}


const styles = styling;


export default People
