import { Form, Field } from 'react-final-form'
import { createdValues } from './BillingCycleSlice'
import { useEffect } from 'react'

const BillingCycleForm = () => {
  useEffect(() => {
    createdValues
  }, [])

  return (
    <Form onSubmit={createdValues} initialValues={{}} render={({ handleSubmit, form }) => (
      <form role='form' onSubmit={event => {
        handleSubmit(event)?.then(() => form.reset())
      }}>
        <div className='flex gap-x-1.5 mb-2'>
          <label className='flex flex-col'>
            Name
            <Field placeholder='Insert name' className='pl-2 border rounded border-zinc-300' name='name' component='input' />
          </label>
          <label className='flex flex-col'>
            Month
            <Field placeholder='Insert month' className='pl-2 border rounded border-zinc-300' name='month' component='input' />
          </label>
          <label className='flex flex-col'>
            Year
            <Field placeholder='Insert year' className='pl-2 border rounded border-zinc-300' name='year' component='input' />
          </label>
        </div>
        <div>
          <button type='submit'
            className='flex justify-center items-center bg-sky-600 p-1 rounded text-white hover:bg-sky-800 duration-200'>
            Submit
          </button>
        </div>
      </form>
    )} />
  )
}

export default BillingCycleForm