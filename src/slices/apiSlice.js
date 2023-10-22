import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:3005/api',
	credentials: 'include',
});

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ['User', 'Pets', 'Reminders'],
	endpoints: (builder) => ({}),
});
