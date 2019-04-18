
import axios from 'axios';
import { LISTAR_RTSP } from '../types';
import { IP_BACK_END } from '../../src/ipBackEnd';

export const clickButton = () => {
    const request = axios.get(`${IP_BACK_END}/queryRtspCamera`, {
        headers: {
        },
    });
    return dispatch =>
        request.then(response =>
            dispatch({
                type: LISTAR_RTSP,
                payload: console.log(response.data)
            })
        );
};