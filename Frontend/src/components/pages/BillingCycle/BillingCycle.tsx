import { createElement, useEffect } from 'react'
import PageWrapper from '../../PageWrapper'
import ContentHeader from '../../ContentHeader'
import { ListChecks, Plus, Swap, Trash } from 'phosphor-react'
import { Tab } from '@headlessui/react'
import { useAppDispatch } from '../../../main/app/Hooks'
import { selectTab } from './TabSlice'
import List from './BillingCycleList'
import Form from './BillingCycleForm'

export const BillingCycle = () => {
  const Dispatch = useAppDispatch()

  useEffect(() => {
    Dispatch(selectTab('list'))
  }, [Dispatch])

  const navigation = {
    tabs: [
      {
        id: 'list',
        name: 'List',
        hoverColour: 'hover:text-neutral-900',
        borderColour: 'border-neutral-600',
        textColour: 'text-neutral-900',
        bgColour: 'bg-neutral-900/30',
        borderStyle: 'rounded-tl-lg',
        icon: createElement(ListChecks, { size: 24 }),
        content: [{
          data: <List />
        }]
      },
      {
        id: 'include',
        name: 'Include',
        hoverColour: 'hover:text-green-700',
        borderColour: 'border-green-700',
        textColour: 'text-green-700',
        bgColour: 'bg-green-700/30',
        icon: createElement(Plus, { size: 24 }),
        content: [{
          data: <Form />
        }]
      },
      {
        id: 'modify',
        name: 'Modify',
        hoverColour: 'hover:text-yellow-700',
        borderColour: 'border-yellow-700',
        textColour: 'text-yellow-700',
        bgColour: 'bg-yellow-700/30',
        icon: createElement(Swap, { size: 24 }),
        content: [{
          data: <></>
        }]
      },
      {
        id: 'delete',
        name: 'Delete',
        hoverColour: 'hover:text-red-700',
        borderColour: 'border-red-700',
        textColour: 'text-red-700',
        bgColour: 'bg-red-700/30',
        borderStyle: 'rounded-tr-lg',
        icon: createElement(Trash, { size: 24 }),
        content: [
          {
            data: <></>
          }
        ]
      }
    ]
  }

  return (
    <PageWrapper>
      <ContentHeader title='Billing Cycle' subtitle='Registration' />
      <Tab.Group>
        <div className='flex bg-white h-[88.1%] mx-3 my-4 rounded-lg drop-shadow-lg'>
          <Tab.List className='flex items-center justify-start h-12 border-b-[1px] w-full'>
            {navigation.tabs.map(({ id, borderStyle, bgColour, hoverColour, borderColour, textColour, icon, name }) => (
              <Tab key={id} onClick={() => Dispatch(selectTab(id))} className={`outline-none text-gray-700 ease-out duration-200 hover:${borderColour} ${hoverColour}`}>
                {({ selected }) => (
                  <a className={`flex items-center ${borderStyle} hover:${bgColour}
                    opacity-100 justify-center px-2 gap-x-1.5 h-12 ${bgColour} mobile:px-4
                    ${selected ? `border-b-2 ${borderColour} ${textColour}` : 'border-transparent opacity-[85%] border-b-2 transition-colors ease-out'}`} >
                    {icon}
                    <div className='mx-1 mobile:hidden overflow-hidden'>
                      {name}
                    </div>
                  </a>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {/* 🇬🇧/🇺🇸 Mapping object sub-array inside of objects array */}
            {/* 🇧🇷/🇵🇹 Mapeamento de sub-array de objetos dentro de um array de objetos  */}
            {navigation.tabs.map(({ id, content }) => content?.map((item) => (
              <Tab.Panel key={id} className='flex absolute inset-x-1 mx-1 h-[92%] inset-y-14'>
                {item.data}
              </Tab.Panel>
            )))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </PageWrapper>
  )
}

export default BillingCycle