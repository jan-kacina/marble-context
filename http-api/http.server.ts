import { bindEagerlyTo, createServer } from '@marblejs/core'
import { WebSocketServerToken } from '../ws-api/tokens'
import { wsServer } from '../ws-api/ws.server'
import { listener } from './http.listener'

const httpServer = createServer({
  port: 1337,
  hostname: '127.0.0.1',
  listener: listener(),
  dependencies: [
    // eslint-disable-next-line @typescript-eslint/return-await
    bindEagerlyTo(WebSocketServerToken)(async () => await (await wsServer)()),
  ],
})

export { httpServer }
