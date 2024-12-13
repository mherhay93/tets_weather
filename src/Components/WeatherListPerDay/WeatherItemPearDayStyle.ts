import styled from "styled-components";

export const PerDayContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
`
export const PerDayItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid purple;
    border-radius: 12px;
    padding: 20px;

    &.active {
        background: rgba(128, 0, 128, 0.37);
        color: aliceblue;
        transition: all .3s;
    }
`