import styled from "styled-components";

const Back = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;
const Div = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 200px;
  height: 100px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 50px;
  justify-content: center;
  border: solid 2px black;
  background-color: white;
`;

export const Modal = ({ open, message, toclose }) => {
  return (
    <>
      {open ? (
        <Back>
          <Div>
            <span>{message}</span>
            <button onClick={(e) => toclose(false)}>Close</button>
          </Div>
        </Back>
      ) : null}
    </>
  );
};
