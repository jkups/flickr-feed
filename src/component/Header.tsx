import SVG from "react-inlinesvg";
import FlickrLogo from "./images/flickrlogo.svg";

interface HeaderProps {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({ term, setTerm }: HeaderProps) => {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-black border-b border-pink-500 shadow px-4 2xl:px-0">
        <div className="max-w-screen-xl mx-auto relative">
          <header className="py-4 justify-between items-center sticky top-0  md:flex">
            <div className="flex items-center gap-4">
              <SVG src={FlickrLogo} className="hidden md:block" />
              <input
                className="rounded-lg font-semibold text-lg w-full md:w-80"
                type="text"
                placeholder="Start typing to search..."
                onKeyUp={(event) => setTerm(event.target.value)}
              ></input>
            </div>
            <span className="text-2xl font-bold text-white hidden md:block">
              {term.toUpperCase()} SEARCH
            </span>
          </header>
        </div>
      </div>
    </div>
  );
};
