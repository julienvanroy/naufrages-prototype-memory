const state = () => ({
    players: [
        {
            avatar: 6,
            name: 'Juju',
            color: 'red',
            cardsFind: 0,
            cardsToFind: 0
        }, {
            avatar: 1,
            name: 'Mama',
            color: 'blue',
            cardsFind: 0,
            cardsToFind: 0
        }, {
            avatar: 0,
            name: 'Mogo',
            color: 'yellow',
            cardsFind: 0,
            cardsToFind: 0
        },
        {
            avatar: 2,
            name: 'Vivi',
            color: 'green',
            cardsFind: 0,
            cardsToFind: 0
        },
        {
            avatar: 5,
            name: 'Titi',
            color: 'orange',
            cardsFind: 0,
            cardsToFind: 0
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
    startGame({state, commit}, cardsToFind) {
        state.players.map(player => commit('setPlayerCardsToFind', {player, cardsToFind}))
        commit('setPlayers', state.players)
        commit('setRoundPlayer', 0)
    },
    nextRound({commit, getters}) {
        commit('setPlayerCardsFind', {player: getters.currentPlayer, cardsFind: 0})
        commit('incrementRoundPlayer')
    }
}

// mutations
const mutations = {
    setPlayers(state, payload) {
        state.players = payload
    },
    addPlayer(state, payload) {
        state.players.push({
            avatar: payload.avatar,
            name: payload.name,
            color: payload.color
        })
    },
    removePlayer(state, index) {
        state.players.splice(index, 1);
    },
    setPlayerAvatar(state, {indexPlayer, avatar}) {
        state.players[indexPlayer].avatar = avatar
    },
    incrementPlayerCardsFind(state) {
        state.players[state.roundPlayer].cardsFind++
    },
    incrementPlayerCardsToFind(state) {
        state.players[state.roundPlayer].cardsToFind++
    },
    setPlayerCardsFind(state, {player, cardsFind}) {
        player.cardsFind = cardsFind
    },
    setPlayerCardsToFind(state, {player, cardsToFind}) {
        player.cardsToFind = cardsToFind
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
