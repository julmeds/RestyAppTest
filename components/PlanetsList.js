import React from 'react'
import {
    FlatList,
    StyleSheet,
    View} from 'react-native'
import {
    ListItem,
    Icon,
    SearchBar
} from 'react-native-elements'

import {styling} from '../util/styling'


class Planets extends React.Component {
    constructor(props) {
        super(props);

        this.state =
            {
                planets: [],
                planetsBkp: []
            };
    }
    static navigationOptions = {
        header: null

    };
planets=[
        {
            "name": "Alderaan",
            "rotation_period": "24",
            "orbital_period": "364",
            "diameter": "12500",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "grasslands, mountains",
            "surface_water": "40",
            "population": "2000000000",
            "residents": [
                "https://swapi.co/api/people/5/",
                "https://swapi.co/api/people/68/",
                "https://swapi.co/api/people/81/"
            ],
            "films": [
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T11:35:48.479000Z",
            "edited": "2014-12-20T20:58:18.420000Z",
            "url": "https://swapi.co/api/planets/2/"
        },
        {
            "name": "Yavin IV",
            "rotation_period": "24",
            "orbital_period": "4818",
            "diameter": "10200",
            "climate": "temperate, tropical",
            "gravity": "1 standard",
            "terrain": "jungle, rainforests",
            "surface_water": "8",
            "population": "1000",
            "residents": [],
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T11:37:19.144000Z",
            "edited": "2014-12-20T20:58:18.421000Z",
            "url": "https://swapi.co/api/planets/3/"
        },
        {
            "name": "Hoth",
            "rotation_period": "23",
            "orbital_period": "549",
            "diameter": "7200",
            "climate": "frozen",
            "gravity": "1.1 standard",
            "terrain": "tundra, ice caves, mountain ranges",
            "surface_water": "100",
            "population": "unknown",
            "residents": [],
            "films": [
                "https://swapi.co/api/films/2/"
            ],
            "created": "2014-12-10T11:39:13.934000Z",
            "edited": "2014-12-20T20:58:18.423000Z",
            "url": "https://swapi.co/api/planets/4/"
        }]

    componentDidMount() {this.setState({planets:this.planets, planetsBkp:this.planets})
    }

    renderItem = ({item}) => {
        return (
            <ListItem
                containerStyle={
                    styles.container
                }
                titleStyle={styles.homeTitle}
                leftAvatar={{height: 50, width: 50, source: {uri: "https://vignette.wikia.nocookie.net/battlefront/images/a/ae/Battlefront_II_дарт_вейдер.jpg/revision/latest?cb=20171023200245&path-prefix=ru"}}}
                title={item.name}
                onPress={() => { this.props.navigation.navigate("People", { residents: item.residents})}}
            />
        )
    };
    searchList = (text) => {
        let newData = this.state.planetsBkp.filter((item)=>{
            const itemData = item.name.toLowerCase();
            const textData = text.toLowerCase();
            return itemData.indexOf(textData)> -1
        });
        this.setState({
            query: text,
            planets: newData
        });
    };


    renderHeader = () => {
        return (
           <View>
                <SearchBar
                    containerStyle={{display: "flex", flex: 1, backgroundColor: '#1C1C1C',}}
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


    render() {
        return (
            <View style={{display: "flex", flex: 1}}>
                <FlatList
                    style={{backgroundColor: '#1C1C1C'}}
                    keyExtractor={this.keyExtractor}
                    data={this.state.planets}
                    renderItem={this.renderItem}
                    ListHeaderComponent={this.renderHeader()}
                />
            </View>
        )
    }
}

const styles = styling;



export default Planets
