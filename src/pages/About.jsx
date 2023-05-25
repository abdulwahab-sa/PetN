import pawssionLogo from '../assets/pawssion.png';
import sanctuaryLogo from '../assets/animal-sanctuary.png';

const aboutText = [
	{
		id: 1,
		title: 'About Our Pet Company',
		statement:
			'Welcome to Paw Tech, a leading provider of innovative pet solutions. We are passionate about the well-being and safety of pets, and our mission is to enhance the bond between pets and their owners through cutting-edge technology. At the heart of our product offerings is the NFC (Near Field Communication) microchip, revolutionizing the way we care for and protect our furry companions.',
	},
	{
		id: 2,
		title: 'Our NFC Microchip Technology',
		statement:
			'Our flagship product is the state-of-the-art NFC microchip, designed specifically for pets. This tiny microchip is equipped with NFC technology, allowing seamless communication between the chip and compatible devices. NFC technology enables quick and easy access to vital information about your pet, providing an added layer of safety and convenience.',
	},
	{
		id: 3,
		title: 'Keeping Pets Safe and Secure',
		statement:
			'We understand the deep concern every pet owner has for their beloved companions. Thats why our NFC microchip is not only for identification purposes but also incorporates advanced features to keep pets safe and secure. When a lost pet is found, the NFC microchip can be scanned by veterinarians, animal shelters, or concerned individuals, providing instant access to essential details about your pet, such as their name, medical history, and contact information. This rapid identification process ensures a swift and stress-free reunion with your furry friend.',
	},
	{
		id: 4,
		title: 'User-Friendly and Accessible Technology',
		statement:
			'Our NFC microchip technology is designed with simplicity and ease of use in mind. Compatible with a wide range of smartphones, tablets, and other NFC-enabled devices, accessing your pets information is as easy as a tap. Our user-friendly mobile application allows pet owners to store and update vital data and track their pets last known location. Our commitment to user accessibility ensures that even the most tech-averse pet owners can confidently use our products.',
	},
	{
		id: 5,
		title: 'A Commitment to Pet Welfare',
		statement:
			'At Paw Tech, we firmly believe in supporting animal welfare initiatives. A portion of our proceeds goes toward partnering with animal rescue organizations, shelters, and other animal welfare groups such as Pawssion Project and Dumaguete Animal Shelter. We are dedicated to making a positive impact in the lives of pets in need and ensuring that every animal receives the love, care, and protection they deserve.',
	},
];

const About = () => {
	return (
		<div className="bg-darkBlue h-full w-full py-24 px-12 md:px-24 space-y-16">
			<div className="space-y-4">
				<h2 className="font-bold text-white md:text-5xl text-3xl">How PawTech Works</h2>
				<p className="text-customCream font-normal text-base">
					{' '}
					Whether it’s a sneaky escape or a stroll with your dogwalker, you can now track your pet at any given time to ease your mind.{' '}
				</p>
			</div>
			<div className="space-y-10">
				{aboutText.map((about) => (
					<div className="space-y-3 md:max-w-5xl" key={about.id}>
						<h3 className="font-medium text-xl text-white"> {about.title} </h3>
						<p className="text-customCream font-normal text-base"> {about.statement} </p>
					</div>
				))}
				<div className="flex flex-col  md:flex-row text-left space-y-8 md:space-y-0  md:space-x-12">
					<img src={pawssionLogo} alt="pawssion project logo" className="w-32 md:h-36 object-contain" />
					<img src={sanctuaryLogo} alt="Animal sanctuary logo" className="w-32 md:h-40 object-contain" />
				</div>
			</div>
		</div>
	);
};

export default About;
