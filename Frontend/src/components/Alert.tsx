import { ToastContainer, Flip } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'

const Alert = () => {
  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        limit={3}
        pauseOnFocusLoss={false}
        transition={Flip}
        draggable
        pauseOnHover={false}
        theme='colored' />
    </div>
  )
}

export default Alert