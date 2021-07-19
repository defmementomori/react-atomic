import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return (
    <div>
      <SInput type="text" placeholder={placeholder} />
    </div>
  );
};

export const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
