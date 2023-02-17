import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container:{
        padding: 8,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: colors.darkgreen
    },
    input:{
        flex: 1,
    },
})
