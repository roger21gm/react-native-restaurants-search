import React, {useState, useEffect} from 'react';
import { View, FlatList, Image, StyleSheet} from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (error) {

        }
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }
    return (
        <View>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image
                        style={styles.image}
                        source={{
                            uri: item
                        }}
                    />
                }}
            />

        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    }
})

export default ResultsShowScreen;
