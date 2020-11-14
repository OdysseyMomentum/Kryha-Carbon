import React from "react";
import styled from "styled-components";

// Styles
import color from "../color";
import { P } from "./text";
import fontSize from "../typography";

export const Select = styled.select`
  background: transparent;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  padding: 0 5px;
  border: none;
  font-family: "Exo 2", sans-serif;
  color: ${color.darkPurple};
  font-size: ${fontSize[1]};
  /* line-height: 24px; */
  text-transform: uppercase;
  font-weight: 600;
`;
export const Option = styled.option`
  padding: 5px;
  background: transparent;
`;


// Select props
  // label,
  // options,
  // selected,
  // disabled,
  // width,
  // style,
  // handleDropdown
export const SelectInput = (props) => {
  let options = null;
  if (Array.isArray(props.options)) {
    options = props.options.map((value, index) => (
      <Option value={value} key={index}>
        {value}
      </Option>
    ));
  } else if (props.options && typeof props.options === "object" && props.options !== null) {
    options = Object.entries(props.options).map(([label, value], index) => (
      <Option value={value} key={index}>
        {label}
      </Option>
    ));
  }
  return (
    <Select onChange={props.handleDropdown} disabled={props.disabled} value={props.selected} style={{ ...props.style, width: props.width }}>
      {options}
    </Select>
  );
};

const InputField = styled.input`
  width: ${(props) => props.width || "100%"};
  border: none;
  border-radius: 3px;
  color: ${color.dark};
  background: ${color.veryLightPurple};
  padding: 18px 31px;
  font-size: 18px;
  height: 52px;
  :focus {
    border-color: ${color.neon};
  }
`;
const InputFieldTransparent = styled.input`
  width: ${(props) => props.width || "100%"};
  border: 1px solid;
  border-color: ${color.neon};
  border-radius: 3px;
  color: ${color.neon};
  background: transparent;
  padding: 18px 31px;
  font-size: 18px;
  height: 52px;
  :focus {
    border-color: ${color.neon};
  }
`;

// type TextInputProps = {
//   label?: string;
//   value: string;
//   name?: string;
//   error?: string;
//   success?: string;
//   password?: boolean;
//   onChange?: React.ChangeEventHandler<HTMLInputElement>;
//   onFocus?: React.FocusEventHandler<HTMLInputElement>;
//   onBlur?: React.FocusEventHandler<HTMLInputElement>;
//   disabled?: boolean;
//   width?: string;
//   placeholder?: string;
// };
export const Input = (props) => {
  if (props.transparent) {
    return (
      <div style={{ width: props.width }}>
      <label>{props.label}</label>
      <InputFieldTransparent
        value={props.value}
        onChange={props.onChange}
        name={props.name || props.value}
        type={props.password ? "password" : "text"}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        readOnly={!props.onChange}
        disabled={props.disabled}
        width={props.width}
        placeholder={props.placeholder}
      />
      {props.error && <Message error>{/*<ErrorIcon />*/ props.error}</Message>}
      {props.success && <Message>{/*<SuccessIcon />*/ props.success}</Message>}
    </div>
    )
  }
  return (
    <div style={{ width: props.width }}>
      <label>{props.label}</label>
      <InputField
        value={props.value}
        onChange={props.onChange}
        name={props.name || props.value}
        type={props.password ? "password" : "text"}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        readOnly={!props.onChange}
        disabled={props.disabled}
        width={props.width}
        placeholder={props.placeholder}
      />
      {props.error && <Message error>{/*<ErrorIcon />*/ props.error}</Message>}
      {props.success && <Message>{/*<SuccessIcon />*/ props.success}</Message>}
    </div>
  );
};


const InputFieldArea = styled.textarea`
  width: ${(props) => props.width || "110%"};
  max-height: 100%;
  height: ${(props) => props.height || "110%"};
  border: none;
  border-radius: 30px;
  color: ${color.darkPurple};
  background: ;
  padding: 22px 60px 22px 22px;
  font-size: ${fontSize[2]};
  :focus {
    border-color: ${color.grey};
  }
  @media (min-width: 1440px) {
    width: 573px;
    max-width: 573px;
  }
`;

// type TextInputAreaProps = {
//   label?: string;
//   value: string;
//   name?: string;
//   error?: string;
//   success?: string;
//   password?: boolean;
//   onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
//   onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
//   onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
//   disabled?: boolean;
//   width?: string;
//   height?: string;
//   placeholder?: string;
// };
export const InputArea = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <InputFieldArea
        value={props.value}
        onChange={props.onChange}
        name={props.name || props.value}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        readOnly={!props.onChange}
        disabled={props.disabled}
        width={props.width}
        height={props.height}
        placeholder={props.placeholder}
      />
      {props.error && <Message error>{/*<ErrorIcon />*/ props.error}</Message>}
      {props.success && <Message>{/*<SuccessIcon />*/ props.success}</Message>}
    </div>
  );
};

const Message = styled(P)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.error ? color.cta : color.lightBlue)};
`;
