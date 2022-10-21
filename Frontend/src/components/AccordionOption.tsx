import { CurrencyCircleDollar } from "phosphor-react"
import { useMenu } from '../hooks/MenuHook';

export const AccordionOption = () => {
  const {openMenu, setOpenMenu} = useMenu()

  return (
    <div className={`flex  py-1 px-5 rounded-b justify-between bg-zinc-800 hover:bg-zinc-700 cursor-pointer duration-300
    ${openMenu && 'invisible overflow-hidden' }`}>
      <CurrencyCircleDollar size={25} />
      <span>
        Ciclos de Pagamento
      </span>
    </div>
  )
}
