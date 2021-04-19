import React from "react";
import {TextInput,View,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = ({ term , onTermChange , onTermSubmit }) => {
    return(
        <View style={styles.bar}>
            <Icon name="search" style={styles.icon}   />
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bar:{
        backgroundColor:"#F0EEEE",
        
        borderRadius:5,
        height:50,
        marginHorizontal:15,
        flexDirection:"row",
    },
    input:{
        fontSize:28,
        paddingLeft:5,
        borderWidth:1,
        borderColor:"black",
        flex:1,
        borderRadius:5,
        
        
    },
    icon:{
        fontSize:35 ,
        color:"black",
        alignSelf:"center",
        marginHorizontal:15
    }
})

export default SearchBar;