
import './Panel.scss';
import { ReactComponent as Close } from '../../../assets/close.svg';
import { ReactComponent as Separator } from '../../../assets/separator.svg';
import { ReactComponent as Breadcrumb } from '../../../assets/breadcrumb.svg';
import { ReactComponent as ArrowRight } from '../../../assets/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/arrow-left.svg';
import { Link } from "react-router-dom";



const Panel = ({ currentBoard, updateCurrentBoard, currentIndex,numberOfBoards }) => {
    return (
        <nav className='d-flex align-items-center w-100'>
            <div className='panel-artboard-left d-flex align-items-center'>

            <Link to="/">
                <Close className='mx-3'/>
            </Link>
            <Separator />
            <ArrowLeft onClick={()=>updateCurrentBoard("left")} className='ms-3 me-2' />
            <div>{currentIndex}</div>
            <Breadcrumb className='mx-1'/>
            <div>{numberOfBoards}</div>
            <ArrowRight onClick={()=>updateCurrentBoard("right")} className='mx-2' />
                
            </div>
            <div className='position-fixed w-100 text-center'>{currentBoard?.name}</div>
       </nav>
    );

}
export default Panel;