import { INVALID_MOVE } from "boardgame.io/core";
import { Game, Ctx } from "boardgame.io";
import { GType, CellsType } from "./../types/types";

export const TicTacToe: Game<GType> = {
  setup: () => ({ cells: Array(9).fill(null) }),

  turn: {
    moveLimit: 1,
  },

  moves: {
    clickCell: (G: GType, ctx: Ctx, id: number) => {
      if (G.cells[id] !== null) {
        return INVALID_MOVE;
      }
      G.cells[id] = ctx.currentPlayer;
    },
  },

  endIf: (G: GType, ctx: Ctx) => {
    if (IsVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (IsDraw(G.cells)) {
      return {
        draw: true,
      };
    }
  },
  ai: {
    enumerate: (G: GType, ctx: Ctx) => {
      type MovesObj = {
        move: string;
        args: number[];
      }[];
      let moves: MovesObj = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: "clickCell", args: [i] });
        }
      }
      return moves;
    },
  },
};

function IsVictory(cells: CellsType) {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isRowComplete = (row: CellsType) => {
    const symbols: CellsType = row.map((_, i) => cells[i]);
    return symbols.every((i) => i !== null && i === symbols[0]);
  };
  return positions.map(isRowComplete).some((i) => i === true);
}

function IsDraw(cells: CellsType) {
  return cells.filter((c) => c === null).length === 0;
}
