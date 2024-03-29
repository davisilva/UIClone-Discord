import styled from 'styled-components';
import {ExpandMore} from 'styled-icons/material';

/*
SL - Server List
SN - Server Name
CI - Channel Info
CL - Channel List
CD - Channel Data
UI - User Info
UL - User List
UD - User Data
*/

export const Container = styled.div`
  display: flex;
  justify-content: space-between; // deixar o máximo espaçado possível
  align-items: center;
  padding: 0 11px 0 16px; // cima direita baixo esquerda
  background-color: var(--secondary);
  box-shadow: rgba(0,0,0,0.2)0px 1px 0px 0px;
  z-index: 2;
`;
export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;
export const ExpandIcon = styled(ExpandMore) `
  width: 28px;
  height: 28px;
  color: var(--white);
  cursor: pointer;
`;