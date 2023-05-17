export const convertTime = (time: string) => {
    return new Date(time).toLocaleString('en-GB')
}
