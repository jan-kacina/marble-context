import { IO } from 'fp-ts/lib/IO'
import { PropagateLoginStatus } from './actions/propagate-login-status'
import { httpServer } from './http-api/http.server'

const main: IO<void> = async () => {
  await (await httpServer)()

  const propagateLoginStatus = new PropagateLoginStatus()
  propagateLoginStatus.run()
}

main()
