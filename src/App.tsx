import Count from './components/Count';
import useCountStore, { useNameStore } from './store';
const App = () => {
    //render optimizations
    const count = useCountStore((state) => state.count);
    const increment = useCountStore((state) => state.increment);
    const data = useNameStore((state) => state);
    const { name, changeName } = data;
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => increment(2)}>increment</button>
            <Count />
            <h2>{name}</h2>
            <button onClick={() => changeName('Tran Van Dung')}>Change Name</button>
        </div>
    );
};

export default App;
