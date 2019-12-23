import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from "./ResultsDetail";

const ResultsList = (props) => {

    const {title, results, navigation} = props;

    return (
        results.length > 0 ?
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{title}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={results}
                    keyExtractor={(result) => result.id}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ResultsShow', {
                                    id: item.id,
                                })}
                            >
                                <ResultDetail result={item}/>
                            </TouchableOpacity>

                        )
                    }}

                />
            </View> : null
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    titleStyle: {
        marginBottom: 5,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    }
});

export default withNavigation(ResultsList);

