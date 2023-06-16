import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cartao: {
        display: "flex",
        flexDirection: "row",
        minHeight: '30%',
        minWidth: '100%',
        backgroundColor: '#118ab2',
        paddingRight: 'auto',
        marginBottom:'10px',
        alignItems: 'center',
        gap: '20px'

    },
    imagem: {
        height: '100%',
        minWidth: '30%',
        resizeMode: 'contain'
    },
    informacoes: {
       
    },
    texto: {
        color: 'white',
    },
    comprar: {
        backgroundColor: 'lightblue'
    },
    
})

export {styles}