// import { loginProps } from "@/types/interface";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { useRouter } from 'next/navigation'

// const initialState: loginProps = {
//     msg: '',
//     user: '',
//     token: '',
//     loading: false,
//     error: ''
// };


// export const signInUser = createAsyncThunk('signInUser', async ({ email, password }: { email: string; password: string }) => {
//     const router = useRouter();

//     try {
//         const response = await fetch('http://localhost:3000/api/loginaapi', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         });

//         if (response.ok) {
//             router.push("/")
//         }else{
//             console.log("Something went wrong");
            
//         }

//         const data = await response.json();

//         return data;
//     } catch (error) {
//         throw new Error('Error during login');
//     }
// })

// const authSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         addToken: (state, action) => {
//             state.token = localStorage.getItem('token')
//         },
//         addUser: (state, action) => {
//             state.user = localStorage.getItem('user')
//         },
//         logOut: (state, action) => {
//             state.token = null;
//             state.user = null
//             localStorage.clear();
//         },

//     },

//     extraReducers: (builder) => {
//         builder.addCase(signInUser.pending, (state) => {
//             state.loading = true;
//             state.error = '';
//         });
//         builder.addCase(signInUser.fulfilled, (state, { payload: { error, msg, token, user } }) => {
//             state.loading = false;
//             if (error) {
//                 state.error = error;

//             } else {
//                 state.msg = msg;
//                 state.token = token;
//                 state.user = JSON.stringify(user);

//                 localStorage.setItem('user', JSON.stringify(user));
//                 localStorage.setItem('token', token);

//             }
//         });
//         builder.addCase(signInUser.rejected, (state, action) => {
//             state.loading = true;
//             state.error = action.error.message || 'Request failed';
//         });
//     }

// })

// const { addToken, addUser, logOut } = authSlice.actions;
// export default authSlice.reducer