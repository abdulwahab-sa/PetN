import graphic from './../assets/graphic.png';
import catPic from './../assets/catPic.png';

const Login = () => {
	return (
		<div className="md:h-hero h-full w-full bg-hero flex flex-col md:flex-row justify-between ">
			<div className="md:pl-24 px-8 md:px-0 pt-8 md:pt-0 mb-6  md:w-2/5 w-full flex flex-col md:my-auto space-y-4 md:space-y-5 text-white ">
				<h2 className="text-3xl md:text-5xl font-bold">Welcome back!</h2>
				<div className="flex flex-col w-full space-y-1 max-w-sm">
					<span className="text-lg font-normal text-white">Email Address</span>
					<input type="text" placeholder="Insert your email" className="w-full h-11 py-1 px-3 pet-form-input" />
				</div>
				<div className="flex flex-col w-full space-y-1 max-w-sm">
					<span className="text-lg font-normal text-white">Password</span>
					<input type="password" placeholder="Insert your password" className="w-full h-11 py-1 px-3 pet-form-input" />
				</div>
				<span className="text-right text-darkBlue font-semibold max-w-sm"> Forget password? </span>
				<button className="bg-darkBlue block h-11 max-w-sm rounded-md font-semibold text-white">Log In</button>
			</div>
			<div className="relative md:w-1/2 w-full ">
				<img src={graphic} alt="" className="hidden md:flex graphic absolute md:top-10 md:left-10" />
				<img src={catPic} alt="" className="h-80 mb-6 md:mb-0 mx-auto md:mx-0 md:dog  md:absolute md:bottom-0 md:right-0 z-20 " />
			</div>
		</div>
	);
};

export default Login;
