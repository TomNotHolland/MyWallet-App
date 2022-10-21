import { useMenu } from '../hooks/MenuHook'
import { CaretDown, ProjectorScreenChart } from 'phosphor-react';
import { ReactNode } from 'react';

interface AccordionProperties {
  children: ReactNode
}

const Accordion = ({children}: AccordionProperties) => {
  const { openMenu, setOpenMenu } = useMenu()

  return (
    <div className="flex flex-col text-white mx-1">
      <button className={`flex hover:bg-yellow-500 hover:text-zinc-900 duration-300 rounded overflow-hidden
        ${!openMenu ? 'justify-around items-center py-1 border-l-[3px] border-yellow-500 text-lg'
        : 'mx-3 p-1 self-center border-yellow-500 w-[70%]'}`} >

        <ProjectorScreenChart size={28} weight="fill" className={`${!openMenu ? '' : 'min-w-full'}`} />

        <span className={`duration-500
        ${openMenu && 'overflow-hidden translate-x-96'}`}>
          Dashboard
        </span>

        <CaretDown size={20} className={`duration 500
          ${!openMenu ? 'ml-5' : 'invisible overflow-hidden translate-x-96'}`} />
      </button>
      {children}
    </div>
  )
}

export default Accordion