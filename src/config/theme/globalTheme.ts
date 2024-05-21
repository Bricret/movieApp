import { StyleSheet } from "react-native";


export const globalColors = {

    background: '#171719',
    primary: '#FFC300',
    secondary: '#545454',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#C4C4C4',

}


export const globalTheme = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },

    title: {
        fontSize: 23,
        fontWeight: '400',
        marginLeft: 10,
        marginBottom: 10,
        color: 'white'
    },

    button: {
        backgroundColor: globalColors.secondary,
        padding: 10,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },

});