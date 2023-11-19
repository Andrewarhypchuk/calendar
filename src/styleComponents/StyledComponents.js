import { Box } from "@mui/material";
import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  grid-template-rows: repeat(6, 1fr);
  background-color: #282c34;
`;

export const CellWrapper = styled.div`
  min-width: 160px;
  min-height: 100px;
  max-height: 130px;
  overflow:hidden;
  background-color: ${(props) =>
    props.isCurrentDay
      ? "#73ab73"
      : props.isCurrentMonth
      ? "#817f7f"
      : "#9e9e9e"};
  color: white;
  padding: 10px;
`;
export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 700px;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 16px;
`;
export const EventsListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  list-style: none;
  margin:0;
  padding:0;
  height:100%;
`;

export const CellHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FormInput = styled.input.attrs((props) => ({
  type: props.type,
}))`
  padding: 10px;
  font-size: 16px;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid lightgray")};
  border-radius: 5px;
  outline: none;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const SpaceBetweenBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
