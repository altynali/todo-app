import { Route, Routes } from 'react-router-dom'
import { IRoute, routePublic } from './routes/routePublic'
import { routeDashboard } from './routes/routeDashboard'
import { CircularProgress, CssBaseline } from '@mui/material'
import { ThemeSettingProvider } from '../theme/theme'
import { Layout } from '../components/layout/Layout'
import { createEachPokemonRoute, routePokemon } from './routes/routePokemon'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { PokemonActionCreators } from '../redux/reducers/pokemon/actions/actions'
import { POKEMON_COUNT } from '../components/shared/types'
import { useEffect } from 'react'
import ErrorBoundary from '../components/errorBoundary'
import { appStateSelector } from '../redux/reducers/app/appReducer'
import { pokemonStateSelector } from '../redux/reducers/pokemon/pokemonReducer'
import { Loader } from '../components/loader/Loader'

const ReturnComponent = (Component: React.ComponentType) => {
    return <Component />
}

export const MainRouter = () => {
    const dispatch = useAppDispatch()
    const { isLoading } = useAppSelector(appStateSelector)
    const { pokemons } = useAppSelector(pokemonStateSelector)

    useEffect(() => {
        const fetchPokemons = () => {
            dispatch(PokemonActionCreators.fetchPokemons(`?limit=${POKEMON_COUNT}`))
        }
        fetchPokemons()
    }, [dispatch])

    const pokemonRoutes = createEachPokemonRoute(pokemons)

    const allRoutes: IRoute[] = [...routePublic, ...routeDashboard, ...routePokemon, ...pokemonRoutes]

    if (isLoading) {
        return <Loader />
    }

    return (
        <ErrorBoundary>
            <ThemeSettingProvider>
                <CssBaseline />
                <Layout>
                    <Routes>
                        {allRoutes.map((route: IRoute) => {
                            return <Route path={route.path} element={ReturnComponent(route.element)} key={route.path} />
                        })}
                    </Routes>
                </Layout>
            </ThemeSettingProvider>
        </ErrorBoundary>
    )
}
