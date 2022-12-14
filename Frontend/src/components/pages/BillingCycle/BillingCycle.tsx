import { createElement, useState } from 'react';
import PageWrapper from '../../PageWrapper'
import ContentHeader from '../../ContentHeader';
import { ListChecks, Plus, Swap, Trash } from 'phosphor-react';
import { Tab } from '@headlessui/react';

export const BillingCycle = () => {
  const [OpenTab, SetOpenTab] = useState(false)

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
          name: 'List'
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
          name: 'Include'
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
          name: 'Modify'
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
            name: 'Delete'
          }
        ]
      }
    ]
  }

  return (
    <PageWrapper>
      <ContentHeader title='Billing Cycle' subtitle='Registration' />
      <Tab.Group>
        <div className='flex bg-white h-[88%] mx-3 my-4 rounded-lg drop-shadow-lg'>
          <Tab.List className='flex items-center justify-start h-12 border-b-[1px] w-full drop-shadow-sm'>
            {navigation.tabs.map((tab) => (
              <Tab key={tab.id} className={`outline-none text-gray-700 ease-out duration-200 hover:${tab.borderColour} ${tab.hoverColour}`}>
                {({ selected }) => (
                  <a className={`flex items-center ${tab?.borderStyle} hover:${tab.bgColour}
                    opacity-100 justify-center px-2 gap-x-1.5 h-12 ${tab.bgColour} mobile:px-4
                    ${selected ? `border-b-2 ${tab.borderColour} ${tab.textColour}` : 'border-transparent opacity-[85%] border-b-2 transition-colors ease-out'}`} >
                    {tab.icon}
                    <div className='mx-1 mobile:hidden overflow-hidden'>
                      {tab.name}
                    </div>
                  </a>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {navigation.tabs.map(({ content, id }) => content.map(({ name }) => (
              <Tab.Panel key={id} className='absolute inset-x-0 inset-y-12 mx-2 mt-3 text-4xl'>
                {name}
              </Tab.Panel>
            )))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </PageWrapper>
  )
}

export default BillingCycle