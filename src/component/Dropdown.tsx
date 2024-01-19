import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { DropdownProps } from "../types/Dropdown";
import { Theme, rootState } from "../store/type";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../styles/themes";

function Dropdown({ items, selected, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => {
    const content = document.getElementById("content");
    if (isOpen) {
      content?.classList.remove("openDropdown");
      content?.classList.add("closeDropdown");
      console.log('open')
    } else {
      content?.classList.add("openDropdown");
      content?.classList.remove("closeDropdown");
      console.log('close')
    }
    setIsOpen(!isOpen);
  };
  const onSelect = (value: string) => {
    onChange(value);
    toggleDropdown();
  };
  const theme = useSelector((state: rootState) => state.data.theme);
  useEffect(() => {
    const handleClick = (e: any) => {
      if (e.target.id === "theme") {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);
  return (
    <DropdownCon theme={theme}>
      <DropdownBody>
        <DropdownImageCon>
          <DropdownImage theme={theme}>
            <Image className={selected} />
          </DropdownImage>
        </DropdownImageCon>
        <Divider />
        <DropdownTitle width="75%">{selected}</DropdownTitle>
        <DropdownButton onClick={() => toggleDropdown()} id="dropdown">
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            id="dropdown"
          />
        </DropdownButton>
      </DropdownBody>
      <DropdownContent className="closeDropdown" id="content" theme={theme}>
        {items.map((item) => (
          <DropdownItem key={item} onClick={() => onSelect(item)}>
            <DropdownImageCon>
              <DropdownImage theme={theme}>
                <Image className={item} />
              </DropdownImage>
            </DropdownImageCon>
            <DropdownTitle width="85%">{item}</DropdownTitle>
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownCon>
  );
}

const DropdownItem = styled.div`
  width: 95%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    background-color: gray;
  }
`;

const DropdownTitle = styled.div<{ width: string }>`
  width: ${(p) => p.width};
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 5%;
`;

const DropdownImageCon = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  width: 1.2rem;
  height: 1.2rem;
`;

const DropdownImage = styled.div<{ theme: Theme }>`
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => (p.theme === "light" ? "gray" : "white")};
  border-radius: 4px;
`;

const DropdownContent = styled.div<{ theme: Theme }>`
  overflow: hidden;
  padding-top: 10px;
  background-color: ${(p) => (p.theme === "light" ? "#E5E4E2" : "#333333")};
  position: absolute;
  align-items: center;
  justify-content: center;
  border: 2px solid gray;
  border-radius: 4px;
  z-index: 10;
  flex-direction: column;
`;

const DropdownCon = styled.div<{ theme: Theme }>`
  width: 100%;
  height: 100%;
  border: 2px solid gray;
  outline: none;
  background-color: ${(p) => (p.theme === "light" ? "#E5E4E2" : "#333333")};
  font-size: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  color: ${(p) =>
    p.theme === "light" ? lightTheme.textColor : darkTheme.textColor};
`;

const DropdownButton = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const DropdownBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Divider = styled.div`
  width: 1.5px;
  height: 80%;
  background-color: gray;
`;

export default Dropdown;
