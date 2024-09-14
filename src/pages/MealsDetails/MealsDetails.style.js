import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: '#ECEFF1',
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    titleContainer: {
        padding:5,
        bottom: 0,
        left: 0,
        right: 0,
        borderBottomWidth:1,
        borderBottomColor:'#BDBDBD'
    },
    topTitle: {
        fontSize: 26,
        bottom:2,
        color: '#A52A2A',
        fontWeight:'bold',
        textAlign: 'left',
    },
    bottomTitle: {
        fontSize: 18,
        bottom:2,
        color: '#A52A2A',
        fontWeight:'bold',
        textAlign: 'left',
    },
    description: {
        padding:5,
        color:'#000000'
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        margin: 10,
        marginBottom:40,
        marginHorizontal:15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
