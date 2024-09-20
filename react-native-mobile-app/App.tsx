// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductProvider } from './src/contexts/ProductContext';
import ProductList from './src/screens/ProductList';
import ProductDetail from './src/screens/ProductDetail';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen
            name="ProductList"
            component={ProductList}
            options={{ title: 'Product List' }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{ title: 'Product Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}
