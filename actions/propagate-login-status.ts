import { createContextToken, createReader, useContext } from '@marblejs/core'
import { WebSocketServerToken } from '../ws-api/tokens'
import { loginStatus$ } from '../streams/login-status'

class PropagateLoginStatus {
  // eslint-disable-next-line class-methods-use-this
  run() {
    loginStatus$.subscribe((state) => {
      console.log(`Emission begin: ${state}`)
      createReader(
        (ask) => useContext(WebSocketServerToken)(ask).clients.forEach(
          (client) => {
            console.log(`Context begin: ${client.protocol}`)
            client.send({ type: 'login-state', payload: state })
            console.log(`Context begin: ${client.protocol}`)
          },
        ),
      )
      console.log(`Emission end: ${state}`)
    })
  }
}

const PropagateLoginStatusToken = createContextToken<PropagateLoginStatus>('PropagateLoginStatus')

export { PropagateLoginStatusToken, PropagateLoginStatus }
