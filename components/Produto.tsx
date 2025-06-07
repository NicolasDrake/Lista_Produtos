import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ProdutoProps = {
  produto: {
    nome: string;
    categoria: string;
    preco: number;
  };
};

export default function Produto({ produto }: ProdutoProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text>Categoria: {produto.categoria}</Text>
      <Text style={styles.preco}>R$ {produto.preco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preco: {
    marginTop: 5,
    fontWeight: '600',
    color: '#0000FF',
  },
});
