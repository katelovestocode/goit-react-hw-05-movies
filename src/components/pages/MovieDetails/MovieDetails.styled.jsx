
import styled from 'styled-components';
import { NavLink } from "react-router-dom"


export const Container = styled.div`
display: flex;
gap: 30px;
`
export const Content = styled.div`
padding: 20px;
width: 500px;
`

export const GenresContainer = styled.div`
display: flex;
align-items: center;
flex-direction: row;
gap: ${p => p.theme.space[4]}px;
`

export const Navigation = styled.nav`
display: flex; 
gap: ${p => p.theme.space[6]}px;
`

export const NavItem = styled(NavLink)`
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;
  border-radius:${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};

  &.active {
    background-color: ${p => p.theme.colors.darkAccent};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.darkAccent};
  }
`;

export const NavItemBack = styled(NavLink)`
width: 80px;
text-decoration: none;
color: ${p => p.theme.colors.white};
background-color: ${p => p.theme.colors.accentColor};
padding: ${p => p.theme.space[4]}px;
border-radius:${p => p.theme.radii.normal};

  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.darkAccent};
`
export const Title = styled.h3`
margin-bottom: ${p => p.theme.space[4]}px;
font-size:  ${p => p.theme.fontSizes.l};
`
export const Score = styled.p`
margin-bottom: ${p => p.theme.space[4]}px;
font-size:  ${p => p.theme.fontSizes.sm};
`
export const Overview = styled.p`
margin-bottom: ${p => p.theme.space[4]}px;
font-size:  ${p => p.theme.fontSizes.sm};
`
export const GenresTitle = styled.h4`
margin-bottom: ${p => p.theme.space[4]}px;
font-size:  ${p => p.theme.fontSizes.ml};`

export const GenresItem = styled.p`
margin-bottom: ${p => p.theme.space[4]}px;
font-size:  ${p => p.theme.fontSizes.ml};`
