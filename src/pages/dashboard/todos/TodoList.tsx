import React from 'react'
import { TodoItem } from './TodoItem'
import { createStyles, makeStyles } from '@mui/styles'
import { todoStateSelector } from '../../../redux/reducers/todo/todoReducer'
import { useAppSelector } from '../../../redux/store'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 10,
        },
    }),
)

export const TodoList = () => {
    const styles = useStyles()

    const { todos } = useAppSelector(todoStateSelector)

    return (
        <div className={styles.root}>
            {todos.length !== 0 ? todos?.map((todo) => <TodoItem todo={todo} key={todo.id} />) : 'no todos'}
        </div>
    )
}
