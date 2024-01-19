import styled from "styled-components";

export const HeaderView = styled.div`
    height: 7%;
    width: 100%;
    display: flex;
`;

export const HeaderCon = styled.div<{width: string, color?: string}>`
    height: 100%;
    width: ${p => p.width};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 500;
    color: ${(p) => p.color};
`;

export const HeaderIcon = styled.div`
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
