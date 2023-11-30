import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
type State = {
    count: number;
};

type Actions = {
    increment: (qty: number) => void;
    decrement: (qty: number) => void;
};

export const useCountStore = create<State & Actions>()(
    devtools((set) => ({
        count: 0,
        increment: (qty: number) =>
            set((state) => ({ count: state.count + qty }), false, 'count/increment'),
        decrement: (qty: number) =>
            set((state) => ({ count: state.count - qty }), false, 'count/decrement'),
    })),
);

export const useNameStore = create<{ name: string } & { changeName: (name: string) => void }>()(
    devtools((set) => ({
        name: 'Dung',
        changeName: (name: string) => set(() => ({ name: name }), false, 'name/changeName'),
    })),
);

export default useCountStore;
