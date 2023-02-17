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
    logo: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height / 3,
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor: 'white',
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
    },
    body_container: {
        flex: 1,
    },
})
