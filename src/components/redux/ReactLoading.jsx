import React from 'react'
import ReactLoading from 'react-loading';

export const Loading = ({ type, color}) => {
    return (
        <div>
            <ReactLoading type={"bars"} color={"#011834"} height={'20%'} width={'20%'} />
        </div>
    )
}
