import React, { Component } from 'react'
import { Container, Content, Text, Card, CardItem, Body, Right, List, ListItem, Thumbnail } from "native-base";
import Accordion from 'react-native-collapsible/Accordion';

import { Button, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allPayment } from '../actions'

class Kredivo extends Component {
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
                        <Body><Text style={{fontWeight:'bold'}}>Kredivo</Text></Body>
                        <Right><Thumbnail square source={require('../asset/kredivo.png')} /></Right>
                    </ListItem>
                </List>
                <View style={{padding:25, backgroundColor:'#fff'}}>
                    <Text style={{fontWeight:'bold'}}>Anda akan diarahkan ke halaman kredivo</Text>
                    <Text style={{fontWeight:'bold', marginTop:10}}>Metode tunda pembayaran ( 30 hari )</Text>
                    <Text style={{fontSize:12, color:'#c2c2c2'}}>Pastikan limit transaksi Tunda pembayaran Kredivo Anda mencukupi</Text>
                    <Text style={{fontSize:12, color:'#A3CB38'}}>Syarat & Ketentuan</Text>
                    <Text style={{fontWeight:'bold', marginTop:20}}>Metode cicilan</Text>
                    <View style={{flexDirection:'row', marginTop:5}}>
                        <View style={{flex:0.6}}><Text style={{fontSize:15, color:'#c2c2c2'}}>3 bulan (bunga 2.95%)</Text></View>
                        <View style={{flex:0.4}}><Text style={{fontSize:15, color:'#A3CB38'}}>Rp XXX.XXX</Text></View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:5}}>
                        <View style={{flex:0.6}}><Text style={{fontSize:15, color:'#c2c2c2'}}>6 bulan (bunga 2.95%)</Text></View>
                        <View style={{flex:0.4}}><Text style={{fontSize:15, color:'#A3CB38'}}>Rp XXX.XXX</Text></View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:5}}>
                        <View style={{flex:0.6}}><Text style={{fontSize:15, color:'#c2c2c2'}}>12 bulan (bunga 2.95%)</Text></View>
                        <View style={{flex:0.4}}><Text style={{fontSize:15, color:'#A3CB38'}}>Rp XXX.XXX</Text></View>
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

export default connect(mapStateToProps)(Kredivo);

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
