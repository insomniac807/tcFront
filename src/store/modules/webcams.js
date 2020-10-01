const state = {
    webcams: [{
        uid: 1
    }, {
        uid: 2
    }, {
        uid: 3
    }, {
        uid: 4
    }, {
        uid: 5
    }, {
        uid: 6
    }, {
        uid: 7
    }, {
        uid: 8
    }]
};

const getters = {
    allWebcams: (state) => state.webcams
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}