import { ActionTree } from 'vuex';
import { RootState } from '@/stores/types';
import Firebase from '@/apis/Firebase'

// 外部との通信（非同期処理OK）、描画処理など
export const actions: ActionTree<RootState, RootState> = {
    init: () => {
        const firebaseConfig = {
            apikey:process.env.MIX_FIREBASE_API_KEY,
            authDomain: process.env.MIX_FIREBASE_AUTH_DOMAIN,
            databaseURL:process.env.MIX_FIREBASE_DATABASE_URL,
            projectId:process.env.MIX_FIREBASE_PROJECT_ID,
            storageBucket:process.env.MIX_FIREBASE_STORAGE_BUCKET,
            messagingSenderId:process.env.MIX_FIREBASE_MESSAGING_SENDER_ID,
            appId:process.env.MIX_FIREBASE_APP_ID,
            measurementId:process.env.MIX_FIREBASE_MEASUREMENT_ID
          };

        Firebase.init(firebaseConfig);
    },
};
