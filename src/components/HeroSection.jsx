import graphic from './../assets/graphic.png';
import dogPic from './../assets/dogPic.png';

const HeroSection = () => {
	return (
		<div className="md:h-hero h-full w-full bg-hero flex flex-col md:flex-row ">
			<div className="md:pl-24 px-8 md:px-0 pt-8 md:pt-0 md:w-1/2 w-full flex flex-col md:my-auto md:space-y-8 text-white">
				<h2 className="text-3xl md:text-5xl font-bold">A new way to know what your pet really needs.</h2>
				<p className="my-4 md:my-0  text-md md:text-lg font-normal w-5/6">
					{' '}
					Discover smart ways that tell you how to help them stay healthy, happy, and safe
				</p>
				<button className="bg-darkBlue inline-block h-11 w-32 rounded-md font-semibold text-white">Get Started</button>
			</div>
			<div className="relative md:w-1/2 w-full ">
				<img src={graphic} alt="" className="hidden md:flex graphic absolute md:top-10 md:left-10" />
				<img src={dogPic} alt="" className="h-80 mx-auto md:mx-0 md:dog  md:absolute md:bottom-0 md:right-0 z-20 " />
			</div>
		</div>
	);
};

export default HeroSection;
