import { useState } from "react"

export const useCounter = () => {
  const [count, setCount] = useState(0)

  const increaseCounter = () => setCount((prevVal) => prevVal + 1)

  return { increaseCounter, count }
}
