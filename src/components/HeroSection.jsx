import './HeroSection.css';
import graphic from './../assets/graphic.png';
import dogPic from './../assets/dogPic.png';

const HeroSection = () => {
	return (
		<div className="h-hero w-full bg-hero flex">
			<div className="pl-24 w-1/2 flex flex-col my-auto space-y-8 text-white">
				<h2 className="text-5xl font-bold">A new way to know what your pet really needs.</h2>
				<p className="text-lg font-normal w-5/6"> Discover smart ways that tell you how to help them stay healthy, happy, and safe</p>
				<button className="bg-darkBlue inline-block h-11 w-32 rounded-md font-semibold text-white">Get Started</button>
			</div>
			<div className="relative w-1/2 ">
				<img src={graphic} alt="" className="graphic absolute top-10 left-10" />
				<img src={dogPic} alt="" className="dog absolute bottom-0 right-0 z-20 " />
			</div>
		</div>
	);
};

export default HeroSection;
