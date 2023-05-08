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

const MyPets = () => {
	return (
		<div className="h-full w-full py-28 px-24">
			<h2 className="font-bold text-darkGrey text-5xl">My Pets</h2>
			<div className="flex flex-col space-y-4 mt-12">
				{petsData.map((pet) => (
					<div key={pet.id} className="pet-wrapper flex items-center px-4 justify-start space-x-4">
						<div className="relative">
							<img src={pet.img} alt="" className="w-28 h-28 rounded-full" />
							<div className=" absolute right-2 bottom-2 z-30 bg-camColor w-7 h-7 flex items-center justify-center rounded-full ">
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
