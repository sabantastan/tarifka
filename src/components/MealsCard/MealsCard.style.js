import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#BCAAA4',
        backgroundColor: '#ECEFF1',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    titleContainer: {
        height:'20%',
        paddingLeft:18,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
        fontSize: 32,
        bottom:2,
        color: 'white',
        fontWeight:'bold',
        textAlign: 'right',
    },
});
