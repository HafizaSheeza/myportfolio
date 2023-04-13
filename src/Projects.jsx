import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Projects = () => {
    return (
        <Wrapper>
            <h2 className="common-heading">Project</h2>
            <div className="container">

                <NavLink to="https://reactwebsites.netlify.app/">
                    <div className='card-project'>

                        <figure  >
                            <img src="./Images/project.PNG" alt="hi" />
                            <figcaption className='caption'>Ecommerce Project with React</figcaption>
                        </figure>

                    </div>
                </NavLink>
                <div></div>
                <div></div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 8rem 0;
    
    .card-project{
       
        background-color:rgb(98 84 243);
        /* padding: 6rem; */
        max-width: 80%;
        margin: auto;
        border-radius: 1rem;
    }
    figure{
        display: flex;
     flex-direction: column;
   place-items: center;
   justify-content: center;
   place-content: center;
        max-width: 100%;
        img{
            width: 100%;
            height: 100%;
            padding: 2rem;
        }
        .caption{
            color: white;
            padding-bottom: 1rem;
        }
    }
`
export default Projects
