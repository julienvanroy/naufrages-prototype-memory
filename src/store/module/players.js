const state = () => ({
    players: [
        {
            name: 'Joueur 1',
            color: 'red'
        }, {
            name: 'Joueur 2',
            color: 'blue'
        }, {
            name: 'Joueur 3',
            color: 'yellow'
        },
        {
            name: 'Joueur 4',
            color: 'green'
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
        this.items.splice(index, 1);
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
