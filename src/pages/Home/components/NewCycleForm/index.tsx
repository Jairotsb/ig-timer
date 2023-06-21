import { zodResolver } from '@hookform/resolvers/zod'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useForm } from 'react-hook-form'
import { CyclesContext } from '../..'
import { useContext } from 'react'

export default function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        placeholder="Dê um nome para seu projeto."
        list="task-sugesstions"
        id="task"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 1" />
        <option value="Projeto 1" />
        <option value="Projeto 1" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
