import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

import CustomButton from  './components/CustomButton'
import Categories from './components/Categories'
import Card from './components/Card'


export default function App() {
  const categories = [
    { text: 'Fruits' },
    { text: 'Bread' },
    { text: 'Drinks' },
    { text: 'Veggies' },
    { text: 'Meat' },
    { text: 'Paper Goods' }
  ];

  const items = [
    { name: 'Pepper', price: '2.99', url: 'https://images.unsplash.com/photo-1506368144590-cf6438f1cdb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' },
    { name: 'Bread', price: '7.99', url: 'https://images.unsplash.com/photo-1573333515743-56d57731dd1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' },
    { name: 'Cauliflower', price: '0.79', url: 'https://images.unsplash.com/photo-1506808547685-e2ba962ded60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80' },
    { name: 'Eggs', price: '2.99', url: 'https://images.unsplash.com/photo-1492737096399-cf0c3eae286f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80' }
  ]



  return (
    <Container>
      <ScrollView>
        <Titlebar>        
          <Avatar source={ require('./assets/avatar.jpg') }/>
          <Title>Welcome back,</Title>
          <Name>Aman</Name>
          <Ionicons 
            name="md-cart"
            size={32}
            color="#b8bece"
            style={{ position: 'absolute', right: 20, top: 5 }} />
        </Titlebar>
        <ScrollView 
            horizontal={ true }
            style={{
              padding: 20,
              paddingLeft: 8,
              paddingTop: 30,
              flexDirection: 'row'
            }}
            showsHorizontalScrollIndicator= { false }
            >
            
            { categories.map((category, index) => (
              <Categories name={ category.text } key={ index } />
            )) }
          </ScrollView>
          <Subtitle>Items</Subtitle>
          <ItemsLayout>
            <ColumnOne>
            { items.map((item, index) => (
              <Card name={ item.name } price={ item.price } url={ item.url } key={ index } />
            ))}
            </ColumnOne>
            <ColumnTwo>
            { items.reverse().map((item, index) => (
              <Card name={ item.name } price={ item.price } url={ item.url } key={ index } />
            ))}
            </ColumnTwo>    
          </ItemsLayout>
      </ScrollView>
    </Container>
  );
}

const Container = styled.View `
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`

const Titlebar = styled.View `
  width: 100%;
  margin-top: 35px;
  padding-left: 80px;
`

const Avatar = styled.Image `
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: black;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`

const Title = styled.Text `
  font-size: 20px;
  font-weight: 500;
  color: palevioletred;
`

const Subtitle = styled.Text `
  font-size: 20px;
  color: #3c4560;
  font-weight: 500;
  margin-top: 10px;
  margin-left: 25px;
  text-transform: uppercase;
`

const Name = styled.Text `
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`

const ItemsLayout = styled.View`
  flex-direction: row;
  flex: 1;
`

const ColumnOne = styled.View ``
const ColumnTwo = styled.View ``