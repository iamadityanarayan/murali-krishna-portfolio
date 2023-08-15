import Icons from '../../assets/icons/Icons';
import './backtotop.scss';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0,0)
  }
  return (
    <div className='back-to-top d-flex justify-content-center gap-3 align-items-center' onClick={scrollToTop}>
      <h2 className="m-0">Back To Top</h2>
      <Icons icon='arrowUp' />
    </div>
  )
}

export default BackToTop