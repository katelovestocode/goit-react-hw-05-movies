import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const List = styled.ul`
display: flex;
flex-direction: column;`

export const ItemLink = styled(NavLink)`
font-size: 22px;
font-weight: ${p => p.theme.fontWeights.bold};
text-decoration: none;
color:  ${p => p.theme.colors.darkAccent};
padding: 10px 0 10px 0;
margin-left: ${p => p.theme.space[5]}px;
`

export const SearchForm = styled.form`
 margin-top: ${p => p.theme.space[5]}px;
 display: flex;
 align-items: center;
 max-width: 400px;
 margin-left: ${p => p.theme.space[5]}px;
 `

 export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 40px;
  font-size: 20px;
  border-radius:${p => p.theme.radii.normal};
  border-color:  ${p => p.theme.colors.darkAccent};
  padding-left:  ${p => p.theme.space[2]}px;
  padding-right:  ${p => p.theme.space[2]}px;
  margin-right: 20px;
  color: ${p => p.theme.colors.accentColor};
  
 `

export const Button = styled.button`
  display: inline-block;
  width: 80px;
  height: 40px;
  border-radius:${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.accentColor};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${p => p.theme.colors.darkAccent};
  }
  `
 
