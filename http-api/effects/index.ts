import { combineRoutes } from '@marblejs/core'
import { login$ } from './login.effect'
import { logout$ } from './logout.effect'
import { test$ } from './test.effect'

const root$ = combineRoutes('/', [
  login$, logout$, test$,
])

export { root$ }
