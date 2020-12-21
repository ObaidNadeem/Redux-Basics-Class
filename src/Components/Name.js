import React from 'react'
import { useSelector , useDispatch } from 'react-redux'

export const Name = () => {

    const name = useSelector(state => state.name)
    const condition = true

    const dispatch = useDispatch()

    function action() {
        dispatch({type: "CHANGE_NAME"})
    }
                               
    return (
        <div>
            {name}
            <button onClick={()=> action()} > change name </button>
        </div>
    )
}