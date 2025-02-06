// import React, { useReducer } from 'react'

// const reducer = (count, action) => {
//     switch (action.type) {
//         case 'increment':
//             return count + 1
//         case 'decrement':
//             return count - 1
//         default:
//             return count
//     }
// }

// const UseReducer = () => {

//     const [count, dispatch] = useReducer(reducer, 10)

//     return (
//         <>
//             <h1>{count}</h1>
//             <input type="text"  />
//             <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//             <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//         </>
//     )
// }

// export default UseReducer






















import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'name': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'changed': {
            return {
                name: action.nextName,
                age: state.age
            };
        }
        default:
            return state;
    }
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { name: "", age: 12 });

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    placeholder='Full Name'
                    value={state.name}
                    onChange={(e) => dispatch({ type: "changed", nextName: e.target.value })}
                />
                <button
                    type="button"
                    onClick={() => dispatch({ type: "name" })}
                >
                    Increment Age
                </button>
                <p>HELLO, my name is: {state.name} and age is : {state.age}</p>
            </form>
        </div>
    );
};

export default UseReducer;
