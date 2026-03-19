import { baseApi } from '@/app/store/baseApi';

export const expensesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createExpense: builder.mutation({
      query: (body) => ({
        url: '/expenses',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Expenses', 'Budget'],
    }),

    getExpenses: builder.query({
      query: (params) => ({
        url: '/expenses',
        method: 'GET',
        params, // можно передавать фильтры, если они есть
      }),
      providesTags: ['Expenses'],
    }),

    getExpenseById: builder.query({
      query: (id) => ({
        url: `/expenses/${id}`,
        method: 'GET',
      }),
      providesTags: ['Expenses'],
    }),

    updateExpense: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/expenses/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Expenses', 'Budget'],
    }),

    deleteExpense: builder.mutation({
      query: (id) => ({
        url: `/expenses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Expenses', 'Budget'],
    }),

    bulkDelete: builder.mutation({
      query: (body) => ({
        url: '/expenses/bulk-delete',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Expenses', 'Budget'],
    }),

    statsByCategory: builder.query({
      query: () => ({
        url: '/expenses/statistics/by-category',
        method: 'GET',
      }),
      providesTags: ['Expenses'],
    }),

    statsSummary: builder.query({
      query: () => ({
        url: '/expenses/statistics/summary',
        method: 'GET',
      }),
      providesTags: ['Expenses'],
    }),
  }),
});

export const {
  useCreateExpenseMutation,
  useGetExpensesQuery,
  useGetExpenseByIdQuery,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
  useBulkDeleteMutation,
  useStatsByCategoryQuery,
  useStatsSummaryQuery,
} = expensesApi;
