import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from 'src/utils/axios'
import { useErrorHandler } from 'src/utils/processError'
import { handleSuccess } from 'src/utils/processSuccess'
import { useRouter } from 'vue-router'
import { Notify } from 'quasar'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()

  const newUserId = ref(null)
  const currentUser = ref(null)
  const isAuthenticated = ref(false)
  const currentRole = ref(localStorage.getItem('role') || null)
  const { processErrors } = useErrorHandler()
  const token = ref(localStorage.getItem('token') || null)

  const getRoleName = (code) => {
    switch (code) {
      case 'AD':
        return 'admin'
      case 'RU':
        return 'user'
      case 'SM':
        return 'manager'
      case 'SA':
        return 'superadmin'
      default:
        return code.toLowerCase()
    }
  }

  const signup = async (credentials) => {
    try {
      const response = await api.post('/register/', credentials)
      return response
    } catch (err) {
      processErrors(err.response?.data || err.message)
    }
  }

  const verifyOTP = async (credentials) => {
    try {
      const response = await api.post('/verify-otp/', credentials)
      if (response) {
        isAuthenticated.value = true
        token.value = response.data.access
        localStorage.setItem('token', response.data.tokens?.access)
        localStorage.setItem('refreshToken', response.data.tokens?.refresh)
        currentRole.value = getRoleName(response.data.tokens?.role)
        localStorage.setItem('role', currentRole.value)
        handleSuccess(response, {
          successMessage: 'Account created successfully !',
          redirectRoute: '/dashboard/overview',
          router,
        })
      }
      return response

    } catch (err) {
      console.error(err.response?.data || err.message)
    }
  }

  const login = async (credentials) => {
    try {
      const response = await api.post('/login/', credentials)

      isAuthenticated.value = true
      token.value = response.data.tokens.access
      localStorage.setItem('token', response.data.tokens.access)
      localStorage.setItem('refreshToken', response.data.tokens.refresh)
      currentRole.value = getRoleName(response.data.tokens.role)
      localStorage.setItem('role', currentRole.value)
      router.push('/dashboard/overview')
      Notify.create({
        type: 'positive',
        message: 'Login Successful',
        position: 'top',
      })
      return response
    } catch (err) {
      // processErrors(err.response?.data || err.message)
      // console.log(err)
      Notify.create({
        type: 'negative',
        message: err.response.data?.message || 'Login Failed',
        position: 'top',
      })
    }

  }

  const forget = async (credentials) => {
    try {
      const response = await api.post('password-reset/', credentials)
      localStorage.setItem('userEmail', credentials.email)
      // processErrors
      return response
    } catch (err) {
      processErrors(err.response?.data || err.message)
    }
  }
  const resetPassword = async (credentials) => {
    try {
      const response = await api.post('password-reset/confirm/', credentials)

      return response
    } catch (err) {
      processErrors(err.response?.data || err.message)
    }
  }
  const changePassword = async (credentials) => {
    try {
      const response = await api.post('change-password/', credentials)

      return response
    } catch (err) {
      processErrors(err.response?.data || err.message)
    }
  }

  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken')
      await api.post('/logout/', {
        refresh: refreshToken,
      })
      currentUser.value = null
      isAuthenticated.value = false
      currentRole.value = null
      token.value = null
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('role')
      router.push('/auth/login')
    } catch (err) {
      console.error('Logout failed:', err)
      throw err
    }
  }

  const getPreferences = async () => {
    try {

      const response = await api.get('notifications-preferences/')


      return response
    } catch (err) {
      processErrors(err.response.data.detail)
    }
  }
  const postPreferences = async (permissions, obtainedId) => {
    try {
      if (obtainedId) {
        const response = await api.patch(`notifications-preferences/${obtainedId}/`, permissions)
        return response
      } else {
        const response = await api.post('notifications-preferences/', permissions)
        return response
      }
    } catch (err) {
      processErrors(err.response.data.detail)
    }
  }

  const getUser = async ()=>{
    try {
      const response = await api.get('profile/')
      return response
    } catch (err) {
      processErrors(err.response?.data || err.message)
    }
  }

  const updateUser = async (credentials)=>{
    try {
      const response = await api.patch('profile/', credentials)
      Notify.create({
        type: 'positive',
        message: 'Profile Updated Successfully!',
        position: 'top',
      })
      return response
    } catch (err) {
      console.error(err)
    }
  }


  return {
    currentUser,
    isAuthenticated,
    currentRole,
    token,
    newUserId,
    login,
    signup,
    verifyOTP,
    logout,
    forget,
    changePassword,
    resetPassword,
    getUser,
    updateUser,
    getPreferences,
    postPreferences,

  }
})
