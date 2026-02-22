/// <reference types="vite/client" />
const API_URL = import.meta.env.VITE_API_URL || 'https://wiseappsdev.cloud/farmer-app';

export type FarmStatus = 'pending' | 'verified';
export type FarmerStatus = 'pending' | 'processing' | 'approved' | 'denied';

export interface FarmerCreate {
    full_name: string;
    nin: string;
    email: string;
    dob: string;
    gender: string;
    phone_number: string;
    image_url?: string | null;
    personal_address: string;
    personal_state: string;
    personal_lga: string;
    farm_address: string;
    farm_state: string;
    farm_lga: string;
    farm_size: number;
    crop_type: string;
    livestock_type: string;
    farm_status?: FarmStatus;
    farmer_status?: FarmerStatus;
}

export interface FarmerOut extends FarmerCreate {
    id: number;
    user_id: number;
    farmer_id: string;
}

export interface Token {
    access_token: string;
    token_type: string;
}

class ApiService {
    private get token(): string | null {
        return localStorage.getItem('access_token');
    }

    private async request<T>(path: string, options: RequestInit = {}): Promise<T> {
        const url = `${API_URL}${path}`;
        const headers = new Headers(options.headers);

        if (this.token) {
            headers.set('Authorization', `Bearer ${this.token}`);
        }

        if (!(options.body instanceof FormData) && !headers.has('Content-Type')) {
            headers.set('Content-Type', 'application/json');
        }

        const response = await fetch(url, {
            ...options,
            headers,
        });

        if (response.status === 401) {
            this.logout();
            window.location.href = '/login';
            throw new Error('Session expired. Please log in again.');
        }

        if (!response.ok) {
            const error = await response.json().catch(() => ({ detail: 'An error occurred' }));
            throw new Error(error.detail || response.statusText);
        }

        return response.json();
    }

    async login(formData: FormData): Promise<Token> {
        // Note: FastAPI OAuth2 expect form-data for login
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ detail: 'Login failed' }));
            throw new Error(error.detail || 'Login failed');
        }

        const data: Token = await response.json();
        localStorage.setItem('access_token', data.access_token);
        return data;
    }

    logout(): void {
        localStorage.removeItem('access_token');
    }

    getFarmers(skip = 0, limit = 100): Promise<FarmerOut[]> {
        return this.request<FarmerOut[]>(`/admin/farmers/?skip=${skip}&limit=${limit}`);
    }

    getFarmer(id: number): Promise<FarmerOut> {
        return this.request<FarmerOut>(`/admin/farmers/${id}`);
    }

    createFarmer(data: FarmerCreate): Promise<FarmerOut> {
        return this.request<FarmerOut>('/admin/farmers/', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    updateFarmer(id: number, data: Partial<FarmerCreate>): Promise<FarmerOut> {
        return this.request<FarmerOut>(`/admin/farmers/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    deleteFarmer(id: number): Promise<void> {
        return this.request<void>(`/admin/farmers/${id}`, {
            method: 'DELETE',
        });
    }

    async uploadFarmers(file: File): Promise<any> {
        const token = localStorage.getItem('access_token'); // Use 'access_token' as per other methods
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch(`${API_URL}/admin/farmers/upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData,
        });

        if (response.status === 401) {
            this.logout();
            window.location.href = '/login';
            throw new Error('Session expired. Please log in again.');
        }

        if (!response.ok) throw new Error('Upload failed');
        return response.json();
    }

    getMyData(): Promise<FarmerOut> {
        return this.request<FarmerOut>('/me/farmer');
    }
}

export const api = new ApiService();
