
import './Panel.scss';
import { ReactComponent as Close } from '../../../assets/close.svg';
import { ReactComponent as Separator } from '../../../assets/separator.svg';
import { ReactComponent as Breadcrumb } from '../../../assets/breadcrumb.svg';
import { ReactComponent as ArrowRight } from '../../../assets/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/arrow-left.svg';
import { Link } from "react-router-dom";


const Panel = () => {
    return (
        <nav className='d-flex position-fixed w-100 align-items-center'>
            <Link to="/">
                <Close className='mx-3'/>
            </Link>
            <Separator />
            <ArrowLeft className='ms-3 me-2'/>
            <div>{"4"}</div>
            <Breadcrumb className='mx-1'/>
            <div>{"4" }</div>
            <ArrowRight className='mx-2' />
            {/* <Link to="/"> */}
                
            <div className='position-absolute w-100 text-center'>something</div>
             {/* </Link> */}
       </nav>
    );

}
export default Panel;