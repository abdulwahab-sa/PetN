import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://seahorse-app-i9yxu.ondigitalocean.app/api',
	credentials: 'include',
});

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ['Pets', 'Reminders'],
	endpoints: (builder) => ({}),
});
