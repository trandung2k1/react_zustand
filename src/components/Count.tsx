import useCountStore from '../store/count';

const Count = () => {
    const count = useCountStore((state) => state.count);
    const dispatch = useCountStore((state) => state.dispatch);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: 'increment', qty: 5 })}>Click me</button>
        </div>
    );
};

export default Count;
