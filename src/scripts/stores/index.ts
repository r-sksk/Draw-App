import Vue from 'vue';
import Vuex from 'vuex';
import { state } from '@/stores/state';
import { mutations } from '@/stores/mutations';
import { actions } from '@/stores/actions';
import { getters } from '@/stores/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})
