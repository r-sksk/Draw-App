import { ActionTree } from 'vuex';
import { RootState } from '@/stores/types';

// 外部との通信（非同期処理OK）、描画処理など
export const actions: ActionTree<RootState, RootState> = {
    fetch: (context) => {
        console.log(context);
    },

    push: (context) => {
        console.log(context);
    },
};
