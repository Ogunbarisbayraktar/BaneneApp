import React from "react";
import { View,TextInput } from "react-native";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './Input.style';


function Input ({placeholder, onType, values, iconName, inSecure}) {
    return(
    <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={values}
        secureTextEntry={inSecure}
        />
        <Icon name={iconName} size={25} color='gray'/>
    </View>
    )
}

export default Input;