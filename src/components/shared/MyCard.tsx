import * as React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { TodoType } from './types'
import { convertTime } from '../../services/utils/convertTime'

export type MyCardProps = {
    image?: string
    name: string
} & Partial<TodoType>

export const MyCard: React.FC<MyCardProps> = ({ name, description, time, image }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <img src={image} alt="" />
            <div>
                <Typography>Name: {name}</Typography>
                {description && <Typography>Description: {description}</Typography>}
                {time && <Typography>Time: {convertTime(time)}</Typography>}
            </div>
        </Card>
    )
}
