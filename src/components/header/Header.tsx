import React, { useContext } from 'react'
import { AppBar, IconButton, Stack, Toolbar, Typography, useTheme } from '@mui/material'
import BuildIcon from '@mui/icons-material/Build'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useNavigate } from 'react-router-dom'
import { AccountCircle } from '@mui/icons-material'
import { ThemeSwitchContext } from '../../theme/theme'
import { useAppDispatch } from '../../redux/store'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'

export const Header = () => {
    const themeMaterial = useTheme()
    const dispatch = useAppDispatch()
    const { toggleColorMode } = useContext(ThemeSwitchContext)
    const navigate = useNavigate()
    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <Stack direction={`row`} spacing={3} alignItems={`center`}>
                    <IconButton size="large" color="inherit" onClick={() => navigate('/pokemon')}>
                        <CatchingPokemonIcon />
                    </IconButton>
                    <Typography variant={'h6'} component={'div'}>
                        Hello appbar
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={() => navigate('/')}
                    >
                        <FormatListBulletedIcon />
                    </IconButton>
                </Stack>
                {themeMaterial.palette.mode} mode
                <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                    {themeMaterial.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
