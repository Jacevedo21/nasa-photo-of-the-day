import React from 'react'

export default function Explanation() {
    const { ooga } = props;
    console.log('explanation console', ooga)
    return (

        <div>
            <p setData={data.explanation} />
        </div>
    )
}
