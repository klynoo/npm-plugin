/**
 * Dropdown Component
 * -------------------
 * Ce composant React affiche un menu déroulant personnalisable.
 * Il permet à l'utilisateur de sélectionner une option depuis une liste.
 * Il supporte la direction d'ouverture (haut/bas), le style personnalisable,
 * la sélection contrôlée, les options désactivées et se ferme automatiquement
 * lorsqu'on clique à l'extérieur.
 */

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// Props du composant Dropdown
interface DropdownProps {
  options: { label: string; value: string; disabled?: boolean }[]; // Liste des options à afficher
  onSelect: (value: string) => void; // Callback appelé quand une option est sélectionnée
  label?: string; // Label affiché au-dessus du bouton (par défaut : "Select an option")
  direction?: "down" | "up"; // Direction d'ouverture du menu ("down" ou "up")
  buttonStyle?: React.CSSProperties; // Style personnalisé pour le bouton
  itemStyle?: React.CSSProperties; // Style personnalisé pour chaque option
  selectedValue?: string; // Valeur sélectionnée actuelle (mode contrôlé)
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  label = "Select an option",
  direction = "down",
  buttonStyle,
  itemStyle,
  selectedValue,
}) => {
  const [isOpen, setIsOpen] = useState(false); // État d'ouverture du menu
  const dropdownRef = useRef<HTMLDivElement>(null); // Référence pour détecter les clics en dehors

  // Ouvre ou ferme le menu
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Gère la sélection d'une option
  const handleSelect = (value: string, disabled?: boolean) => {
    if (disabled) return;
    onSelect(value);
    setIsOpen(false);
  };

  // Ferme le menu si clic en dehors
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Attache le listener au montage, et le retire au démontage
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      {/* Label du menu déroulant */}
      <DropdownLabel>{label}</DropdownLabel>

      {/* Bouton principal */}
      <DropdownButton
        onClick={toggleDropdown}
        style={buttonStyle}
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
      >
        {selectedValue || label}
        <Arrow>{isOpen ? "▲" : "▼"}</Arrow>
      </DropdownButton>

      {/* Liste déroulante des options */}
      {isOpen && (
        <DropdownList direction={direction}>
          {options.map(({ label, value, disabled }, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleSelect(value, disabled)}
              disabled={disabled}
              style={itemStyle}
            >
              {label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

/* -------------------- Styles -------------------- */

// Conteneur global du dropdown
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
`;

// Label au-dessus du bouton
const DropdownLabel = styled.span`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

// Bouton qui affiche l'option sélectionnée
const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Flèche de direction ▲ ▼
const Arrow = styled.span`
  margin-left: 8px;
`;

// Liste des options
const DropdownList = styled.ul<{ direction: "down" | "up" }>`
  position: absolute;
  top: ${({ direction }) => (direction === "down" ? "100%" : "auto")};
  bottom: ${({ direction }) => (direction === "up" ? "100%" : "auto")};
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// Item (option) dans la liste
const DropdownItem = styled.li<{ disabled?: boolean }>`
  padding: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ disabled }) => (disabled ? "#aaa" : "inherit")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "inherit" : "#f0f0f0")};
  }
`;
