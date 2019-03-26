export const setUser = user => ({
  type: 'SET_USER',
  payload: user,
})

export const cleanUser = () => ({
  type: 'CLEAN_USER',
  payload: null,
})