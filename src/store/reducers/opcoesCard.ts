import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInfo } from '../../types/userInfo'

interface UserState {
  userInfos: UserInfo[]
}

const initialState: UserState = {
  userInfos: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo[]>) => {
      state.userInfos = action.payload
    },
    updateUserInfo: (
      state,
      action: PayloadAction<{ index: number; updatedUserInfo: UserInfo }>
    ) => {
      const { index, updatedUserInfo } = action.payload
      state.userInfos = state.userInfos.map((userInfo, i) =>
        i === index ? updatedUserInfo : userInfo
      )
    },
    addUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfos.push(action.payload)
    }
  }
})

export const { setUserInfo, updateUserInfo, addUserInfo } = userSlice.actions
export default userSlice.reducer
