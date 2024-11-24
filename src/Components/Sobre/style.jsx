import styled from "styled-components";

export const Section = styled.section`
  

  h3 {
    font-family: "Inter", sans-serif;
    font-size: 24px;
    font-weight: 700;
    
  }

  h2 {
    font-family: "Poppins", serif;
    font-size: 64px;
    font-weight: 400;
    
  }

  p {
    font-family: "Poppins", serif;
    font-size: 24px;
    font-weight: 400;
    width: 40vw;
  }

  button {
   color: white;
    background-color: #037143;
    font-family: "Inter", sans-serif;
    border: none;
    padding: 15px 50px;
    border-radius: 30px;
    font-weight: 700;
    margin-top: 20px;
  }
`;

export const Container = styled.section`
height: 80vh;
padding: 0 116px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
