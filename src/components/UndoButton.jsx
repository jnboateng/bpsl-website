import { Undo2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UndoButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}>
      <Undo2 size={32} color="purple" />
    </button>
  );
}
