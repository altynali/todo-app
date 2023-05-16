import Cookies from 'js-cookie'
import { Token } from '../token/interface/token.interface'
import { NameToken } from '../token/enum/tokenType.enum'

export const CookieService = {
    setToken: ({ name, hash }: Token): void => {
        Cookies.set(name, `${hash}`)
    },
    getAccessToken: (): Token => {
        return Cookies.get(NameToken.ACCESS_TOKEN)
    },
    getRefreshToken: (): string => {
        return Cookies.get(NameToken.REFRESH_TOKEN)
    },
    removeAccessToken: (): void => {
        return Cookies.remove(NameToken.ACCESS_TOKEN)
    },
    removeRefreshToken: (): void => {
        return Cookies.remove(NameToken.REFRESH_TOKEN)
    },
}
