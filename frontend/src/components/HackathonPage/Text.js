import styled from 'styled-components';

const Text = styled.span`
  font-size: ${({ lead }) => lead && '1.2rem'};
  font-size: ${({ small }) => small && '0.9rem'};
  opacity: ${({ muted }) => muted && '0.6'};
`

export default Text;