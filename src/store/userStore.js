import create from 'zustand';
import { persist } from 'zustand/middleware';

export const userStore = create((set) => ({
    user: null,
    setUserInfo: (user) => {
        console.log(user);
        set((state) => ({
            user,
        }));
    },
    clearUserInfo: () => {
        set((state) => ({
            user: null,
        }));
    },
    updateBalance: (balance) => {
        set((state) => ({
            user: {
                ...state.user ? state.user : {
                    id: '',
                    username: '',
                    image: '',
                    balance: 0,
                    birthdate: '',
                    roles: [],
                    nickname: '',
                },
                balance,
            },
        }));
    },
}), {
    name: 'user',
    getStorage: () => localStorage,
});
