import { FaArrowCircleUp } from "react-icons/fa";

export const GoUp = () => {
  const goUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button onClick={() => goUp()} className="goup sticky-bottom">
        <FaArrowCircleUp /> GoUp
      </button>
    </div>
  );
};
