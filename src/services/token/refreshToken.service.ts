import { requestsAuth } from '../apiAuth'
import { CookieService } from '../cookies/cookie.service'
import { NameToken } from './enum/tokenType.enum'
import { AuthTokenList } from './interface/token.interface'

export const RefreshTokenService = {
    updateToken: async (refreshToken: string) => {
        const response: AuthTokenList = await requestsAuth.post('auth/refresh', { token: refreshToken })
        CookieService.setToken({
            name: NameToken.ACCESS_TOKEN,
            hash: response.access_token,
            // expiration: response.accessTokenExpiration,
        })
        CookieService.setToken({
            name: NameToken.REFRESH_TOKEN,
            hash: response.refresh_token,
            // expiration: response.refreshTokenExpiration,
        })
    },
}
