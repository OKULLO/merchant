import { useSelector } from 'react-redux'

export function GetMe() {
  const { user } = useSelector((state) => state.auth)

  return user
}
