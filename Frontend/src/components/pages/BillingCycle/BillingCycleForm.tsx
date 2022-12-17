import { Form, Field } from 'react-final-form'
import { createValues } from './BillingCycleSlice'
import { useEffect } from 'react'

const BillingCycleForm = () => {

  useEffect(() => {
    createValues
  }, [])

  return (
    <Form onSubmit={createValues} component={({ handleSubmit }) => (
      <form role='form' onSubmit={handleSubmit}>
        <div className='flex gap-x-1.5 mb-2'>
          <Field className='border rounded border-zinc-300' name='name' component='input' />
          <Field className='border rounded border-zinc-300' name='month' component='input' />
          <Field className='border rounded border-zinc-300' name='year' component='input' />
        </div>
        <div>
          <button type='submit' className='flex justify-center items-center bg-sky-600 p-1 rounded text-white hover:bg-sky-800 duration-200'>Submit</button>
        </div>
      </form>
    )} />
  )
}

export default BillingCycleForm