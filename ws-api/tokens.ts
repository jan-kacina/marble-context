import { createContextToken } from '@marblejs/core'
import { WebSocketServerConnection } from '@marblejs/websockets'

const WebSocketServerToken = createContextToken<WebSocketServerConnection>('WebSocketServer')

export { WebSocketServerToken }
