import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Cartao } from "../../components/cartao/script";

export default function Loja() {

  const [numItems, setNumItems] = useState(0)
  const [valorTotal, setValorTotal] = useState(0)
  function adicionar(item) {
    setNumItems(numItems + 1)
    setValorTotal(valorTotal + item.valor)
  }
  const items = {
    espada: {
      nome: 'espada',
      nivel: '20',
      imagem: 'https://www.crosster.com.br/image/cache/catalog/BO05SC624-1000x1000.png',
      forca: '10',
      destreza: '20',
      valor: '500'
    },
    escudo: {
      nome: 'escudo',
      nivel: '17',
      imagem: 'https://www.bellacollezione.com/image/cache/catalog/products/acessorios/escudo-do-guerreiro-medieval-550x550.jpg',
      forca: '21',
      destreza: '17',
      valor: '250'
    },
    lanca: {
      nome: 'lança',
      nivel: '30',
      imagem: 'https://439773cc93.cbaul-cdnwnd.com/a284038138ede6f73fb0a961784578cb/200000100-66227679aa/pique.JPG',
      forca: '32',
      destreza: '40',
      valor: '1000'
    }
  }

  return (
    <View style={styles.container}>
      <Cartao nome={items.espada.nome} nivel={items.espada.nivel} imagem={items.espada.imagem} forca={items.espada.forca} destreza={items.espada.destreza} valor={items.espada.valor}/>
      <Cartao nome={items.escudo.nome} nivel={items.escudo.nivel} imagem={items.escudo.imagem} forca={items.escudo.forca} destreza={items.escudo.destreza} valor={items.escudo.valor}/>
      <Cartao nome={items.lanca.nome} nivel={items.lanca.nivel} imagem={items.lanca.imagem} forca={items.lanca.forca} destreza={items.lanca.destreza} valor={items.lanca.valor}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});