    import React from 'react'

    import {
        Text,
        ScrollView,
        View
    } from 'react-native'

    import {
        Button
    } from 'react-native-elements'

    import AsyncStorage from '@react-native-community/async-storage';

    import {styling} from "../util/styling";

    class Profile extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                person : {}
            }
        }

        static navigationOptions = {
            header: null
        };

        componentDidMount() {
            this.setState({person : this.props.navigation.state.params.person})
        };

        saveToFavs = async () => {
            let favorites = await AsyncStorage.getItem("FAVORITES");
            let isAlreadyFav = undefined;
            let newFavorites = favorites ? JSON.parse(favorites) : []

            newFavorites.push(this.state.person)

                try{
                    await AsyncStorage.removeItem("FAVORITES");
                    await AsyncStorage.setItem("FAVORITES",JSON.stringify(newFavorites));
                }
                catch(err) {
                    throw err
                }
        };

        render() {
            return (
                    <ScrollView style ={{backgroundColor:'#1C1C1C'}}>
                            <Text style={styles.title}>
                                {this.state.name}
                            </Text>

                        <View style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
                                    <Button
                                        title="Add"
                                        buttonStyle={styles.cartBtn}
                                        onPress={() => {
                                            this.saveToFavs()
                                        }}
                                    />
                                </View>

                        <View style={{paddingLeft: 20, paddingBottom: 20}}>
                            <View
                                style={{display: "flex",flexDirection: "row"}}>
                                <Text style={styles.key}>Name:</Text>
                                <Text style={styles.key}>{this.state.person.name}</Text>
                            </View>

                            <View
                                style={{display: "flex", flexDirection: "row"}}>
                                <Text style={styles.key}>Gender:</Text>
                                <Text style={styles.key}>{this.state.person.gender}</Text>
                            </View>

                            <View
                                style={{display: "flex", flexDirection: "row"}}>
                                <Text style={styles.key}>Height:</Text>
                                <Text style={styles.key}>{this.state.person.height}</Text>
                            </View>

                            <View
                                style={{display: "flex", flexDirection: "row"}}>
                                <Text style={styles.key}>Mass:</Text>
                                <Text style={styles.key}>{this.state.person.mass}</Text>
                            </View>

                            <View
                                style={{display: "flex", flexDirection: "row"}}>
                                <Text style={styles.key}>Hair color:</Text>
                                <Text style={styles.key}>{this.state.person.hair_color}</Text>
                            </View>

                            <View
                                style={{display: "flex", flexDirection: "row"}}>
                                <Text style={styles.key}>Eye color</Text>
                                <Text style={styles.key}>{this.state.person.eye_color}</Text>
                            </View>
                           </View>

                    </ScrollView>
            )
        }

    }


    const styles = styling;
    export default Profile;
