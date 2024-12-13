import styled from "styled-components";

export const MainWrapper  = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 80px;
    
    .weather_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .city {
        font-size: 60px;
        font-weight: bold;
    }
    
    .deg {
        font-size: 40px;
    }
    
    .img {
        width: 100px;
    }
    
    .description {
        font-size: 24px;
        font-weight: 500;
    }
`