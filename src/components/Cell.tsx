import React from "react";

type Props = {
  onCellClick: (id: number) => void;
  id: number;
  children: React.ReactNode;
};

export const Cell = ({ onCellClick, id, children }: Props) => {
  return (
    <td style={cellStyle} key={id} onClick={() => onCellClick(id)}>
      {children}
    </td>
  );
};

const cellStyle = {
  border: "1px solid #555",
  width: "50px",
  height: "50px",
  lineHeight: "50px",
  textalign: "center",
};
