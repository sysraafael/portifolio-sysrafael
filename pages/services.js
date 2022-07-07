import { ImHtmlFive } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { Element } from "react-scroll";

function services() {
	return (
		<Element id="services" name="services">
			<div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
				<h1 className="text-indigo-900 text-6xl font-bold text-center">
					Minhas Habilidades
				</h1>
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex  flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<ImHtmlFive className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								HTML5
							</h2>
						</div>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<DiCss3 className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								CSS
							</h2>
						</div>
					</div>
                    {/* second block */}
                    <div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<TbBrandNextjs className="w-10 h-10 bg-green-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								NextJs
							</h2>
						</div>
					</div>

				</div>

				{/* second grid */}
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<SiPython className="w-10 h-10 bg-blue-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold ">
								Python
							</h2>
						</div>
					</div>
                    

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<DiJavascript1 className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								Javascript
							</h2>
						</div>
					</div>

                    {/* thrid block */}
                    <div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<SiTypescript className="w-10 h-10 bg-blue-800 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								TypeScript
							</h2>
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default services;