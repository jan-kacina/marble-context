import { BehaviorSubject } from 'rxjs'

const loginStatusSubject$ = new BehaviorSubject<boolean>(false)
const loginStatus$ = loginStatusSubject$.asObservable()

const loginUser = () => {
  loginStatusSubject$.next(true)
}
const logoutUser = () => {
  loginStatusSubject$.next(false)
}

export { loginUser, logoutUser, loginStatus$ }
