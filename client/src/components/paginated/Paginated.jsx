import "./Paginated.css";
import { currentPage } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

import {useState, useEffect} from "react";

const Paginated = ({ countriesPerPage, countries, paginado, paginaActual, cambioPagina }) => {
const pageNumbers = [];
const dispatch = useDispatch();
let currentPages = useSelector((state) => state.currentPage);
const [currentPosition, setCurrentPosition] = useState(currentPages)
    for(let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        if(!currentPosition){
            setCurrentPosition(1);
        }
        setCurrentPosition(currentPages);
    },[currentPosition, currentPages]);

    const handleClickPage = (number) => {
        setCurrentPosition(currentPages);
        dispatch(currentPage(number));
    }

    return(
        <div>
            <div>
                {
                    pageNumbers?.map((number) => (
                        <button value={number} onClick={() => (paginado(number), handleClickPage(number))} className={`${number == currentPosition ? "currentActivate" : ""} bg-btnPaginated`}>
                            {number}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Paginated;