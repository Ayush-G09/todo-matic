import styled, { CSSObject } from "styled-components";

export const Card = styled.div`
  width: 80%;
  height: 70%;
  background: rgb(76, 192, 238);
  background: linear-gradient(
    305deg,
    rgba(76, 192, 238, 1) 0%,
    rgba(20, 100, 199, 1) 100%
  );
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;

export const ProgressCardCon = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: white;
`;

export const CardHeading = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  color: white;
  height: 20%;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

export const Categories = styled.div<{ style: CSSObject }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  position: absolute;
  color: black;
  ${(p) => p.style}
`;

export const CardMessage = styled.div``;

export const CategoriesIcon = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spacer = styled.div`
  height: 10%;
`;

export const CategoriesCon = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const InfoCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 70%;
  width: 100%;
  justify-content: center;
`;

export const Slider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export const SliderBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  opacity: 0.5;
`;

export const SliderBar = styled.div<{ style: CSSObject }>`
  height: 100%;
  background-color: white;
  position: absolute;
  ${(p) => p.style}
`;

export const ProgressTitle = styled.div``;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;
`;

export const ProgressCon = styled.div`
  width: 60%;
  height: 50%;
  gap: 10px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Percentage = styled.div``;
