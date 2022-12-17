import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../main/app/Hooks'
import { getList } from './BillingCycleSlice'

const BillingCycleList = () => {
  const State = useAppSelector((state) => state.billingcycle)
  const { list } = State

  const Dispatch = useAppDispatch()
  const BackendURL = 'http://localhost:3000/api'

  useEffect(() => {
    Dispatch(getList(`${BackendURL}/billingcycle`))
  }, [Dispatch])

  function renderRows() {
    const List = list || []

    return List.map(({ name, month, year }, id) => (
      <tr key={id} className="flex justify-between pr-[14.4375rem] odd:bg-zinc-200 rounded mobile:pr-2">
        <td className='ml-1 mobile:ml-0 w-24 text-left'>{name}</td>
        <td className='mr-12 mobile:mr-6'>{month}</td>
        <td>{year}</td>
      </tr>
    ))
  }

  return (
    <div className="mb-4 w-full h-full">
      <table className="flex flex-col w-full">
        <thead>
          <tr className="flex h-10 pl-1 mobile:pl-0 items-center border-b-[1px] justify-between pr-[14.4375rem] text-base mobile:pr-2">
            <th>Name</th>
            <th className='mobile:ml-5'>Month</th>
            <th className='relative right-0.5'>Year</th>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-y-1 w-full ">
          {renderRows()}
        </tbody>
      </table>
    </div>
  )
}

export default BillingCycleList