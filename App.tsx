import React, { useState } from 'react';
import { FlatList, Modal, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Produto from './components/Produto';

const produtos = [
  {
    id: '1',
    nome: 'Smartphone Galaxy S97',
    categoria: 'Eletrônicos',
    preco: 3499,
    descricao: 'Smartphone com tela de 9.2", 1280GB, 15G.',
    marca: 'Samsung',
  },
  {
    id: '2',
    nome: 'Notebook Ultra Gamer',
    categoria: 'Informática',
    preco: 8999,
    descricao: 'Notebook com 2GB RAM, SSD 128GB.',
    marca: 'Dell',
  },
  {
    id: '3',
    nome: 'Fone Bluetooth',
    categoria: 'Acessórios',
    preco: 50,
    descricao: 'Fone com cancelamento de ruído.',
    marca: 'Apple',
  },
  {
    id: '4',
    nome: 'Monitor 24"',
    categoria: 'Periféricos',
    preco: 900,
    descricao: 'Monitor Full HD',
    marca: 'LG',
  },
  {
    id: '5',
    nome: 'Teclado Mecânico',
    categoria: 'Acessórios',
    preco: 299,
    descricao: 'Teclado RGB com switches azuis.',
    marca: 'Redragon',
  },
  {
    id: '6',
    nome: 'Cadeira Gamer',
    categoria: 'Móveis',
    preco: 570,
    descricao: 'Cadeira ergonômica com apoio lombar.',
    marca: 'TGT',
  },
];

export default function App() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);

  const abrirModal = (produto: any) => {
    setProdutoSelecionado(produto);
    setModalVisivel(true);
  };

  const fecharModal = () => {
    setModalVisivel(false);
    setProdutoSelecionado(null);
  };

  return (
    <SafeAreaView style={styles.container}>
  <Text style={styles.titulo}>Catálogo de Produtos</Text>

  <FlatList
    data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => abrirModal(item)}>
            <Produto produto={item} />
          </TouchableOpacity>
        )}
      />

      <Modal visible={modalVisivel} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {produtoSelecionado && (
              <>
                <Text style={styles.modalTitle}>{produtoSelecionado.nome}</Text>
                <Text>Categoria: {produtoSelecionado.categoria}</Text>
                <Text>Marca: {produtoSelecionado.marca}</Text>
                <Text>Descrição: {produtoSelecionado.descricao}</Text>
                <Text>Preço: R$ {produtoSelecionado.preco}</Text>

                <TouchableOpacity style={styles.fecharBtn} onPress={fecharModal}>
                  <Text style={styles.fecharTexto}>Fechar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#DCDCDC',
  },
  titulo: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  textAlign: 'center',
  color: '#000000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fecharBtn: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#cc0000',
    borderRadius: 5,
    alignItems: 'center',
  },
  fecharTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
