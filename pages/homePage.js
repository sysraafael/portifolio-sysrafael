import React from "react";
import Image from "next/image";
import heroImage from "../public/images/heroimage.png";
import { Element } from "react-scroll";

function Home() {
	return (
		<Element id="home" name="home">
			<div>
				<div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
					<div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
						<Image
							src={heroImage}
							alt="heroImage"
							layout="fill"
							objectFit="cover"
							className=" rounded-full cursor-pointer hidden md:block"
						/>
					</div>
					<div className="flex flex-col md:ml-20 mx-10 mt-10">
						<h1 className="font-bold text-7xl text-left mb-5">
							Hello, I am <span className="text-indigo-900">Rafael</span>
						</h1>
						<p className="text-left font-normal font mb-5 flex-wrap">
							Prazer, me chamo Rafael Cavalcante, tenho 19 anos. Sou
							Desenvolvedor Front-end, tenho pouca experiência ainda, mas estudo diariamente
							para aprimorar minhas habilidades como programador.
							Estou cursando Gestão da Tecnologia da Informação 
							e faço alguns cursos na plataforma da Alura.
						</p>
						
						<p className="text-left font-normal font mb-5 flex-wrap">
						Nas horas vagas gosto de assistir animes,séries, filmes e jogar
							League of Legends, Valorant, CS:GO entre outros jogos
						</p>
						
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Home;