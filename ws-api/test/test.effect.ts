import { matchEvent } from '@marblejs/core'
import { WsEffect } from '@marblejs/websockets'
import { mapTo } from 'rxjs/operators'

export const hello$: WsEffect = (event$) => event$.pipe(
  matchEvent('HELLO'),
  mapTo({ type: 'HELLO', payload: 'Hello, world!' }),
)
