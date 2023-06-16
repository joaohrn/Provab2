import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


function Cartao(props) {
    return(
        <View style={styles.cartao}>
            <Image
                source={props.imagem}
                style={styles.imagem}></Image>
            <View style={styles.informacoes}>
                <Text style={styles.texto}>{props.nome} lv. {props.nivel}</Text>
                <Text style={styles.texto}>stats:</Text>
                <Text style={styles.texto}>força: {props.forca}</Text>
                <Text style={styles.texto}>destreza: {props.destreza}</Text>
                <Text style={styles.texto}>valor: {props.valor}g</Text>
                <View style={styles.comprar}>
                    <TouchableOpacity style={styles.comprar}>
                        <Text style={styles.texto}>comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

export {Cartao}