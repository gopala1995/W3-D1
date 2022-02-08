import styled from "styled-components";


export const Button  = styled.button`
          color:${({theme})=>(theme==="light"? "coral":"red")};
          height: 40px;
          width: 100px;
          background: ${({theme})=>(theme==="light"? "blue":"teal")};
          border: 0px;
          border-radius: 10px;
          marginTop: 20px,`;
