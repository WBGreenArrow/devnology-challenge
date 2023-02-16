type userLoginReponse = {
  user_id: string
  token: string
}

function saveTokenToLocalStorage(userAuthData: userLoginReponse) {
  localStorage.setItem('userData', JSON.stringify(userAuthData))
}

function getTokenFromLocalStorage(): userLoginReponse | undefined {
  const userAuthData = localStorage.getItem('userData')
  if (userAuthData) {
    return JSON.parse(userAuthData)
  }
}

function removeTokenFromLocalStorage(): void {
  const userAuthData = getTokenFromLocalStorage()
  if (userAuthData) {
    localStorage.removeItem('userData')
  }
}

export { saveTokenToLocalStorage, getTokenFromLocalStorage, removeTokenFromLocalStorage }
