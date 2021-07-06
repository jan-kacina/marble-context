import { httpListener } from '@marblejs/core'
import { logger$ } from '@marblejs/middleware-logger'
import { bodyParser$ } from '@marblejs/middleware-body'
import { root$ } from './effects'

const middlewares = [
  logger$(),
  bodyParser$(),
  // middleware3$
  // middleware4$
  // ...
]

const effects = [
  root$,
  // endpoint2$
  // endpoint3$
  // ...
]

const listener = () => httpListener({
  middlewares,
  effects,
})

export { listener }
