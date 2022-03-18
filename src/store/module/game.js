import {shuffle, switchInArray} from "@/utils";

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
    cards: [],
    canReveal: false,
    canSwitch: false,
    indexCardWantToSwitch: null,
    isGameOver: false,
    numberCardReveal: 0,
    rotationAngle: 0
})

// getters
const getters = {
    gameHasStarted (state) {
        return state.cards.length !== 0
    },
    currentPlayer(state) {
        return state.players[state.roundPlayer]
    }
}

// actions
const actions = {
    generateGame({ dispatch, commit, state }) {
        const length = state.players.length

        // push neutral cards

        dispatch('pushCards', {number: length, color: 'grey'})

        // push player cards
        state.players.map(player => {
            dispatch('pushCards', {number: length, color: player.color})
        })

        commit('startGame')
    },
    pushCards({ commit }, {number, color}) {
        for (let i = 0; i < number; i++) {
            commit('pushCard', {color: color});
        }
    },
    revealCard({commit, dispatch}, {card}) {
        dispatch('checkCard', {card: card})
        commit('setCardIsReveal', {card: card, value: true})
        commit('setCardHasReveal', {card: card, value: true})
    },
    checkCard({commit, dispatch, getters}, {card}) {
        if(card.color === getters.currentPlayer.color) {
            commit('incrementNumberCardReveal')
            dispatch('checkGameOver')
        } else {
            dispatch('checkCardHasReveal', {card: card})
            commit("roundIsOver")
        }
    },
    switchCard({state, commit}, {indexCard}) {
        if(state.indexCardWantToSwitch !== null) {
            if(state.indexCardWantToSwitch !== indexCard) {
                commit("switchCard", {indexA: state.indexCardWantToSwitch, indexB: indexCard})
                commit("setIndexCardWantToSwitch", indexCard)
                commit("roundIsOver")
            } else commit("setIndexCardWantToSwitch", null)
        } else {
            commit("setIndexCardWantToSwitch", indexCard)
        }
    },
    clickCard({state, dispatch}, {card, indexCard}) {
        if (!card.isReveal && state.canReveal) {
            dispatch('revealCard', {card: card})
        } else if(state.canSwitch) {
            dispatch('switchCard', {indexCard: indexCard})
        }
    },
    checkCardHasReveal({getters, commit}, {card}) {
        if(card.hasReveal) {
            if(card.color === 'grey') {
                console.log('coucou')
                const changeColor = () =>  {commit('setCardColor', {card: card, value: getters.currentPlayer.color})}
                setTimeout(changeColor, 1000)
            }
        }
    },
    checkGameOver({state, commit}) {
        if(state.numberCardReveal >= state.players.length) {
            commit('gameOver')
        }
    },
}

// mutations
const mutations = {
    pushCard(state, {color, isReveal= false, hasReveal = false}) {
        const card = {
            color: color,
            isReveal: isReveal,
            hasReveal: hasReveal
        }
        state.cards.push(card)
    },
    startGame(state) {
        shuffle(state.cards)
        state.roundPlayer = 0
        state.canReveal = true
    },
    rotationGame(state) {
        state.rotationAngle += 90
    },
    setCanReveal(state, value) {
        state.canReveal = value
    },
    setCanSwitch(state, value) {
        state.canSwitch = value
    },
    roundIsOver(state) {
        state.canReveal = false
        state.canSwitch = false
    },
    nextRound(state) {
        // Reset reveal cards
        state.cards.map(card => card.isReveal = false)

        // Next Player
        if (++state.roundPlayer >= state.players.length) state.roundPlayer = 0

        state.canReveal = true
        state.canSwitch = false
        state.indexCardWantToSwitch = null
        state.numberCardReveal = 0
    },
    switchCard(state, {indexA, indexB}) {
        switchInArray(state.cards, indexA, indexB)
    },
    setCardIsReveal(state, {card, value}) {
        card.isReveal = value
    },
    setCardHasReveal(state, {card, value}) {
        card.hasReveal = value
    },
    setCardColor(state, {card, value}) {
        card.color = value
    },
    incrementNumberCardReveal(state) {
        state.numberCardReveal++
    },
    setIndexCardWantToSwitch(state, value) {
        state.indexCardWantToSwitch = value
    },
    gameOver(state) {
        state.isGameOver = true
        state.canReveal = false
    },
    resetGame(state) {
        state.cards = []
        state.roundPlayer = 0
        state.canReveal = false
        state.canSwitch = false
        state.isGameOver =  false
        state.numberCardReveal = 0
        state.indexCardWantToSwitch = null
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
