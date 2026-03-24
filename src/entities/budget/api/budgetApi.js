import { baseApi } from '@/app/store/baseApi';

export const budgetApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    setSettings: builder.mutation({
      query: (body) => ({
        url: '/budget/settings',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Budget'],
    }),

    getSettings: builder.query({
      query: () => ({
        url: '/budget/settings',
        method: 'GET',
      }),
      providesTags: ['Budget'],
    }),

    deleteSettings: builder.mutation({
      query: () => ({
        url: '/budget/settings',
        method: 'DELETE',
      }),
      invalidatesTags: ['Budget', 'Expenses'],
    }),

    getSummary: builder.query({
      query: () => ({
        url: '/budget/summary',
        method: 'GET',
      }),
      providesTags: ['Budget'],
    }),

    getHistory: builder.query({
      query: () => ({
        url: '/budget/history',
        method: 'GET',
      }),
      providesTags: ['Budget'],
    }),

    updateCategories: builder.mutation({
      query: (body) => ({
        url: '/budget/categories',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Budget', 'Expenses'],
    }),
  }),
});

export const {
  useSetSettingsMutation,
  useGetSettingsQuery,
  useDeleteSettingsMutation,
  useGetSummaryQuery,
  useGetHistoryQuery,
  useUpdateCategoriesMutation,
} = budgetApi;
