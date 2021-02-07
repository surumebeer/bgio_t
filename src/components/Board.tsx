import { useState, useEffect } from "react";
import { BoardProps } from "boardgame.io/react";
import { GType } from "./../types/types";
import { TableBody } from "./Table";
import { Winner } from "./Winner";

export const TicTacToeBoard = ({ G, ctx, moves }: BoardProps<GType>) => {
  const [winner, setWinner] = useState("");

  const onClick = (id: number) => {
    moves.clickCell(id);
  };

  useEffect(() => {
    if (ctx.gameover !== undefined) {
      setWinner(ctx.gameover.winner);
    }
  }, [ctx.gameover]);

  return (
    <div>
      <table id="board">
        <TableBody onCellClick={onClick} cells={G.cells} />
      </table>
      <Winner winner={winner} />
    </div>
  );
};
