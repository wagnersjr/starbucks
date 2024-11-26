import styled from "styled-components";

export const MainStyle = styled.main`
display: flex;

position: relative;

@media (min-width: 320px) and (max-width: 500px){
    flex-direction: column;
   
    
    
}




h2{
    font-weight: 400;
    font-size: 64px;
    font-family: "Inter", sans-serif;

    @media (min-width: 320px) and (max-width: 500px){
    font-size: 32px;
    font-weight: 600;
}
    
}

h1{
    font-weight: 400;
    font-size: 64px;
    font-family: "Poppins", serif;

    @media (min-width: 320px) and (max-width: 500px){
    font-size: 32px;
    font-weight: 600;
    line-height: 30px;
    
    
}
    

    span{
        font-weight: 700;
        color:#037143;
        font-family: "Poppins", serif;
        
        @media (min-width: 320px) and (max-width: 500px){
        font-size: 32px;
        
       
}
    }
}

p{
    font-size: 24px;
    font-weight: 400;
    width:60%;
    font-family: "Poppins", serif;

    @media (min-width: 320px) and (max-width: 500px){
    font-size: 16px;
    width: auto;
    text-align: center;
    margin-top: 20px;
}
    
    
}

button{
    color: white;
    background-color: #037143;
    font-family: "Inter", sans-serif;
    border: none;
    padding:15px 50px;
    border-radius: 30px;
    font-weight: 700;
    margin-top: 20px;
    

    @media (min-width: 320px) and (max-width: 500px){
        padding:10px 20px;
        
}

}

`

export const Section = styled.section`
position: relative;

height: 80vh;
display: flex;
flex-direction: column;
justify-content: end;

@media (min-width: 320px) and (max-width: 500px){
    align-items: end;
    
}

    

.elipse{
    @media (min-width: 320px) and (max-width: 500px){
        width: 234px; 
        height: 200px;
    }
}
    




`
export const Copo = styled.img`
position: absolute;
left: 100px;
bottom: 70px;


@media (min-width: 320px) and (max-width: 500px){
    width: 220px;
    height: 228px;
    bottom: 15px;
    left: 17rem;
  
}

`

export const Info = styled.section `

margin-left: 116px;
position: relative;

@media (min-width: 320px) and (max-width: 500px){
margin: 100px 30px;
text-align: center;


}


`
