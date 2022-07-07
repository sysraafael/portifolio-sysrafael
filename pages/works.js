import Image from "next/image";
import One from "../public/images/1.png";
import Two from "../public/images/2.png";
import Three from "../public/images/3.png";
import Four from "../public/images/4.png";
import Five from "../public/images/5.png";
import Six from "../public/images/6.png";
import { Element } from "react-scroll";

function works() {
	return (
		<Element id="work" name="work">
			<div className="w-full my-20 h-auto flex flex-col justify-center items-center  ">
				<h1 className="text-indigo-900 text-6xl font-bold text-center">
					Projetos
				</h1>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={One}
							alt="One"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Two}
							alt="two"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
                            
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Three}
							alt="three"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Four}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Five}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Six}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
                    
				</div>

				<h1 className="text-blue-900 text-base my-10">
					Dê uma olhada em meus projetos no{" "}
					<a href="https://github.com/sysraafael" className="text-black font-semibold">
						github{" "}
					</a>
				</h1>
			</div>
		</Element>
	);
}

export default works;