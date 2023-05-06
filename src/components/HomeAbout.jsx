import placeholderIcon from './../assets/placeholder.png';

const ideas = [
	{
		id: 1,
		icon: placeholderIcon,
		title: 'Explore ideas together',
		statement: 'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
	},
	{
		id: 2,
		icon: placeholderIcon,
		title: 'Explore ideas together',
		statement: 'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
	},
	{
		id: 3,
		icon: placeholderIcon,
		title: 'Explore ideas together',
		statement: 'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
	},
];

const HomeAbout = () => {
	return (
		<div className="p-24 flex flex-col space-y-20">
			<div className="flex flex-col space-y-6">
				<h2 className="text-5xl font-bold text-darkGrey">How Paw Tech Works</h2>
				<p className="aboutpara text-lightGrey text-base font-normal">
					Whether it’s a sneaky escape or a stroll with your dogwalker, you can now track your pet at any given time to ease your mind.{' '}
				</p>
			</div>
			<div className="flex flex-col space-y-8">
				{ideas.map((idea) => (
					<div className="flex space-x-3" key={idea.id}>
						<img src={idea.icon} alt="" className="w-12 h-12" />
						<div className="flex flex-col space-y-2">
							<h3 className="text-2xl font-semibold">{idea.title}</h3>
							<p className="aboutpara text-lightGrey text-base font-normal">{idea.statement} </p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomeAbout;
