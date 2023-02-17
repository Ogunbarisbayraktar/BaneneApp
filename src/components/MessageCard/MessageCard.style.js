import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container:{
    backgroundColor: colors.darkgreen,
    borderColor:colors.darkgreen,
    borderWidth:5,
    margin: 10,
    borderRadius: 10,
},
    inner_container:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
    },
    dislike_count_text:{
        padding: 4,
        color: '#AFE1AF',
        fontWeight: 'bold',

    },
    dislike_container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#AFE1AF',
        borderRadius: 20,
        padding: 5,
        
    },
    user:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        
    },
    dislike_count_container:{
        alignItems: 'center',
        borderRadius: 20,
    
    },
    footer:{
        alignItems: 'flex-end',
        flex:1,
    },
    date:{
        fontStyle: 'italic',
        color: '#AFE1AF',
    },
    title:{
    fontSize: 18,
    marginLeft: 10,
    color: 'white',
},
dislike_text:{
    fontSize: 15,
    marginRight: 10,
    marginLeft: 10,
    color: '#AFE1AF',
    fontWeight: 'bold',

},
})