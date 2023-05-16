import { Box, Button } from '@mui/material'
import { MyInput } from '../../components/shared/MyInput'
import { useState } from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import { TodoType } from '../../components/shared/types'
import { useAppDispatch } from '../../redux/store'
import { TodoActionCreators } from '../../redux/reducers/todo/actions/actions'

const useStyles = makeStyles(() =>
    createStyles({
        root: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10%', width: '100%' },
        input: { marginRight: 5 },
    }),
)

export const Form = () => {
    const styles = useStyles()
    const dispatch = useAppDispatch()

    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [time, setTime] = useState<string>('')

    const handleCreateToDo = () => {
        if (!name || !time) return

        const newTodo: TodoType = {
            name,
            description,
            time,
        }
        dispatch(TodoActionCreators.addTodo(newTodo))

        setName('')
        setDescription('')
        setTime('')
    }

    return (
        <Box className={styles.root}>
            <MyInput required className={styles.input} label="Name" helperText="" value={name} onChange={setName} />
            <MyInput
                className={styles.input}
                label="Description"
                helperText=""
                value={description}
                onChange={setDescription}
            />
            <MyInput
                required
                className={styles.input}
                helperText=""
                value={time}
                onChange={setTime}
                type="datetime-local"
            />
            <Button variant="contained" color="primary" onClick={handleCreateToDo}>
                Add
            </Button>
        </Box>
    )
}
