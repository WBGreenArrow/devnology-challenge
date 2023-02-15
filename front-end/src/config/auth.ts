function saveTokenToLocalStorage(token: string) {
  localStorage.setItem('token', JSON.stringify(token))
}

function getTokenFromLocalStorage() {
  const tokenUser = localStorage.getItem('token')
  if (tokenUser) {
    return JSON.parse(tokenUser)
  }
}

function removeTokenFromLocalStorage() {
  localStorage.removeItem('token')
}

export { saveTokenToLocalStorage, getTokenFromLocalStorage, removeTokenFromLocalStorage }
