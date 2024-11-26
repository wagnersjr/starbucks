import styled from "styled-components";

export const CopoEstilo = styled.section`
position: absolute;
bottom: 1px;
right: 10rem;


a{
    text-decoration: none;
}

@media (min-width: 320px) and (max-width: 500px){
    height: 15vh;
    display: flex;
    z-index: 1;
    position: absolute;
    top: 35rem;
    right: 12rem;
   flex-direction: column;
}

img{
    @media (min-width: 320px) and (max-width: 500px) {
        width: 56px;
        height: 58px;
        
       
      
    }  
}
`