// import React,{useState , useEffect} from "react";
// import {Text,View,StyleSheet} from "react-native";
// import axios from "axios";

// import SearchBar from "./Components/SearchBar";
// // import useResults from "./hooks/useResults";
// import ResultList from "../src/Components/ResultsList";

// const SearchScreen = () => {
//     const [term, setTerm] = useState(" ");
//     const [results, setResults] = useState([]);

//     useEffect(() => {
//         searchApi('');
//     }, [])
//     const searchApi = async (searchTerm) => {
//         console.log("Hello there I'm fetching data...")
//         const response = await axios.get("https://catalog-reader.dhamakashopping.com/api/campaigns");
//         console.log('Fetching data...');
//         setResults(response.data.businesses);
        
       
//     };
//     console.log(results);

//     const filterResultsByName = (name) => {
//         return results.filter(result => { 
//             return result.name === name;
//         });
//     }

//     return(
//         <View>
//             <SearchBar 
//             term={term}
//             onTermChange= {setTerm}
//             onTermSubmit= {() =>searchApi(term)}
//             />
        
            
//             <ResultList results={filterResultsByName('Trending Products Campaign')} title="Cost Effective" />
//             <ResultList results={filterResultsByName('Dhamaka Grocery Mela')} title="Bit Pricer"/>
//             <ResultList results={filterResultsByName('Dhamaka Ramadan Special April 21 - Laptop')} title="Big Spender"/>
            
//         </View>
//     )
// }

// export default SearchScreen;







import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "./Components/SearchBar";
import useResults from "./hooks/useResults";
import ResultList from "./Components/ResultsList";

const SearcScreen = ({navigation}) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList navigation={navigation} results={filterResultByPrice("$")} title="Cost Effective" />
        <ResultList navigation={navigation} results={filterResultByPrice("$$")} title="Bit Pricier" />
        <ResultList navigation={navigation}  results={filterResultByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearcScreen;