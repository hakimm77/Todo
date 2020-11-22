import styled from 'styled-components';

const TextInput = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  padding: 12px 20px;
  text-align: center;
  font-size: large;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #b4b4b4;
  border-radius: 4px;
  box-sizing: border-box;
  :focus{
    outline: none;
  }
`

export default TextInput;
