import { Element } from "react-scroll";
import { BsLinkedin } from "react-icons/bs";

function redes() {
	return (
		<Element id="redes" name="redes">
			<div>
				<div className="w-full my-20 h-auto flex flex-col justify-center items-center md:gap-9">
					<p className="text-sm uppercase text-gray-400">Vamos nos conectar?!</p>
					<h1 className="text-indigo-900 text-6xl font-bold text-center">
						Redes Socias
					</h1>
					<div className="flex justify-center items-center cursor-pointer">
							<BsLinkedin className="w-10 h-10 bg-blue-900 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<a href="https://www.linkedin.com/in/sysraafael/" className="text-xl text-indigo-600 font-semibold">
								Linkedin
							</a>
						</div>
					</div>
				</div>
		</Element>
	);
}

export default redes;