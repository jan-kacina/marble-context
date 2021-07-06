import { webSocketListener, WsMiddlewareEffect } from '@marblejs/websockets'
import { tap } from 'rxjs/operators'
import { hello$ } from './test/test.effect'

export const logger$: WsMiddlewareEffect = (event$) => event$.pipe(
  tap((e) => console.log(`${JSON.stringify(e)}`)),
)

const effects = [
  hello$,
  // effect1$,
  // effect2$,
  // ...
]

const middlewares = [
  logger$,
  //   middleware1$,
  //   middleware2$,
  //   // ...
]

// export const listener = webSocketListener({ effects, middlewares });

const listener = webSocketListener({ effects, middlewares })

export { listener }
