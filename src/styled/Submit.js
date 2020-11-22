import styled from 'styled-components';

const Submit = styled.input.attrs({
  type: 'submit',
})`
  display: ${props => props.display};
  width: 100%;
  padding: 14px 20px;
  border: none;
  border-radius: 4px;
  background-color: dodgerblue;
  margin-top: 10px;
  color: white;
  transition: 0.2s ease;
  border: 0;
  font-size: 20px;
  &:hover {
    background: deepskyblue;
  }
  :focus{
    outline: none;
  }
`

export default Submit;

