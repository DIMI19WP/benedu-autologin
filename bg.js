const passwordInput = document.getElementById('loginPW')
const loginButton = document.querySelector('[data-role="login"]')
if (
  // 1. 패스워드가 저장되지 않았을경우
  !localStorage.password ||
  // 2. 에러메시지가 났을경우
  document.querySelector("body > section > div.wrap > div.container.right > form > div > div:nth-child(4) > span").innerText
)
  loginButton.addEventListener('click', () => localStorage.setItem('password', passwordInput.value))
else {
  passwordInput.value = localStorage.password
  loginButton.click()
}