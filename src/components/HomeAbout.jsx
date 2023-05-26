import placeholderIcon from './../assets/placeholder.png';

const ideas = [
	{
		id: 1,
		icon: placeholderIcon,
		title: 'Ensure your pets safety',
		statement:
			'Pet owners can easily keep track of their furry companions and quickly locate them if they go missing or wander off. This feature provides peace of mind and helps prevent pets from getting lost or running astray.',
	},
	{
		id: 2,
		icon: placeholderIcon,
		title: 'Overall Wellness of Pets',
		statement:
			'Set reminders for important events such as vet visits and vaccination appointments,ensuring that their pets receive timely healthcare.',
	},
];

const HomeAbout = () => {
	return (
		<div className="px-5 py-12  md:p-24 flex flex-col space-y-4 md:space-y-20">
			<div className="flex flex-col md:space-y-6">
				<h2 className="text-3xl md:text-5xl font-bold text-darkGrey">How Paw Tech Works</h2>
				<p className="md:aboutpara my-2 md:my-0 text-lightGrey text-base font-normal">
					Paw Tech is a wearable microchip for pets, its a tiny, high-tech device that can be easily attached to a pets collar providing
					tracking and monitoring of their location and health.
				</p>
			</div>
			<div className="flex flex-col space-y-10">
				{ideas.map((idea) => (
					<div className="flex space-x-3" key={idea.id}>
						<img src={idea.icon} alt="" className="md:w-12 md:h-12 w-10 h-10" />
						<div className="flex flex-col space-y-2">
							<h3 className="text-xl md:text-2xl font-semibold">{idea.title}</h3>
							<p className="md:aboutpara text-lightGrey text-base font-normal">{idea.statement} </p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomeAbout;
