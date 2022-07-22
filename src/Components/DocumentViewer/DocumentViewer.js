import { Link } from "react-router-dom";
import Panel from "./Panel";
import { useSelector} from "react-redux";

const DocumentViewer = () => {
    const artboards = useSelector((state) => state);
    const showData = () => {
        console.log(artboards);
    }
    
    return (
        <>
            <Panel />
            <div className="document-viewer">
                <div className="row row-cols-5">
                    {artboards?.entries?.length>0 && artboards.entries.map(artboard => {
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

