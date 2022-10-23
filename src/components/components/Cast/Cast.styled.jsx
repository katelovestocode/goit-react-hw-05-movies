
import styled from 'styled-components';
import { NavLink } from "react-router-dom"


export const Container = styled.div`
  max-width: 1200px;
  padding: ${p => p.theme.space[2]}px;
  margin-left: auto;
  margin-right: auto;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: ${p => p.theme.space[0]}px;
  list-style: none;
  gap: 10px;
`


export const ListItem = styled.li`
 flex-basis: calc((100% - 20px) / 3);
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;

`
export const Image = styled.img`
margin-bottom: 10px;

`
export const Name = styled.h3`
margin-bottom: 10px;

`