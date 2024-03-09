import {createStore, createLogger} from 'vuex';
import counterModule from './modules/counter'
import mutations from "@/store/modules/mutations";
import actions from "@/store/modules/actions";

export default createStore({
    plugins: [createLogger()],
    modules: {
        count: counterModule
    },
    state(){
        return{
            globalStateHeader: 'Global header in main module'
        }
    },
    /*
    Либо писать без ... при помощи : (не спредить внутрь обьекта, а сразу
    передавать обьект в свойство (если таких 1))
    */
    mutations: {
        ...mutations
    },
    actions: {
        ...actions
    },
    getters: {
        upHeader(state){
            return state.globalStateHeader.toUpperCase();
        }
    }
})