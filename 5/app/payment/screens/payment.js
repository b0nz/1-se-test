import React, { Component } from 'react'
import { Container, Content, Text, Icon, Right, Left, Body, ListItem, List, Thumbnail } from "native-base";
import Accordion from 'react-native-collapsible/Accordion';

import { Button, View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allPayment } from '../actions'

const SECTIONS = [
  {
    title: 'Transfer Bank (Konfirmasi Manual)',
    content: [
        {title:'Lorem ipsum', image: require('../asset/bca.png'),url:'Kredivo'}
    ]
  },
  {
    title: 'Transfer Bank (Konfirmasi Otomatis)',
    content: [
        {title: 'Bank BCA', image: require('../asset/bca.png'), url:'Bca'},
        {title: 'Bank Mandiri', image: require('../asset/mandiri.png'), url:'Kredivo'},
        {title: 'Bank BNI', image: require('../asset/bni.png'), url:'Kredivo'},
        {title: 'Bank CIMB', image: require('../asset/cimb.png'), url:'Kredivo'},
        {title: 'Bank BRI', image: require('../asset/bri.png'), url:'Kredivo'}
    ]
  },
  {
    title: 'Pembayaran Instant',
    content: [
        {title: 'Kredivo', image: require('../asset/kredivo.png'), url:'Kredivo'}
    ]
  },
  {
    title: 'Kartu Kredit / Debit / Cicilan',
    content: [
        {title: 'Lorem ipsum', image: require('../asset/bca.png'), url:'Kredivo'}
    ]
  },
  {
    title: 'Gerai Retail',
    content: [
        {title: 'Lorem ipsum', image: require('../asset/bca.png'), url:'Kredivo'}
    ]
  },
  {
    title: 'Cicilan Tanpa Kartu Kredit',
    content: [
        {title: 'Lorem ipsum', image: require('../asset/bca.png'), url:'Kredivo'},
    ]
  }
];


class PaymentList extends Component {
//    componentDidMount() {
//      this.props.dispatch(allPayment())
//    }
   constructor(){
        super();
        this._renderContent = this._renderContent.bind(this);
   }
    
  _renderHeader(section) {
    return (
      <View style={{padding:20, backgroundColor:"#fff", borderWidth: 0.5, borderColor: '#d6d7da', flexDirection:'row'}}>
        <View style={{flex:0.9}}><Text style={styles.headerText}>{section.title}</Text></View>
        <View style={{flex:0.1}}><Right><Icon name="md-arrow-dropright"/></Right></View>
      </View>
    );
  }
  
  _renderContent(section) {
    console.log(this.props.navigation)
    return (
      <View style={{backgroundColor:'#fafafa'}}>
        <List>
        {section.content.map((item, i)=>{
          return(
            <ListItem thumbnail key={i} onPress={()=>this.props.navigation.navigate(item.url)}>
              <Left><Thumbnail square source={item.image} /></Left>
              <Body><Text>{item.title}</Text></Body>
              <Right><Icon name="ios-arrow-dropright"/></Right>
            </ListItem>
          )  
        })}
        </List>
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <Container style={styles.container}>
            <Accordion
                sections={SECTIONS}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
            />
        </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    payment: state.paymentReducer
  }
}

export default connect(mapStateToProps)(PaymentList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
