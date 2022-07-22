import { useParams } from "react-router-dom";
import Panel from "./Panel";
import './Artboard.scss'

import { useSelector, useDispatch } from "react-redux";

const Artboard = () => {
    const { identifier } = useParams();
    const testRedux = useSelector((state) => state.jaime2);

    
    
    return (
        <>
            <Panel />
            
            <div className="artboard">
                {`jaime ${testRedux}`}
            <div>{`Artboard ${identifier}`}</div>
            </div>
        </>
    ) 
}

export default Artboard;