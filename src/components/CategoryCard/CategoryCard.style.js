import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1, 
        flexDirection:'row',
        margin:5, 
        paddingTop:10,
        paddingHorizontal:5, 
        paddingBottom:5,
        borderTopLeftRadius:80,
        borderBottomLeftRadius:80,
        alignItems:'center',
        borderWidth:2,
        borderColor:'#BCAAA4',
        backgroundColor:'#ECEFF1'
    },
    image: {
        resizeMode:'contain',
        width:90,
        height:70
    },
    title:{
        fontSize:18,
        marginLeft:10,
        color:'black'
    }
    
})