export const signIn = user => ({
  type: 'SIGN_IN',
  payload: user,
})

export const cleanUser = () => ({
  type: 'CLEAN_USER',
  payload: null,
})