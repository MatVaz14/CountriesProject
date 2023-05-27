import "./Filters.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useDispatch } from "react-redux";
import { filterContinent,filterPopulation, filterAlph } from "../../redux/action";

AOS.init();

const Filters = () => {
	const dispatch = useDispatch();
	
	const handleClick = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		if(name === "continent"){
		dispatch(filterContinent(value))
		}
		if(name === "population"){
		dispatch(filterPopulation(value))
		}
		if(name === "alph"){
			dispatch(filterAlph(value));
		}
	}
	return (
		<div className="container__filters">
			<select name="alph" onChange={handleClick} className="styleSelect" data-aos="fade-down-right"
    data-aos-duration="2000">
				<option defaultValue="alph" value="alph" className="styleOption">Alfabéticamente</option>
				<option value="az" className="styleOption">A-Z</option>
				<option value ="za" className="styleOption">Z-A</option>
			</select>
			<select name="continent" onChange={handleClick}  className="styleSelect" data-aos="fade-down-right"
    data-aos-duration="2000">
				<option  defaultValue="continent" value="continent">Continente</option>
				<option value="North America">America del Norte</option>
				<option value="South America">America del Sur</option>
				<option value="Europe">Europa</option>
				<option value="Asia">Asia</option>
				<option value="Africa">Africa</option>
				<option value="Oceania">Oceanía</option>
				<option value="Antarctica">Antartida</option>
			</select>
			<select name="population" onChange={handleClick} className="styleSelect" data-aos="fade-down-right" 
    data-aos-duration="3000">
				<option defaultValue="population" value="population" >Población</option>
				<option value="populationMin">Menor</option>
				<option value="populationMax">Mayor</option>
			</select>
		</div>
	)
}

export default Filters;