import styled from "styled-components";
import {Link} from "react-router-dom"

export const HeaderStyle = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
height: 20vh;
padding: 52px 116px;
`
export const StyleLink = styled(Link)`
  text-decoration: none;
  color: #1e3932;
  
   &:hover{
       color: #2b8600;
   }
`;

export const Ul = styled.ul`
display: flex;
width: 40vw;
justify-content: space-around;
list-style: none;
font-family: "Poppins", serif;
font-weight: 400;
`

