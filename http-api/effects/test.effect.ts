import { HttpStatus, r, useContext } from '@marblejs/core'
import { of } from 'rxjs'
import { mapTo, switchMap, tap } from 'rxjs/operators'
import { WebSocketServerToken } from '../../ws-api/tokens'

const test$ = r.pipe(
  r.matchPath('/test'),
  r.matchType('GET'),
  r.useEffect((req$, ctx) => req$.pipe(
    switchMap(() => of(useContext(WebSocketServerToken)(ctx.ask))),
    tap((wsServer) => wsServer.sendBroadcastResponse({ type: 'test', payload: { a: 1 } })),
    tap((wsServer) => console.log(`Number of clients: ${wsServer.clients.size}`)),
    mapTo({ status: HttpStatus.ACCEPTED }),
  )),
)

export { test$ }
