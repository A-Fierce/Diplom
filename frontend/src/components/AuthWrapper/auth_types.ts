export interface IUserInfo {
				id: number;
				username: string;
				email: string;
				first_name: string;
				last_name: string;
				is_active: boolean;
				is_staff: boolean;
				auth_token: string;
				count_files:number
				total_size?:number
}