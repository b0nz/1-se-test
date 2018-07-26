//import axios from 'axios'

export function allPayment(){
    // data example
    // useless
    const payment = [
        {title: 'Video 1', url: 'https://mystorage/video1.jpeg'},
        {title: 'Video 2', url: 'https://mystorage/video2.jpeg'},
        {title: 'Video 3', url: 'https://mystorage/video3.jpeg'},
      ]

    return {
        type: 'ALL_PAYMENT',
        payload: payment
    }
}
