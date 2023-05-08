/* eslint-disable react/prop-types */
import rockyImg from '../assets/rockyImg.png';
import rosheImg from '../assets/rosheImg.png';
import serenaImg from '../assets/serenaImg.png';
import camIcon from '../assets/camIcon.png';

const petsData = [
	{
		id: 1,
		name: 'Rocky',
		Species: 'Dog',
		Breed: 'English Bulldog',
		Age: '2 years and 7 months',
		img: rockyImg,
	},
	{
		id: 2,
		name: 'Roshe',
		Species: 'Dog',
		Breed: 'American Bully-Chow Chow Mix',
		Age: '3 years and 9 months',
		img: rosheImg,
	},
	{
		id: 3,
		name: 'Serena',
		Species: 'Dog',
		Breed: 'Siberian Husky-Chow Chow Mix',
		Age: '3 years and 9 months',
		img: serenaImg,
	},
];

const MyPets = ({ openSidebar, setOpenSidebar }) => {
	return (
		<div className="h-full w-full md:py-28 md:px-24 py-12 px-5 ">
			<div className="flex justify-between">
				<h2 className="font-bold text-darkGrey md:text-5xl text-3xl">My Pets</h2>
				<button
					onClick={() => setOpenSidebar(!openSidebar)}
					className="bg-lightBlue p-2 md:p-0  md:w-28 md:h-11 rounded-md md:text-xl font-semibold text-white"
				>
					Menu
				</button>
			</div>

			<div className="flex flex-col space-y-4 mt-12">
				{petsData.map((pet) => (
					<div
						key={pet.id}
						className="md:pet-wrapper pet-wrapper-border h-full w-full flex flex-col md:flex-row md:items-center justify-center px-4 py-4 md:py-0 md:justify-start md:space-x-4"
					>
						<div className="relative">
							<img src={pet.img} alt="" className="md:w-28 md:h-28 h-24 w-24 rounded-full" />
							<div className=" absolute left-16 bottom-2 z-30 bg-camColor w-7 h-7 flex items-center justify-center rounded-full ">
								<img src={camIcon} alt="" className="w-4" />
							</div>
						</div>
						<div className="flex flex-col ">
							<h3 className="text-xl font-bold text-darkGrey mb-1">{pet.name}</h3>
							<span className="text-base font-normal text-lightGrey">{`Species: ${pet.Species}`}</span>
							<span className="text-base font-normal text-lightGrey">{`Breed: ${pet.Breed}`}</span>
							<span className="text-base font-normal text-lightGrey">{`Age: ${pet.Age}`}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyPets;
