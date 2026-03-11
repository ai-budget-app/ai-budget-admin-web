import { baseApi } from '@/app/store/baseApi'

const saveAuthData = (data) => {
  if (data?.token) {
    localStorage.setItem('token', data.token)
  }
  if (data?.user) {
    localStorage.setItem('user', JSON.stringify(data.user))
  }
}

const withAuthSave = async ({ queryFulfilled }) => {
  try {
    const { data } = await queryFulfilled
    saveAuthData(data)
  } catch (error) {
    // Запрос завершился ошибкой — данные не сохраняются.
    // Блок необходим, чтобы не возникало unhandled promise rejection,
    // так как onQueryStarted — async-функция.
    // Сама ошибка обрабатывается в компоненте через .unwrap().
    void error
  }
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
      onQueryStarted: (_arg, api) => withAuthSave(api),
      invalidatesTags: ['User'],
    }),

    login: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      onQueryStarted: (_arg, api) => withAuthSave(api),
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