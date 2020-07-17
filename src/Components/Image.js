import React from 'react'

export default function Image(props) {
    const { data } = props;
    // console.log(data)
    return (

        <div>
            
            <h1>{data.date}</h1>
            <h2>{data.title}</h2>
            <img src={data.url} />
            <h3>{data.copyright}</h3>
            <p>{data.explanation}</p>

        </div>
    )
}