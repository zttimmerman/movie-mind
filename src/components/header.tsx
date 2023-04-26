interface HeaderProps {
  isWatchListOpen: boolean;
  setIsWatchListOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isWatchListOpen, setIsWatchListOpen }: HeaderProps): JSX.Element => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsWatchListOpen(!isWatchListOpen);
  }
  return (
    <div className="flex justify-between w-full mt-4">
      {/* <h1 className="text-4xl font-bold font-['monospacetypewriterregular']">MovieMind</h1> */}
      <img src="logo-no-background.svg" alt="Movie Mind Logo" className="w-72"/>
      <button className="btn btn-info -my-1 font-extrabold text-2xl" onClick={handleClick}>Watchlist</button>
    </div>
  )
}

export default Header
