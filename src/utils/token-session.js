import Cookies from 'js-cookie'

const Key = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(Key)
}

export function setToken(token, exprssDay) {
  return Cookies.set(Key, token)
}

export function removeToken() {
  return Cookies.remove(Key)
}
