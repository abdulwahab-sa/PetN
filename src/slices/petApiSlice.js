import { apiSlice } from './apiSlice';

export const petApiSlice = apiSlice.injectEndpoints({
	credentials: 'include',
	endpoints: (builder) => ({
		getPets: builder.query({
			query: (page) => ({
				url: `/getpets/?page=${page}`,
				method: 'GET',
				withCredentials: true,
			}),
			providesTags: ['Pets'],
		}),
		getAllPets: builder.query({
			query: () => ({
				url: `/getpets`,
				method: 'GET',
				withCredentials: true,
			}),
			providesTags: ['Pets'],
		}),

		getSinglePet: builder.query({
			query: (petId) => ({
				url: `/getpet/${petId}`,
				method: 'GET',
				withCredentials: true,
			}),
		}),
		createPet: builder.mutation({
			query: (pet) => ({
				url: '/createpet',
				method: 'POST',
				body: pet,
				withCredentials: true,
			}),
			invalidatesTags: ['Pets'],
		}),
		deletePet: builder.mutation({
			query: (petId) => ({
				url: `/deletepet/${petId}`,
				method: 'DELETE',
				withCredentials: true,
			}),
			invalidatesTags: ['Pets'],
		}),
		updatePet: builder.mutation({
			query: (petId, pet) => ({
				url: `/updatepet/${petId}`,
				method: 'PUT',
				body: pet,
				withCredentials: true,
			}),
			invalidatesTags: ['Pets'],
		}),
		createReminder: builder.mutation({
			query: (reminder) => ({
				url: `/createreminder`,
				method: 'POST',
				body: reminder,
				withCredentials: true,
			}),
			invalidatesTags: ['Reminders'],
		}),
		getAllReminders: builder.query({
			query: () => ({
				url: `/getreminders`,
				method: 'GET',
				withCredentials: true,
			}),
			providesTags: ['Reminders'],
		}),
		deleteReminder: builder.mutation({
			query: (reminderId) => ({
				url: `/deletereminder/${reminderId}`,
				method: 'DELETE',
				withCredentials: true,
			}),
			invalidatesTags: ['Reminders'],
		}),
	}),
});

export const {
	useGetPetsQuery,
	useGetAllPetsQuery,
	useGetSinglePetQuery,
	useCreatePetMutation,
	useDeletePetMutation,
	useUpdatePetMutation,
	useCreateReminderMutation,
	useGetAllRemindersQuery,
	useDeleteReminderMutation,
} = petApiSlice;
