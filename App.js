import { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import { Title } from './src/components/Title';
import { Card } from './src/components/Card';

const App = () => {

  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await response.json();
    setProducts(results);
  }

  useEffect(() => {
    getProduct();
  }, [])
  
  return (
    <ScrollView>
      <Title title="Ricky and Morty Cards!!" />
      {
        products.map(product => (
          <View key={product.id}>
            <Card name={product.name} uri={product.image} price={product.id} species={product.species}/>
          </View>
        ))
      }
    </ScrollView>
  );
}

export default App;
