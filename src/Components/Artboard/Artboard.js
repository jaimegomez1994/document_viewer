import { useParams } from "react-router-dom";
import Panel from "./Panel";
import './Artboard.scss'
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";


const Artboard = () => {
    const { identifier } = useParams();
    const artboards = useSelector((state) => state);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentBoard, setCurrentBoard] = useState();

    useEffect(() => {
        artboards?.entries?.find((artboard, index) => {
            if (artboard.identifier === identifier)
            {   
                setCurrentBoard(artboard);  
                setCurrentIndex(index + 1);
            }
        });
    }, [])
    
    const updateCurrentBoard = (arrow) => {
        //validate limits
        let newIndex=0;
        if (arrow === "right") {
            if (currentIndex>=artboards?.entries?.length) {
                newIndex = 0;
            } else {
                newIndex=currentIndex
            }
        } else {
            if ( currentIndex - 2<0) {
                newIndex = artboards?.entries?.length - 1;
            } else {
                newIndex = currentIndex - 2;
            }
        }

        setCurrentBoard(artboards?.entries[newIndex]);
        setCurrentIndex(newIndex + 1);
    }

    return (
        <>
            <Panel
                currentBoard={currentBoard }
                updateCurrentBoard={updateCurrentBoard}
                currentIndex={currentIndex}
                numberOfBoards={artboards?.entries?.length}
            />
            <div>
            </div>
            <div id="artboard-image"  className="artboard d-flex justify-content-center">
                <img style={{
                    maxWidth: `${document?.querySelector('#artboard-image')?.offsetWidth - 70}px`,
                    maxHeight: `${document?.querySelector('#artboard-image')?.offsetHeight - 70}px`
                }} src={currentBoard?.files[1]?.url} alt={currentBoard?.name} ></img>
            </div>
        </>
    ) 
}

export default Artboard;