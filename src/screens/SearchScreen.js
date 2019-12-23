import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = (props) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const { navigation } = props;

    const filterResultsByPrice = (price) => {
        // price == '€' || '€€' || '€€€'
        return results.filter(result => result.price === price);
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('€')}
                    title={'Cost Effective'}
                />
                <ResultsList
                    results={filterResultsByPrice('€€')}
                    title={'Bit Pricier'}
                />
                <ResultsList
                    results={filterResultsByPrice('€€€')}
                    title={'Big Spender'}
                />
            </ScrollView>
        </>
    )
};

export default SearchScreen;
