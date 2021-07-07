import { lookup, ContextProvider } from '@marblejs/core'
import { IO } from 'fp-ts/lib/IO'
import { PropagateLoginStatus } from './actions/propagate-login-status'
import { httpServer } from './http-api/http.server'

let appContextProvider: ContextProvider

const main: IO<void> = async () => {
  const httpServerIo = await httpServer
  await httpServerIo()

  appContextProvider = lookup(httpServerIo.context)

  const propagateLoginStatus = new PropagateLoginStatus()
  propagateLoginStatus.run()
}

main()

export { appContextProvider }
