import { baseApi } from '@/app/store/baseApi'

const isMockAuthEnabled = import.meta.env.VITE_AUTH_MOCK === 'true'

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    login: builder.mutation({
      queryFn: async (body, _api, _extraOptions, baseQuery) => {
        if (isMockAuthEnabled) {
          return {
            data: {
              token: 'mock-auth-token',
              user: {
                email: body?.email,
              },
              message: 'Успешный вход (mock)',
            },
          }
        }

        return baseQuery({
          url: '/auth/login',
          method: 'POST',
          body,
        })
      },
      invalidatesTags: ['User'],
    }),

    me: builder.query({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    updateProfile: builder.mutation({
      query: (body) => ({
        url: '/auth/profile',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    changePassword: builder.mutation({
      query: (body) => ({
        url: '/auth/change-password',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    deleteAccount: builder.mutation({
      query: (body) => ({
        url: '/auth/account',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['User', 'Budget', 'Expenses'],
    }),
  }),
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useMeQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useDeleteAccountMutation,
} = authApi