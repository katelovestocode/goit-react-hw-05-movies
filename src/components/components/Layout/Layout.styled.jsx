import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: ${p => p.theme.space[5]}px;
padding: 30px;
`
export const Header = styled.header`
padding: 40px;
background-color: ${p => p.theme.colors.ivoryLight};
border-color:  ${p => p.theme.colors.darkAccent};
border-bottom:  ${p => p.theme.borders.normal};
`

export const Navigation = styled.nav`
display: flex; 
gap: 60px;
`
export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;
  border-radius:${p => p.theme.radii.normal};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size:  ${p => p.theme.fontSizes.sm};
  background-color: ${p => p.theme.colors.accentColor};
  color: ${p => p.theme.colors.white};

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