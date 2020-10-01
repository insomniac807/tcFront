import Vue from 'vue';
import Vuex from 'vuex';
import webcams from './modules/webcams';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        webcams
    }
});