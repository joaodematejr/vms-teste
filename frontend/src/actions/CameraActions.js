
import axios from 'axios';
import { LISTAR_RTSP } from '../types';



/*
export function clickButton() {
    const request = axios.get('http://179.216.179.161:8030/LAPI/V1.0/Channels/1/Media/Video/Streams/0/LiveStreamURL?TransType=0&TransProtocol=0')
    return {
        type: LISTAR_RTSP,
        payload: console.log(request.data)
    }
}
 */

/* export function clickButton() {
    return function action(dispatch) {
        dispatch({ type: LISTAR_RTSP })
        const request = axios({
            method: 'GET',
            url: 'http://192.168.1.130/LAPI/V1.0/Channels/1/Media/Video/Streams/0/LiveStreamURL?TransType=0&TransProtocol=0',
            headers: []
        });
        return request.then(
            response => dispatch(console.log(response)),
            err => dispatch(console.log(err))
        );
    }
} */


export const clickButton = () => {
    const request = axios.get('http://192.168.1.130/LAPI/V1.0/Channels/1/Media/Video/Streams/0/LiveStreamURL?TransType=0&TransProtocol=0', {
        headers: {

        },
    });
    console.log('request', request)
    return dispatch =>
        request.then(response =>
            dispatch({
                type: LISTAR_RTSP,
                payload: console.log('linha 15 ', response.data)
            })
        );
};


/* import axios from 'axios';
import { LISTAR_RTSP, MODIFICA_CAMERA_DESCRICAO } from '../types';

export const modificaCameraDescricao = texto => {
    return {
        type: MODIFICA_CAMERA_DESCRICAO,
        payload: texto
    };
};

//LISTAR RTSP CAMERA
export const clickButton = (token) => {
    const request = axios.get(`${'http://192.168.1.130/LAPI/V1.0/Channels/1/Media/Video/Streams/0/LiveStreamURL?TransType=0&TransProtocol=0'}`, {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    });
    return dispatch =>
        request.then(response =>
            dispatch({
                type: LISTAR_RTSP,
                payload: response.data.data
            })
        );
}; */