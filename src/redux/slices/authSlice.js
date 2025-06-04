import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulated API call
export const simulateLoginApi = createAsyncThunk('auth/simulateLogin', async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				Success: true,
				Code: 0,
				Message: null,
				Data: {
					PlayerId: 1765974,
					CompanyId: 194,
					PointId: 1,
					Login: 'C&R',
					Email: 'j.camilokarvajal@gmail.com',
					Barcode: 'SK31463175',
					Balance: '220.56',
					CountryId: 'COL', // For the example, let's assume 48 this is Colombia
					CurrencyId: 'COP', // For the example, let's assume 44 is COP (Colombian Peso)
					FromWeb: true,
					IsTest: false,
					DisableOneClickBet: false,
					DisableCashout: false,
					PlayerLoginRes: null,
					GambleTimeLimit: null,
					GambleTimeLimits: [],
					ChangeLogin: false,
					PersonId: 1765974,
					ShowDepositLimit: false,
					CanPlay: 1,
					AgentTitle: null,
					DepositStatus: 0,
					DisabledUntil: null,
					ResponsibleGamingInfo: null,
					AdditionalData: {
						FirstLoginPasswordChange: false,
						PassChangeRequired: false,
					},
					Code: 0,
					Message: '',
					currency: '$',
					tnc_required: null,
					token: '8f1ec175191c1c62a6148830e7db7eee',
					auth_key: 'session_id',
					last_login_at: '2025-05-28T13:28:38.000+03:00',
					refresh_token:
						'eHU3ZUZqTXplTkR5WXJhNTFLbUIwZz09LS1hWFdZTG9sbHJCa0lveFVVZzNDZzZBPT0=--5563cc741a2c97d24a882777f9b0a5b7a1412cc5',
					total_deposit_count: 0,
					reality_check_period: 0,
					is_first_login: false,
					player_login_result: null,
					loyalty_program_tier_changed: false,
				},
			});
		}, 1000); // simulate 1s API call
	});
});

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		userData: null,
		loading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(simulateLoginApi.pending, (state) => {
				state.loading = true;
			})
			.addCase(simulateLoginApi.fulfilled, (state, action) => {
				state.userData = action.payload;
				state.loading = false;
			})
			.addCase(simulateLoginApi.rejected, (state) => {
				state.loading = false;
			});
	},
});

export default authSlice.reducer;
