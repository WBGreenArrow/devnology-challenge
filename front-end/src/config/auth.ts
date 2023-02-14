export function saveTokenToLocalStorage(token: string) {
  localStorage.setItem('token', JSON.stringify(token))
}

export function getTokenFromLocalStorage() {
  const tokenUser = localStorage.getItem('token')
  if (tokenUser) {
    return JSON.parse(tokenUser)
  }
}
