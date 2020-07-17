import React from 'react'
import styled from 'styled-components'



const StyledParagraph = styled.p`
    font-size: 2rem;
    color: red;
`

const StyledCopy = styled.h3`
    font-size: 2rem;
    color: red;
`

const StyledDiv = styled.div`
    background-image: url('https://i.pinimg.com/originals/0b/24/e6/0b24e6345b7bc89683576898c21e6091.gif');
    /* background-size: cover; */
`
const StyledH1 = styled.h1` 
    color: red;
`
const StyledH2 = styled.h2` 
    color: red;
`
export default function Image(props) {
    const { data } = props;
    // console.log(data)
    return (

        <StyledDiv>

            <StyledH1>{data.date}</StyledH1>
            <StyledH2>{data.title}</StyledH2>
            <img src={data.url} />
            <StyledCopy>{data.copyright}</StyledCopy>
            <StyledParagraph>{data.explanation}</StyledParagraph>

        </StyledDiv>
    )
}