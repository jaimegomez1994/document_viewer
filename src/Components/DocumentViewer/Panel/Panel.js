
import './Panel.scss';
import { ReactComponent as Logo } from '../../../assets/sketch-logo.svg';
import { ReactComponent as Separator } from '../../../assets/separator.svg';


const Panel = () => {
    return (
        <nav className='nav d-flex align-items-center position-fixed w-100'>
            <Logo className='mx-3'/>
            <Separator/>
            <div className='document-name mx-3'>Document Name</div>
       </nav>
    );

}
export default Panel;