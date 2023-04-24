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
      <h1 className="text-3xl font-['monospacetypewriterregular']">MovieMind</h1>
      <button className="btn btn-ghost -my-2 font-extrabold text-3xl" onClick={handleClick}>Watchlist</button>
    </div>
  )
}

export default Header
