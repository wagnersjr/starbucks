import styled from "styled-components";

export const MainStyle = styled.main`
display: flex;
height: 80vh;


h2{
    font-weight: 400;
    font-size: 64px;
    font-family: "Inter", sans-serif;
    
}

h1{
    font-weight: 400;
    font-size: 64px;
    font-family: "Poppins", serif;
    

    span{
        font-weight: 700;
        color:#037143;
        font-family: "Poppins", serif;
    }
}

p{
    font-size: 24px;
    font-weight: 400;
    width:60%;
    font-family: "Poppins", serif;
    
    
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
}

`

export const Section = styled.section`
position: relative;

height: 80vh;
display: flex;
flex-direction: column;
justify-content: end;



`
export const Copo = styled.img`
position: absolute;
left: 100px;
bottom: 70px;

`

export const Info = styled.section `

margin-left: 116px;
position: relative;

`
