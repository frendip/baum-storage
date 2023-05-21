import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IUser, tokenType} from '../../types/types';
import {UserService} from "../../API/UserSrvice";


export const fetchMe = createAsyncThunk<IUser, tokenType>(
    'user/fetchMe',
    async (token, {rejectWithValue}) => {
        try {
            const response = await UserService.getMe(token);
            const data = await response.json();
            console.log(data)

            if (!response.ok) {
                throw new Error(data.message);
            }

            return data;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    },
);

enum Status {
    WAITING = 'waiting',
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface userState {
    user: IUser | null
    status: Status;
}

const initialState: userState = {
    user: null,
    status: Status.WAITING,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMe.fulfilled, (state, action) => {
                state.status = Status.SUCCESS;
                state.user = action.payload
            })
            .addCase(fetchMe.pending, (state) => {
                state.status = Status.LOADING;
                state.user = null
            })
            .addCase(fetchMe.rejected, (state) => {
                state.status = Status.ERROR;
                state.user = null
            })
    }
})


export const {} = userSlice.actions;
export default userSlice.reducer;
