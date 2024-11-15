import leo5 from './assets/images/leo5bg.jpg';
import leo2 from './assets/images/leo2.jpg';
import leo1 from './assets/images/leo1.jpg';
import leo3 from './assets/images/leo3.jpg';
import leo4 from './assets/images/leo4.jpg';
import { useEffect } from "react";
import './index.css';
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
   useEffect(() => {
			AOS.init({ duration: 1000 });
		}, []);

  return (
		<ParallaxProvider>
			<div
				data-aos="fade-up"
				className="relative min-h-screen bg-cover bg-center text-white font-sour"
			>
				<div className="bg-black bg-opacity-60 absolute inset-0">
					<img src={leo5} alt="Logo" className="mx-auto mb-4 bg-cover h-full" />
					<div className="bg-black bg-opacity-60 absolute inset-0"></div>
				</div>
				<header data-aos="fade-in" className="relative z-10 text-center p-8">
					<h1
						data-aos="fade-right"
						className="text-6xl font-extrabold text-yellow-500"
					>
						We <span className="text-red-700">the</span> People
					</h1>
					<p>
						Join the movement{" "}
						<span className="text-blue-500">make your voice heard!</span>
					</p>
				</header>

				<section className="min-h-screen flex justify-center px-8 py-16 bg-gray-900 text-center w-full">
					<Parallax speed={-10}>
						<div className="w-full h-screen bg-black bg-opacity-60 absolute  inset-0">
							<img
								src={leo1}
								alt="Logo"
								className="w-full h-full  mx-auto mb-4"
							/>
							<div className="bg-black h-screen w-full bg-opacity-60 absolute inset-0"></div>
						</div>
						<div className="relative flex flex-col justify-center py-2 h-screen w-screen items-center">
							<h2
								data-aos="zoom-out"
								className="text-5xl md:text-6xl font-bold mb-4"
							>
								Our Mission
							</h2>
							<p className="max-w-4xl text-lg md:text-2xl mb-8">
								Uniting the people through the power of decentralized freedom ,
								'We the People' meme stands as a symbol of strength, unity,
								laughter and community. It’s not just a fun digital asset; it’s
								a movement to amplify the voice of every individual, ensuring no
								one is silenced or marginalized. By embracing freedom of speech
								and inclusivity, our coin challenges oppression, combats hate,
								and pushes back against the culture of cancelation for speaking
								up. It represents a future where all voices are heard equally,
								fostering an environment of respect, understanding, and
								collective empowerment for everyone.
							</p>
						</div>
					</Parallax>
				</section>

				<section className="min-h-screen flex items-center justify-center  py-16 bg-gray-800 text-center">
					<Parallax speed={5}>
						<div className=" w-full h-screen bg-black bg-opacity-60 absolute inset-0">
							<img
								src={leo2}
								alt="Logo"
								className="w-full h-full  mx-auto mb-4"
							/>
							<div className="bg-black h-screen w-full bg-opacity-60 absolute inset-0"></div>
						</div>
						<div className="relative flex flex-col justify-center py-2 h-screen w-screen items-center">
							<h2
								data-aos="zoom-in"
								className="text-5xl md:text-6xl font-bold mb-4"
							>
								Tokenomics 🗣️
							</h2>
							<p className=" text-lg mb-8 px-8 max-w-4xl ">
								Designed to empower the community, with a focus on accessibility
								and collective growth. Join us in championing a movement that
								amplifies voices, fosters unity, and drives meaningful change
								for all. One for all! All for one! Propelled not just by a
								community, but by a family united in purpose and vision—while
								having fun every step of the way.
							</p>
						</div>
					</Parallax>
				</section>

				<section className="min-h-screen flex items-center justify-center px-8 py-16 bg-gray-700 text-center">
					<Parallax speed={-5}>
						<div className="w-full h-screen bg-black bg-opacity-60 absolute  inset-0">
							<img
								src={leo3}
								alt="Logo"
								className="w-full h-full  mx-auto mb-4"
							/>
							<div className="bg-black h-screen w-full bg-opacity-60 absolute inset-0"></div>
						</div>
						<div className="relative flex flex-col justify-center py-2 h-screen w-full">
							<h2 className="text-4xl md:text-5xl font-bold mb-4">Buy</h2>
							<div className="py-14 w-screen">
								<a
									href="/#"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-blue-700 border-white border rounded-full px-5 py-2 mr-2 hover:border-blue-500 shake"
								>
									Pump.fun
								</a>
								<a
									href="/#"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-blue-700 border-white border rounded-full px-5 py-2 mr-2 hover:border-blue-500 "
								>
									Raydium
								</a>
								
							</div>
						</div>
					</Parallax>
				</section>
				<section className="min-h-screen flex items-center justify-center px-8 py-16 bg-gray-700 text-center">
					<Parallax speed={-5}>
						<div className="w-full h-screen bg-black bg-opacity-60 absolute  inset-0">
							<img
								src={leo4}
								alt="Logo"
								className="w-full h-full  mx-auto mb-4"
							/>
							<div className="bg-black h-screen w-full bg-opacity-60 absolute inset-0"></div>
						</div>
						<div className="relative flex flex-col justify-center py-2 h-screen w-full">
							<h2
								data-aos="fade-in zoom-out"
								className="text-5xl md:text-6xl font-bold mb-4"
							>
								Socials
							</h2>
							<div className="py-14 w-screen">
								<a
									href="https://x.com/we__thepeople_"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-blue-700 border-white border rounded-full px-5 py-2 mr-2 hover:border-blue-500 animate-pulse duration-700 delay-75"
								>
									Twitter
								</a>
								<a
									href="https://t.me/we_thepeople_founders"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-blue-700 border-white border rounded-full px-5 py-2 mr-2 hover:border-blue-500 animate-pulse duration-700 delay-500"
								>
									Telegram
								</a>
							
							</div>
						</div>
					</Parallax>
				</section>
				<footer className="bg-black text-center py-4 fixed w-full">
					<p>&copy; 2024 WeThePeopleCoin. All rights reserved.</p>
				</footer>
			</div>
		</ParallaxProvider>
	);
}

export default App;
