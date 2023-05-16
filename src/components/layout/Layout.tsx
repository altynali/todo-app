import React, { FC, PropsWithChildren } from 'react'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { createStyles, makeStyles } from '@mui/styles'

export type LayoutProps = PropsWithChildren

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
    }),
)

export const Layout: FC<LayoutProps> = ({ children }) => {
    const styles = useStyles()

    return (
        <div className={styles.root}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
