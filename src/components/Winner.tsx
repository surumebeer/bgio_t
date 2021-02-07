import { Ctx } from "boardgame.io";

type Props = {
  winner: Ctx["gameover"];
};

export const Winner = ({ winner }: Props) => {
  return winner === "" ? (
    <></>
  ) : winner !== undefined ? (
    <div>winner: {winner}</div>
  ) : (
    <div>Draw</div>
  );
};
