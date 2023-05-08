import rockyImg from '../assets/rockyImg.png';

const inputs = [
	{
		id: 1,
		title: 'Name of Pet',
		type: 'text',
	},
	{
		id: 2,
		title: 'Species',
		type: 'text',
	},
	{
		id: 3,
		title: 'Breed',
		type: 'text',
	},
	{
		id: 4,
		title: 'Birthdate',
		type: 'date',
	},
	{
		id: 5,
		title: 'Color',
		type: 'text',
	},
	{
		id: 6,
		title: 'Weight',
		type: 'text',
	},
	{
		id: 7,
		title: 'Last Pinned Location',
		type: 'text',
	},
];

const PetAccount = () => {
	return (
		<div className="py-40 px-14 ">
			<div className="relative w-full mx-auto pet-form-wrapper flex items-center justify-center">
				<img src={rockyImg} alt="" className="w-44 h-44 rounded-full absolute -top-20  z-30" />
				<div className="flex flex-wrap item-center justify-center">
					{inputs.map((el) => (
						<div
							className={`flex flex-col space-y-2 max-w-2xl m-2 ${el.title === 'Last Pinned Location' ? 'w-full' : 'w-2/5'}`}
							key={el.id}
						>
							<span className="text-lg font-medium text-darkBlue">{el.title}</span>
							<input type={el.type} className="w-full h-9 py-1 px-3 pet-form-input" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PetAccount;
