import { HttpStatus, r } from '@marblejs/core'
import { mapTo, tap } from 'rxjs/operators'
import { loginUser } from '../../streams/login-status'

const login$ = r.pipe(
  r.matchPath('/login'),
  r.matchType('GET'),
  r.useEffect((req$) => req$.pipe(
    tap(() => loginUser()),
    mapTo({ status: HttpStatus.ACCEPTED }),
  )),
)

export { login$ }
