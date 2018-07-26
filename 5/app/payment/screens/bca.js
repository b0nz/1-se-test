import React, { Component } from 'react'
import { Container, Content, Text, Body, Right, List, ListItem, Thumbnail, Form, Item, Input, Label } from "native-base";
import Accordion from 'react-native-collapsible/Accordion';

import { Button, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allPayment } from '../actions'

class Bca extends Component {
//    componentDidMount() {
//      this.props.dispatch(allPayment())
//    }

  render() {
    return (
        <Container style={styles.container}>
            <Content>
                <View style={{padding:10, flex:1}}>
                    <View style={{flexDirection:'row', backgroundColor:'#A3CB38', padding:15, paddingTop:25, paddingBottom:30, borderTopLeftRadius:5, borderTopRightRadius:5}}>
                        <View style={{flex:0.7}}><Text style={{color:'#fff'}}>Total Pembayaran</Text></View>
                        <View style={{flex:0.3}}><Text style={{color:'#fff'}}>Rp 494.015</Text></View>
                    </View>
                    <View style={{backgroundColor:'#fff', padding:10, alignItems:'center', borderBottomRightRadius:5, borderBottomLeftRadius:5}}><Text style={{color:"#A3CB38"}}>Lihat rincian belanja</Text></View>
                </View>
                <List style={{backgroundColor:'#fff', borderBottomWidth:5, borderColor:'#f4f4ff'}}>
                    <ListItem style={{borderColor:'#fff'}}>
                        <Body><Text style={{fontWeight:'bold'}}>Transfer Bank BCA</Text></Body>
                        <Right><Thumbnail square source={require('../asset/bca.png')} /></Right>
                    </ListItem>
                </List>
                
                <View style={{backgroundColor:'#fff'}}>
                    <Form style={{marginRight:25, marginLeft:10}}>
                        <Item stackedLabel>
                            <Label>Nomor Rekening Anda</Label>
                        <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Pemilik Rekening</Label>
                        <Input />
                        </Item>
                    </Form>
                    <View style={{padding:25}}>
                        <Text style={{marginTop:10}}>Jika melalui Teller, isi Nama Pemilik Rekening dengan nama penyetor dan Nomor Rekening dengan 0000</Text>
                       <Text style={{marginTop:10}}>Demi keamanan transaksi Anda, pastikan untuk tidak menginformasi bukti dan data pembayaran kepada pihak manapun kecuali Tokopedia</Text>
                    </View>
                </View>
                <View style={{padding:5}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{backgroundColor:'#fff', alignItems:'center', padding:10}}><Text>Ubah metode pembayaran</Text></TouchableOpacity>
                </View>
                <TouchableOpacity style={{width: '100%', height: 50, backgroundColor: '#A3CB38', justifyContent: 'center', alignItems: 'center'}} onPress={()=>alert('success')}>
                    <Text style={{color:'#fff'}}>Bayar</Text>
                </TouchableOpacity>
            </Content>
        </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    payment: state.paymentReducer
  }
}

export default connect(mapStateToProps)(Bca);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#ffffff'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
