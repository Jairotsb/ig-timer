import { useContext, useEffect, useState } from 'react'
import { CountDownContainer, Separator } from './syles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../..'

/**
 * prop Drilling -> Quando temos muitas propriedades Apenas para comunicação entre componentes
 * Context Api -> permite compartilharmos informações entre vários componentes ao mesmo tempo
 */

export default function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleHasFinished } =
    useContext(CyclesContext)
  const [amountsSecondsPassed, setAmountSecondsPassed] = useState(0)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )
        if (secondsDifference >= totalSeconds) {
          markCurrentCycleHasFinished()

          setAmountSecondsPassed(totalSeconds)

          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 100)
    }
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleHasFinished])

  const currentSeconds = activeCycle ? totalSeconds - amountsSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)

  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])
  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  )
}
