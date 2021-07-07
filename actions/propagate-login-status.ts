import { createContextToken, createReader, useContext } from '@marblejs/core'
import { WebSocketServerToken } from '../ws-api/tokens'
import { loginStatus$ } from '../streams/login-status'
import { appContextProvider } from '..'

class PropagateLoginStatus {
  // eslint-disable-next-line class-methods-use-this
  run() {
    loginStatus$.subscribe((state) => {
      console.log(`Emission begin: ${state}`)
      useContext(WebSocketServerToken)(appContextProvider).clients.forEach(
        (client) => {
          console.log(`Context begin: ${client.protocol}`)
          client.send(`${state}`)
          console.log(`Context end: ${client.protocol}`)
        },
      )
      console.log(`Emission end: ${state}`)
    })
  }
}

const PropagateLoginStatusToken = createContextToken<PropagateLoginStatus>('PropagateLoginStatus')

export { PropagateLoginStatusToken, PropagateLoginStatus }
