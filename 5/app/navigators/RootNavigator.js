import { StackNavigator } from 'react-navigation';

import {PaymentList, Kredivo, Bca} from '../payment/screens'

const RootNavigator = StackNavigator({
    PaymentList: {
        screen: PaymentList,
        navigationOptions: {
        title: 'Pilih Metode Pembayaran',
    //       headerStyle:{ backgroundColor: '#4A6572' },
    //       headerTintColor: '#fff'
    }
    },
    Kredivo: {
        screen: Kredivo,
        navigationOptions: {
        title: 'Detail Pembayaran',
    //       headerStyle:{ backgroundColor: '#4A6572' },
    //       headerTintColor: '#fff'
        }
    },
    Bca: {
        screen: Bca,
        navigationOptions: {
        title: 'Detail Pembayaran',
    //       headerStyle:{ backgroundColor: '#4A6572' },
    //       headerTintColor: '#fff'
        }
    } 
})

export default RootNavigator
