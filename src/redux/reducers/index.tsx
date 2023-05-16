import todoReducer from './todo/todoReducer'
import pokemonReducer from './pokemon/pokemonReducer'
import appReducer from './app/appReducer'

export default {
    app: appReducer,
    todo: todoReducer,
    pokemon: pokemonReducer,
}
