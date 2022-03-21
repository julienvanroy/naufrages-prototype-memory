const state = () => ({
    players: [
        {
            name: 'Juju',
            color: 'red'
        }, {
            name: 'Mama',
            color: 'blue'
        }, {
            name: 'Mogo',
            color: 'yellow'
        },
        {
            name: 'Vivi',
            color: 'green'
        },
        {
            name: 'Titi',
            color: 'orange'
        },
    ],
    roundPlayer: 0,
})

// getters
const getters = {
    playersLength(state) {
        return state.players.length
    },
    currentPlayer(state) {
        return state.players[state.roundPlayer]
    },
    currentPlayerName(state) {
        return state.players[state.roundPlayer].name
    },
    currentPlayerColor(state) {
        return state.players[state.roundPlayer].color
    }
}

// actions
const actions = {
}

// mutations
const mutations = {
    setPlayers(state, payload) {
        state.players = payload
    },
    addPlayer(state, {name, color}) {
        state.players.push({
            name: name,
            color: color
        })
    },
    removePlayer(state, index) {
        state.players.splice(index, 1);
    },
    setRoundPlayer(state, value) {
        state.roundPlayer = value
    },
    incrementRoundPlayer(state) {
        if (++state.roundPlayer >= state.players.length) state.roundPlayer = 0
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
