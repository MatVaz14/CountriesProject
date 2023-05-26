import React, {useState} from 'react';
import { TfiClose } from "react-icons/tfi";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Modal = ({children, estado, nuevoEstado, tag, name, continent, population, capital, region, subregion, timezones, map, area}) => {
	return (
		<>
		{estado &&
		<Overlay>
			<ContenedorModal data-aos="zoom-in">
				<EncabezadoModal>
					<h1>{name} - {tag}</h1>
				</EncabezadoModal>
				<BotonCerrar onClick={() => nuevoEstado(false)}>
					<TfiClose />
				</BotonCerrar>
				<Contenido>
					<div className="Contenido_Gap1">
						<div className="containerImg_ContenidoGap1">
							{children}
						</div>
						<h2>Tag: {tag}</h2>
						<h2>Capital: {capital}</h2>
						<h4>Map: <a className="style-mapLink" href={map} target="_blank">Ver en Google Map</a></h4>
					</div>
					<div className="Contenido_Gap2">
						<div className="subContainerContenidoGap2">
						<h3>Continente: {continent}</h3>
						<h3>Region: {region}</h3>
						<h3>Subregion: {subregion}</h3>
						<div className="textoDoble">
							<h3>Población: {population}</h3>
							<h3>Area: {area}</h3>
						</div>
						<div className="container_timeZones">
							<h3>Time-Zones: {timezones}</h3>
						</div>
						</div>
					</div>
				</Contenido>
			</ContenedorModal>
		</Overlay>

		}
		</>
	);
}

export default Modal;

const Contenido = styled.div`
	display: flex;
	width: 100%;
	height: 90%;

	.Contenido_Gap1 {
		display: flex;
		flex-direction: column;
		width: 40%;
		height:100%;
		padding: 5px;

		.containerImg_ContenidoGap1 {
			width: 95%;
			height: 60%;
		}

		h2 {
			margin-bottom: 10px;
		}

		h4 {
			font-size: 22px;
			margin-top: auto;
			margin-bottom: 10px;
		}
		.style-mapLink {
			color: white;
		}
	}
	.Contenido_Gap2 {
		border-left: 8px solid rgba(0,0,0,0.3);
		width: 60%;
		display: flex;
		flex-direction: column;
		padding-left: 15px;

		h3 {
			font-size: 24px;
			margin-bottom: 15px;
		}

		.subContainerContenidoGap2 {
		width: 90%;
		height: 80%;
		margin: auto auto;
		display:flex;
		flex-direction: column;
		justify-content: center;
		}
	}
	.Contenido_Gap2 .textoDoble {
		display: flex;
		width: 80%;
		justify-content: space-between;
	}

	.Contenido_Gap2 .container_timeZones {
		width: 100%;
		display: flex;
		justify-content:center;
	}
`;

const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(0,0,0,0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
`
const ContenedorModal = styled.div`
	position: relative;
	color: rgba(193, 236, 255, 0.8);
	width: 80%;
	height: 80%;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	background: rgba(23, 27, 58, 0.9);
	box-shadow: rgba(100,100,111,0.2) 8px 7px 29px 0px;
	padding: 20px;
`

const EncabezadoModal = styled.div`
	display: flex;
	align-items: center;

	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid #E8E8E8;
	height: 10%;

	h1 {
		font-weight: bold;
		font-size: 30px;
	}
`;

const BotonCerrar = styled.button`
	position: absolute;
	right: 20px;
	top: 20px;

	color: white;

	transition: 0.5s;
	cursor: pointer;

	width: 30px;
	height: 30px;
	background: none;
	border: none;
	font-size: 22px;
	display: flex;
	justify-content:center;
	align-items: center;
	border-radius: 5px;

	&:hover {
		transition: 0.3s;
		transform: scale(1.2);
		background: rgba(193, 236, 255, 0.2);
	}
`;
