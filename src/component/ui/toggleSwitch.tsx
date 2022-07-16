import { clsx } from "clsx";

interface ToggleSwitchProps {
  right: boolean;
  onClick: () => void;
}

export const ToggleSwitch = ({ right, onClick }: ToggleSwitchProps) => {
  return (
    <div
      onClick={onClick}
      className="w-10 h-5 rounded-full cursor-pointer bg-sky-600 relative"
    >
      <div
        className={clsx(
          "rounded-full h-5 w-5 bg-white border-2 border-sky-600 absolute",
          right && "right-0"
        )}
      ></div>
    </div>
  );
};
