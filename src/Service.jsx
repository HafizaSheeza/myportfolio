import { useState } from "react";
import Sdata from "./Sdata";
import { NavLink } from "react-router-dom";
import { Button } from "./Styles/Button";
import styled from "styled-components";
const Service = () => {
    const [Data, setData] = useState(Sdata)
    return (<>
        <Wrapper className="section">
            <h2 className="common-heading">
                Top  Skills
            </h2>
            <div className="container grid grid-three-columns">
                {
                    Data.map((curElem) => {
                        const { id, imgsrc, title, description } = curElem;
                        return (<>
                            <div key={id} className="card">
                                <figure>
                                    <img src={imgsrc} alt="" />
                                </figure>
                                <div className="card-data">
                                    <h3>{title}</h3>
                                </div>
                            </div></>)
                    })
                }
            </div>

        </Wrapper>
    </>)

}
const Wrapper = styled.section`
padding:3rem 0;
.common-heading{
    padding:3rem 0;  
    font-weight:600;
    font-size:3.8rem;
}
.container{
    max-width:120rem;
    margin:0 auto;

}
.grid{
    display:grid;
    gap:9rem;
}
.grid-three-columns{
    grid-template-columns:repeat(4,1fr)
}
.card{
    border:0.1rem solid rgb(170 170 170/40%);
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255/30%);
  
    .card-data{
        padding:1.5rem 2rem;
    }
    h3{
        margin:2rem auto;
        text-align:center;
        font-weight:300;
        font-size:2.4rem;
    
    }
    .btn{
        margin:2rem auto;
        background-color:rgb(0 0 0/0%);
        border:0.1rem solid rgb(98 84 243);
        display:flex;
        justify-content:center;
        align-items:center;
        &:hover{
            background-color:rgb(98 84 243);
            transition:all 0.5s linear;
            color:#fff;
        }
        a{
            color:rgb(98 84 243);

        }
        &:hover a{
            color:#fff;
            
            
        }
    }
}

figure{
    width:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    overflow:hidden;
    transition:all 0.5s linear;
    &::after{
        content:"";
        position:absolute;
        top:0px;left:0px
           width:100%;
           height:100%;
           background-color:rgba(0,0,0,0.5);
           transition:all 0.2s linear;
           cursor:pointer;
    
    }
    &:hover::after{
        width:100%;
    }
    &:hover img{
        transform:scale(1.2);
    
    }
    img{
        max-width:90%;
        height:20rem;
        margin-top:1.5rem;
        transition:all 0.2s linear;
    }
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-columns {
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-columns,
    .grid-three-columns {
      grid-template-columns: 1fr;
    }

`;
export default Service;