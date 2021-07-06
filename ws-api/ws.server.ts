import { bindEagerlyTo } from '@marblejs/core'
import { createWebSocketServer } from '@marblejs/websockets'
import { PropagateLoginStatus, PropagateLoginStatusToken } from '../actions/propagate-login-status'
import { listener } from './ws.listener'

const wsServer = createWebSocketServer({
  options: {
    port: 1338,
    host: '127.0.0.1',
  },
  listener,
  dependencies: [
    // bindEagerlyTo(PropagateLoginStatusToken)(() => PropagateLoginStatus),
  ],
})

export { wsServer }
