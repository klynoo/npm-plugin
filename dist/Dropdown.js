"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var Dropdown = function (_a) {
    var options = _a.options, onSelect = _a.onSelect, _b = _a.label, label = _b === void 0 ? "Select an option" : _b, _c = _a.direction, direction = _c === void 0 ? "down" : _c, buttonStyle = _a.buttonStyle, itemStyle = _a.itemStyle, selectedValue = _a.selectedValue;
    var _d = (0, react_1.useState)(false), isOpen = _d[0], setIsOpen = _d[1];
    var dropdownRef = (0, react_1.useRef)(null);
    var toggleDropdown = function () { return setIsOpen(function (prev) { return !prev; }); };
    var handleSelect = function (value, disabled) {
        if (disabled)
            return;
        onSelect(value);
        setIsOpen(false);
    };
    var handleOutsideClick = function (event) {
        if (dropdownRef.current &&
            !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    (0, react_1.useEffect)(function () {
        document.addEventListener("mousedown", handleOutsideClick);
        return function () {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    return ((0, jsx_runtime_1.jsxs)(DropdownContainer, { ref: dropdownRef, children: [(0, jsx_runtime_1.jsx)(DropdownLabel, { children: label }), (0, jsx_runtime_1.jsxs)(DropdownButton, { onClick: toggleDropdown, style: buttonStyle, "aria-haspopup": "true", "aria-expanded": isOpen, type: "button", children: [selectedValue || label, (0, jsx_runtime_1.jsx)(Arrow, { children: isOpen ? "▲" : "▼" })] }), isOpen && ((0, jsx_runtime_1.jsx)(DropdownList, { direction: direction, children: options.map(function (_a, index) {
                    var label = _a.label, value = _a.value, disabled = _a.disabled;
                    return ((0, jsx_runtime_1.jsx)(DropdownItem, { onClick: function () { return handleSelect(value, disabled); }, disabled: disabled, style: itemStyle, children: label }, index));
                }) }))] }));
};
exports.default = Dropdown;
var DropdownContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  width: 200px;\n"], ["\n  position: relative;\n  display: inline-block;\n  width: 200px;\n"])));
var DropdownLabel = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 8px;\n  font-weight: bold;\n"], ["\n  display: block;\n  margin-bottom: 8px;\n  font-weight: bold;\n"])));
var DropdownButton = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  padding: 10px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"], ["\n  width: 100%;\n  padding: 10px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"])));
var Arrow = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-left: 8px;\n"], ["\n  margin-left: 8px;\n"])));
var DropdownList = styled_components_1.default.ul(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: ", ";\n  bottom: ", ";\n  left: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n"], ["\n  position: absolute;\n  top: ", ";\n  bottom: ", ";\n  left: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n"])), function (_a) {
    var direction = _a.direction;
    return (direction === "down" ? "100%" : "auto");
}, function (_a) {
    var direction = _a.direction;
    return (direction === "up" ? "100%" : "auto");
});
var DropdownItem = styled_components_1.default.li(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 10px;\n  cursor: ", ";\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  padding: 10px;\n  cursor: ", ";\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "#aaa" : "inherit");
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "inherit" : "#f0f0f0");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
