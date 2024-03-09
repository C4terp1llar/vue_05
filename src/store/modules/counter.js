export default {
    namespaced: true,
    state() {
        return {
            counter: 1
        }
    },
    mutations: {
        inc(state) {
            state.counter++;
        },
        varIncCounter(state, payload) {
            state.counter += payload.val;
        }
    },
    // для асинхрона:
    actions: {
        incCounterAsync({commit}, payload) {
            setTimeout(() => {
                commit({
                    type: 'varIncCounter',
                    val: payload.val
                })
            }, payload.delay)
        }
    },
    //
    getters: {
        counter(state) {
            // if (state.counter > 50){
            //   return SMTH
            // }
            return state.counter
        },
        doubleCounter(state, getters, rootState, rootGetters) {
            // console.log(state);
            // console.log(getters);
            //
            // //Для обращения к родительскому стейту / геттерам
            // console.log(rootState);
            // console.log(rootGetters);
            // //

            return getters.counter * 2;
        }
    }
}