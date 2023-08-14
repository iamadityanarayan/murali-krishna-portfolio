import Icons from '../../assets/icons/Icons';
import './backtotop.scss';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0,0)
  }
  return (
    <div className='back-to-top d-flex justify-content-center gap-2 align-items-center' onClick={scrollToTop}>
      <p className="m-0 fw-bold">Back To Top</p>
      <Icons icon='arrowUp' />
    </div>
  )
}

export default BackToTop