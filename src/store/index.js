import { createStore, createLogger } from 'vuex'
import players from "@/store/module/players"
import game from "@/store/module/game"

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        players,
        game
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
