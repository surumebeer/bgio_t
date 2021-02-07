import { Cell } from "./Cell";
import { CellsType } from "./../types/types";

type Props = {
  onCellClick: (id: number) => void;
  cells: CellsType;
};

export const TableBody = ({ onCellClick, cells }: Props) => {
  return (
    <tbody>
      {Array(3)
        .fill(null)
        .map((_, i) => {
          return (
            <tr key={i}>
              {Array(3)
                .fill(null)
                .map((_, j) => {
                  const id = 3 * i + j;
                  return (
                    <Cell onCellClick={onCellClick} key={id} id={id}>
                      {cells[id]}
                    </Cell>
                  );
                })}
            </tr>
          );
        })}
    </tbody>
  );
};
