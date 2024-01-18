import { create } from 'zustand';
import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_baseURL,
    timeout: 1000
});

export const useStore = create((set) => {
    return {
        data: [],
        status: false,
        getData: () => {
            set({ status: false });
            request.get('/')
                .then(res => {
                    set({ data: res.data, status: true });
                })
                .catch((err) => { console.log(err) })
        },
        postData: (form) => {
            set({ status: false });
            request.post('/', form)
                .then(res => {
                    set({ data: res.data, status: true });
                })
                .catch((err) => { console.log(err) })
        },
        putData: (form) => {
            set({ status: false });
            request.put('/', form)
                .then(res => {
                    set({ data: res.data, status: true });
                })
                .catch((err) => { console.log(err) })
        },
        deleteData: (id) => {
            // console.log("deleteData =", id)
            set({ status: false });
            request.delete(`/${id}`)
                .then(res => {
                    set({ data: res.data, status: true });
                })
                .catch((err) => { console.log(err) })
        },
        action: async (type, info) => {
            let d;
            set({ status: false });
            switch (type) {
                case 'get':
                    d = await request.get('/'); break;
                case 'post':
                    d = await request.post('/', info); break;
                case 'put':
                    d = await request.put('/', info); break;
                default:
                    d = await request.delete(`/${info}`);
            }
            set({ data: d.data, status: true });
        }
    }
});