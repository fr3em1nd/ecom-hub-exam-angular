// ProductList.tsx
import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ProductContext } from '../contexts/ProductContext';
import { useNavigation } from '@react-navigation/native';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductList: React.FC = () => {
  const { products } = useContext(ProductContext);
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text>{item.description}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
        <Button title="View Details" />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
});

export default ProductList;
