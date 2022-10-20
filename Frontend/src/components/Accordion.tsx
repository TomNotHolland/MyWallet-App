import { useMenu } from '../hooks/MenuHook'
import { CaretDown, CurrencyCircleDollar, PresentationChart } from 'phosphor-react';

//TODO Alternativas para solução
//* 1. Não usar geração por array e criar todas as opções do menu lateral manualmente
//* 2. Solucionar os 9 erros no console

const Accordion = () => {
  const { openMenu, setOpenMenu } = useMenu()

  return (
    <div className="flex">
      <button className="flex flex-col justify-start cursor-pointer w-full text-md text-white mx-1">
        <div className={`
          ${!openMenu ? 'flex border-l-[3px] border-yellow-600 justify-between w-full p-1 rounded items-center duration-300 hover:text-zinc-900 hover:bg-yellow-600'
            : 'flex w-[65%] p-1 rounded items-center duration-300 ml-1.5 hover:text-zinc-900 hover:bg-yellow-600'}`}>
          <PresentationChart size={28} className="min-w-fit relative inset-x-0.5" />
          <span className={` text-lg mb-0.5 select-none
        ${openMenu ? 'opacity-0 overflow-hidden duration-500 translate-x-32' : 'duration-500'}`}>
            Dashboard
          </span>
          <CaretDown size={20} className={`${!openMenu ? 'ml-14 min-w-fit' : 'opacity-0 overflow-hidden'}`} />
        </div>

        <div className={`${!openMenu ? 'flex rounded-b bg-zinc-800 hover:bg-zinc-700 hover:text-white select-none translate-y-0 items-center justify-start'
            : 'overflow-hidden invisible'}`}>
          <CurrencyCircleDollar size={24} className="mx-3" />
          <span className="p-2">
            Ciclos de Pagamento
          </span>
        </div>
      </button>
    </div>
  )
}

export default Accordion