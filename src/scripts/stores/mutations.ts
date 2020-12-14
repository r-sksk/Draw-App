import { MutationTree } from 'vuex';
import { RootState } from '@/stores/types';

// ストアの状態変更（同期処理）のみ
export const mutations: MutationTree<RootState> = {
    log: (state) => {
        state.test.testVar1 = 'hello world'

        console.log(state.test.testVar1);
    },
}
