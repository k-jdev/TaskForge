import React from "react";
interface PropsBoardModal {
  name: string;
}

const BoardModal: React.FC<PropsBoardModal> = ({ name }) => {
  return <div>{name}</div>;
};

export default BoardModal;
