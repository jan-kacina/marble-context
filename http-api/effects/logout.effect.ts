import { HttpStatus, r } from '@marblejs/core'
import { mapTo, tap } from 'rxjs/operators'
import { logoutUser } from '../../streams/login-status'

const logout$ = r.pipe(
  r.matchPath('/logout'),
  r.matchType('GET'),
  r.useEffect((req$) => req$.pipe(
    tap(() => logoutUser()),
    mapTo({ status: HttpStatus.ACCEPTED }),
  )),
)

export { logout$ }
