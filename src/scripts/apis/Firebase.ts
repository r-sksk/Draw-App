import firebase from 'firebase';
import { FirebaseConfig } from './types';
// import store from '@/stores'

class Firebase {
    static async init(config: FirebaseConfig)
    {
        const firebaeInit = firebase.initializeApp(config);
        if (firebaeInit) {
            console.log(firebaeInit);
        }
    }
}

export default Firebase;
