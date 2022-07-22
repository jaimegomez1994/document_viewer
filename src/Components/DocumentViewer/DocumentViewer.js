import { Link } from "react-router-dom";
import Panel from "./Panel";
import { useSelector} from "react-redux";

const DocumentViewer = () => {
    const testRedux = useSelector((state) => state);
    const showData = () => {
        console.log(testRedux);
    }
    
    return (
        <>
            <Panel />
            <div className="document-viewer">
                {`jaime ${testRedux?.entries?.length>0 &&testRedux.entries[0]}`}
                <a onClick={()=>showData()}>JAIME 2</a>
                <div className="row row-cols-5">
                    {testRedux?.entries?.length>0 && testRedux.entries.map(artboard => {
                        return (
                            <li className="d-flex flex-column justify-content-between my-4">
                                <Link to={`/artboard/${artboard.identifier}`}>
                                <img src={artboard.files[0].thumbnails[1].url} alt={artboard.name}></img>
                                <div className="mt-2" >{artboard.name}</div>
                                </Link>
                            </li>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default DocumentViewer;

