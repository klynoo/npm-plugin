# 🔽 Custom Dropdown Component (React + Styled Components)

Un composant `Dropdown` personnalisable en React utilisant `styled-components`.  
Il prend en charge les options désactivées, la personnalisation du style, et la direction d'ouverture.

---

## ✨ Fonctionnalités

- Sélection d’option avec `onSelect`
- Personnalisation du bouton et des items (`buttonStyle`, `itemStyle`)
- Support des options désactivées
- Fermeture automatique lors d’un clic à l’extérieur
- Choix de direction d’ouverture (`up` ou `down`)

---

## 🔧 Prérequis

Avant de commencer, assurez-vous d’avoir :

- **Node.js** version `>= 16.x` installé : [Télécharger Node.js](https://nodejs.org/)
- **npm** installé
- Un éditeur de code moderne comme **[Visual Studio Code](https://code.visualstudio.com/)** (recommandé)

---

## 🚀 Installation du projet

**Installer les dépendances** :

```bash
npm i npm-bk
```

### 📦 Installation

```bash
npm install styled-components
```

> Assurez-vous que `styled-components` est installé et configuré dans votre projet React.

### 🧱 Exemple de base

```tsx
import Dropdown from "./Dropdown";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2", disabled: true },
  { label: "Option 3", value: "option3" },
];

const handleSelect = (value: string) => {
  console.log("Selected:", value);
};

<Dropdown
  label="Choose an item"
  options={options}
  onSelect={handleSelect}
  direction="down"
/>;
```

---

## 📥 Props

| Nom             | Type                                                     | Description                                         | Par défaut           |
| --------------- | -------------------------------------------------------- | --------------------------------------------------- | -------------------- |
| `options`       | `{ label: string, value: string, disabled?: boolean }[]` | Liste des options à afficher dans le menu déroulant | **Requis**           |
| `onSelect`      | `(value: string) => void`                                | Callback appelé quand une option est sélectionnée   | **Requis**           |
| `label`         | `string`                                                 | Label affiché au-dessus du bouton                   | `"Select an option"` |
| `direction`     | `"up"` \| `"down"`                                       | Direction d'ouverture du menu déroulant             | `"down"`             |
| `buttonStyle`   | `React.CSSProperties`                                    | Style personnalisé pour le bouton                   | `undefined`          |
| `itemStyle`     | `React.CSSProperties`                                    | Style personnalisé pour chaque item                 | `undefined`          |
| `selectedValue` | `string`                                                 | Valeur actuellement sélectionnée (si contrôlé)      | `undefined`          |

---

## 🎨 Personnalisation

Vous pouvez passer des styles CSS personnalisés à `buttonStyle` et `itemStyle` :

```tsx
<Dropdown
  buttonStyle={{ backgroundColor: "black", color: "white" }}
  itemStyle={{ fontSize: "14px" }}
/>
```

---

## 🧪 Accessibilité

- Utilisation de `aria-haspopup` et `aria-expanded` sur le bouton.
- Fermeture du menu au clic à l’extérieur pour améliorer l’expérience utilisateur.
