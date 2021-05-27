import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5px;
  padding: 20px;
  background-color: rgb(1, 2, 10);
`;

export default function FloatingElement({
  style = undefined,
  children,
  stretchVertical = false,
}) {
  return (
    <Wrapper
      style={{
        height: stretchVertical ? 'calc(100% - 10px)' : undefined,
        ...style,
      }}
    >
      {children}
    </Wrapper>
  );
}
