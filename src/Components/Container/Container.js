
import {
  useQuery
} from "@apollo/client"
import DocumentViewer  from '../DocumentViewer';
import './Container.scss'
import { Route, Routes } from "react-router-dom";
import Artboard from "../Artboard/Artboard";
import { useEffect, useState } from "react";
// import { object } from '../../assets/object'
import { LOAD_DOCUMENT } from '../../GraphQL/Queries';
import { addData } from "./../../redux/actions/addData";
import { useSelector, useDispatch } from "react-redux";

const Container = () => {
    const { data } = useQuery(LOAD_DOCUMENT);
    // const { data } = "useQuery(LOAD_DOCUMENT)";
    const [artboards, setArtboards] = useState();
    const dispatch = useDispatch();
    const testRedux = useSelector((state) => state);
    useEffect(() => {
        setArtboards(data?.share?.version?.document?.artboards)
        console.log(artboards);

    }, [data])
  
    useEffect(() => {
        dispatch(addData(artboards));

    }, [artboards])
  
    const showData = () => {
        console.log(testRedux);
    }

    return (
      <Routes>
        <Route path='/' pathname="something" element={<DocumentViewer />}/>
        <Route path='/artboard/:identifier' pathname="something" element={<Artboard />}/>
      </Routes>
    )
}

export default Container;