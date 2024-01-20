import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { DropdownProps } from "../types/Dropdown";
import { rootState } from "../store/type";
import { useSelector } from "react-redux";
import { Divider, Image, DropdownBody, DropdownButton, DropdownCon, DropdownContent, DropdownImage, DropdownImageCon, DropdownTitle } from "../styles/Dashboard";
import { DropdownItem } from "../styles/Dropdown";

function Dropdown({ items, selected, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => {
    const content = document.getElementById("content");
    if (isOpen) {
      content?.classList.remove("openDropdown");
      content?.classList.add("closeDropdown");
    } else {
      content?.classList.add("openDropdown");
      content?.classList.remove("closeDropdown");
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
        <DropdownTitle>{selected}</DropdownTitle>
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
            <DropdownTitle>{item}</DropdownTitle>
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownCon>
  );
}

export default Dropdown;
