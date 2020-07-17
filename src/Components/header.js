import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    background-color: lightblue;
    display: flex;
    justify-content: space-between;
    font-size: 3rem;
    background-image: url('https://giffiles.alphacoders.com/165/16571.gif');
    background-size: cover;
    color: red;
`
const StyledAnchor = styled.a`
padding: 2% 0;
`

export default function Header() {
    return (
        <StyledHeader>
            <p>Created by Your's Truly: Jumbo </p>
            <StyledAnchor href="#" target='_blank'> About Muah</StyledAnchor>
        </StyledHeader>
    )
}
