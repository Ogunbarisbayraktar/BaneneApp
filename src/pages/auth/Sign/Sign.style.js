import { StyleSheet,Dimensions } from "react-native"
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container:{
        backgroundColor: '#D2FBA4',
        flex: 1,
    },
    header: {
        fontSize: 100,
        color: colors.darkgreen,
        margin: 5,
    },
    body_container: {
        flex: 1,
    },
})
