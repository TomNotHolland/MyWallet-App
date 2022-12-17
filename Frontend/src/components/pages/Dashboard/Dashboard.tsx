import PageWrapper from '../../PageWrapper'
import ContentHeader from '../../ContentHeader'
import { createElement, useEffect } from 'react'
import { Bank, CreditCard, Scales } from 'phosphor-react'
import { fetchDashboard } from './DashboardSlice'
import { useAppDispatch, useAppSelector } from '../../../main/app/Hooks'

const Dashboard = () => {
  const State = useAppSelector((state) => state.dashboard.summary)
  const { credit, debt } = State

  const Dispatch = useAppDispatch()
  const BackendURL = 'http://localhost:3000/api'

  useEffect(() => {
    Dispatch(fetchDashboard(`${BackendURL}/billingcycle/summary`))
  }, [Dispatch])

  const iconStyle = 'text-zinc-800 opacity-20 self-center group-hover:scale-125 duration-200 mr-3'
  const iconSize = 120
  const SummaryInfo = [{
    Title: 'Total Credits',
    BgColour: 'bg-green-600',
    Balance: credit,
    Icon: createElement(Bank, { size: iconSize, weight: 'fill', className: iconStyle })
  },
  {
    Title: 'Total Debits',
    BgColour: 'bg-red-600',
    Balance: debt,
    Icon: createElement(CreditCard, { size: iconSize, weight: 'fill', className: iconStyle })
  },
  {
    Title: 'Total Consolidated',
    BgColour: 'bg-sky-600',
    Balance: credit - debt,
    Icon: createElement(Scales, { size: iconSize, weight: 'fill', className: iconStyle })
  }
  ]

  return (
    <PageWrapper>
      <ContentHeader title="Dashboard" subtitle="v1.0" />
      <section className="flex mt-5 w-full h-full">
        <div className="flex items-start justify-start w-full h-full
              mobile:flex-col mobile:justify-start mobile:items-center mobile:gap-y-2 
              tablet:flex-col tablet:gap-y-2 tablet:justify-start tablet:items-center">
          {SummaryInfo?.map(({ Title, BgColour, Balance, Icon }, index) => (
            <div key={index} className={`group group-hover:ease-in drop-shadow-md rounded flex justify-between 
            text-white h-36 w-full laptop:mx-2 lg-laptop:mx-2 desktop:mx-2 p-3 ${BgColour}
              mobile:w-[95%] tablet:w-[95%] laptop:m-1.5`}>
              <div className="flex flex-col items-start mt-3">
                <span className="text-4xl font-semibold">R$ {Balance}</span>
                <span className="mt-4 text-base">{Title}</span>
              </div>
              {Icon}
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}

export default Dashboard
