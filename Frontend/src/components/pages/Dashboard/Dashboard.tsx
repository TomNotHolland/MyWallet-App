import { Component, createElement } from "react"
import { Bank, CreditCard, Scales } from "phosphor-react"
import ContentHeader from "../../ContentHeader"
import { connect } from "react-redux"
import { AnyAction, bindActionCreators, Dispatch } from "redux"
import { GetSummary } from './Action';

interface ReduxTypes {
  summary: {
    credit: number
    debt: number
  }
  GetSummary: () => void
}

class Dashboard extends Component<ReduxTypes> {
  componentDidMount(): void {
    this.props.GetSummary()
  }
  render() {
    const { credit, debt } = this.props.summary
    const iconSize = 100
    const DynamicInfo = [{
      Title: 'Total Credits',
      BgColour: 'bg-green-600',
      Balance: credit,
      Icon: createElement(Bank, { size: iconSize, weight: 'fill', className: 'text-zinc-800 opacity-30 self-center' })
    },
    {
      Title: 'Total Debits',
      BgColour: 'bg-red-600',
      Balance: debt,
      Icon: createElement(CreditCard, { size: iconSize, weight: 'fill', className: 'text-zinc-800 opacity-30 self-center' })
    },
    {
      Title: 'Total Consolidated',
      BgColour: 'bg-sky-600',
      Balance: credit - debt,
      Icon: createElement(Scales, { size: iconSize, weight: 'fill', className: 'text-zinc-800 opacity-30 self-center' })
    }
    ]

    return (
      <div className="w-full h-full select-none">
        <ContentHeader title="Dashboard" subtitle="v1.1" />
        <section className="flex mt-6 w-full h-full">
          <div className="flex items-start justify-start w-full h-full
            mobile:flex-col mobile:justify-start mobile:items-center mobile:gap-y-2 tablet:flex-col tablet:gap-y-2 tablet:justify-start tablet:items-center">
            {DynamicInfo?.map(({ Title, BgColour, Balance, Icon }, index) => (
              <div key={index} className={`flex justify-between text-white h-36 w-full laptop:mx-2 lg-laptop:mx-2 desktop:mx-2 p-3 ${BgColour}
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
      </div>
    )
  }
}

const mapStateToProps = (state: { dashboard: { summary: {credit: number, debt: number} } }) => ({ summary: state.dashboard.summary })
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({GetSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)