import "./Created.css";

import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axios from 'axios';

const Created = () => {
	const { tag } = useParams();
  const [activityCreated, setActivityCreated] = useState([]);

  useEffect(() => {
    axios
      .get(`/getCountrieDetail/${tag}`)
      .then((response) => setActivityCreated(response.data));
  }, [tag]);
  console.log(activityCreated)
	return (
		<section className="bg-sectionCreated">
		<img src={activityCreated[0]?.flag} alt="pais" width="300px" height="250px"/>
		<div className="bg-containerCreated">
			<div className="bg-containerLink">
				<Link to="/home" className="sty-link"><span>Volver</span></Link>
			</div>
			<div className="containerDetails-bg">
				<div className="container-bgActivities">
				
					{
					activityCreated[0]?.Activities?.map(activity => (
							<div className="bg-container-activity">
										<p>Nombre: {activity.name}</p><br/>
										<p>Duracion: {activity.duration}</p><br/>
										<p>Dificultad: {activity.difficulty}</p><br/>
										<p>Temporada: {activity.season}</p><br/>
							</div>
					))
				}
				</div>
			</div>
		</div>
		</section>
		)
}

export default Created;