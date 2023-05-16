import React, { FC } from 'react'
import { TodoType } from '../../../components/shared/types'
import { Button, Card, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { useAppDispatch } from '../../../redux/store'
import { TodoActionCreators } from '../../../redux/reducers/todo/actions/actions'
import { MyCard } from '../../../components/shared/MyCard'

export type TodoItemProps = {
    todo: TodoType
}

const useStyles = makeStyles(() =>
    createStyles({
        root: { width: '30%', marginBottom: 10, display: 'flex', justifyContent: 'space-between' },
    }),
)

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    const styles = useStyles()
    const dispatch = useAppDispatch()

    const { name, description, time } = todo

    const handleDeleteTodo = () => {
        dispatch(TodoActionCreators.deleteTodo(time))
    }
    return (
        <Card className={styles.root}>
            <MyCard name={name} description={description} time={time} />
            <Button variant="contained" color="error" onClick={handleDeleteTodo}>
                Delete
            </Button>
        </Card>
    )
}
