import { useState } from "react"


export const useCounter = ( initialValue = 1 ) => {

    const [ counter, setCounter ] = useState( initialValue )

    const increment = ( e, value = 1 ) => {
        e.preventDefault();
        setCounter( counter + value );
    }

    const decrement = ( e, value = 1 ) => {
        e.preventDefault();
        if ( counter === 0 ) return;
        setCounter( counter - value );
    }

    return {
        counter,
        increment,
        decrement,
    }

}