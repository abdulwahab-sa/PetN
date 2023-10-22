/* eslint-disable react/prop-types */
import { Image } from 'cloudinary-react';
import deleteIcon from '../assets/delete.png';
import { useSidebar } from '../context/SidebarContext';
import { Link } from 'react-router-dom';
import { useGetPetsQuery } from '../slices/petApiSlice';
import { useDeletePetMutation } from '../slices/petApiSlice';
import toast from 'react-hot-toast';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const MyPets = () => {
	const { openSidebar, setOpenSidebar } = useSidebar();

	const [page, setPage] = useState(1);

	const { data, error, isLoading } = useGetPetsQuery(page);

	const [deletePet] = useDeletePetMutation();

	const handleDelete = async (id) => {
		try {
			const response = await deletePet(id);
			if (response.data.pet) {
				toast.success('Pet Deleted Successfully');
			}
		} catch (error) {
			console.log(error);
			toast.error('Something went wrong');
		}
	};

	const pageCount = Math.ceil(data?.count / 6);

	const HandlePageChange = (selectedPage) => {
		const newPage = selectedPage.selected + 1;
		setPage(newPage);
	};

	return (
		<div className="h-full w-full md:py-28 md:px-24 py-12 px-5 flex flex-col">
			<button
				onClick={() => setOpenSidebar(!openSidebar)}
				className="lg:hidden mb-12 w-20 mx-auto bg-lightBlue p-2 rounded-md  font-semibold text-white"
			>
				Menu
			</button>
			<div className="flex justify-between">
				<h2 className="font-bold text-darkGrey md:text-5xl text-3xl">My Pets</h2>
			</div>

			<div className="flex flex-col space-y-8 mt-12">
				{isLoading ? (
					<div id="loading flex items-center justify-center">
						<div className="loader"></div>
					</div>
				) : error ? (
					<span className="font-semibold text-gray-600 text-xl"> There are no pets to display! </span>
				) : (
					data?.data?.map((pet) => (
						<div
							key={pet.id}
							className="relative lg:pet-wrapper pet-wrapper-border h-full w-full flex flex-col lg:flex-row lg:items-center justify-center px-4 py-4 lg:py-0 lg:justify-start lg:space-x-4"
						>
							<div className="relative">
								<Link to={`/viewpet/${pet.id}`}>
									{<Image cloudName="dixpklhom" publicId={pet.petImg} className="lg:w-28 lg:h-28 h-24 w-24 rounded-full" />}
								</Link>
							</div>
							<div className="flex flex-col ">
								<h3 className="text-xl font-bold text-darkGrey mb-1">{pet.petName}</h3>
								<span className="text-base font-normal text-lightGrey">{`Species: ${pet.species}`}</span>
								<span className="text-base font-normal text-lightGrey">{`Breed: ${pet.breed}`}</span>
							</div>
							<button
								className="absolute -top-5 -right-5 bg-primaryPurple p-2 h-8 w-8 rounded-full flex items-center justify-center"
								onClick={() => handleDelete(pet.id)}
							>
								<img src={deleteIcon} alt="" className="w-3 h-3" />
							</button>
						</div>
					))
				)}

				<div className="flex justify-center">
					{data?.count > 6 && (
						<ReactPaginate
							pageCount={pageCount}
							pageRangeDisplayed={2}
							marginPagesDisplayed={1}
							containerClassName="flex flex-row space-x-2"
							previousLabel="Previous"
							nextLabel="Next"
							breakLabel="..."
							onPageChange={HandlePageChange}
							activeClassName="text-primaryPurple"
							pageClassName="text-darkGrey"
							breakClassName="text-darkGrey"
							previousClassName="text-darkGrey"
							nextClassName="text-darkGrey"
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default MyPets;
