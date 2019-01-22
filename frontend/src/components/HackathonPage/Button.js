import React from 'react';
import styled from 'styled-components';
import { IoMdNavigate } from 'react-icons/io';

const Button = styled.button`
  padding: 0.75em 1em;
  background-color: hsl(234, 100%, 74%);
  border: 0;
  border-radius: 4px;
  color: hsl(234, 80%, 98%);
  font-size: 1rem;
  font-weight: bold;
  width: ${({ wide }) => wide && '100%'};

  &:hover {
    background-color: hsl(234, 100%, 70%);
  }

  &:focus {
    background-color: hsl(234, 100%, 64%);
    outline-color: hsl(234, 100%, 86%);
  }
`

Button.Map = props => (
  <Button {...props}>
    <IoMdNavigate />
  </Button>
)

export default Button;