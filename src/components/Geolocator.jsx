import { useEffect, useState } from 'react';
import axios from 'axios';

const Geolocator = () => {
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);
	const [locationName, setLocationName] = useState(null);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setLatitude(position.coords.latitude);
					setLongitude(position.coords.longitude);
				},
				(error) => {
					console.error(error);
				}
			);
		} else {
			console.error('Geolocation is not supported by this browser.');
		}
	}, []);

	const getLocationName = (latitude, longitude) => {
		const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
		const geocodeApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;

		axios
			.get(geocodeApiUrl)
			.then((response) => {
				const results = response.data.results;
				if (results.length > 0) {
					setLocationName(results[0].formatted_address);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		if (latitude && longitude) {
			getLocationName(latitude, longitude);
		}
	}, [latitude, longitude]);

	return { locationName };
};

export default Geolocator;
