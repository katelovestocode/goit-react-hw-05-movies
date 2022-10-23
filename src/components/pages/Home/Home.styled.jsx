import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const List = styled.ul`
display: flex;
flex-direction: column;
`

export const ItemLink = styled(NavLink)`
padding: 10px;
font-size:  ${p => p.theme.fontSizes.sm};
font-weight: ${p => p.theme.fontWeights.bold};
text-decoration: none;
color:  ${p => p.theme.colors.darkAccent}`

export const Container = styled.div`
margin-left: ${p => p.theme.space[5]}px;
`

export const Title = styled.h1`
margin-bottom: ${p => p.theme.space[4]}px;
color:  ${p => p.theme.colors.accentColor};
`