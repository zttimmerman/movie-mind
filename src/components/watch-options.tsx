interface WatchOptionsProps {
  isWatchOptionsOpen: boolean;
  setIsWatchOptionsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  providers: Providers
}

interface Providers {
  flatrate: Provider[];
  buy: Provider[];
  rent: Provider[]
}

interface Provider {
  provider_id: number;
  logo_path: string
}

const WatchOptions = ({ isWatchOptionsOpen, setIsWatchOptionsOpen, providers }: WatchOptionsProps): JSX.Element => {
  return (
    <div className={`modal modal-bottom sm:modal-middle ${isWatchOptionsOpen ? 'modal-open' : ''}`} role='dialog' aria-modal='true'>
      <div className='modal-box bg-base-200 '>
        <h2 className='font-extrabold text-2xl'>Streaming</h2>
        <div className='flex my-4'>
          {providers.flatrate?.map(provider => {
            return (
              <span key={provider.provider_id} className="mr-3 shrink-0">
                <img src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`} alt="Provider Logo" className='rounded'/>
              </span>
            )
          })}
        </div>
        <h2 className='font-extrabold text-2xl'>Buy</h2>
        <div className='flex my-4'>
          {providers.buy?.map(provider => {
            return (
              <span key={provider.provider_id} className="mr-3 shrink-0">
                <img src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`} alt="Provider Logo" className='rounded'/>
              </span>
            )
          })}
        </div>
        <h2 className='font-extrabold text-2xl'>Rent</h2>
        <div className='flex my-4'>
          {providers.rent?.map(provider => {
            return (
              <span key={provider.provider_id} className='mr-3 shrink-0'>
                <img src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`} alt="Provider Logo" className='rounded'/>
              </span>
            )
          })}
        </div>
        <div className="modal-action">
          <label className="btn btn-sm btn-circle fixed right-2 top-2" onClick={e => { setIsWatchOptionsOpen(!isWatchOptionsOpen) }}>X</label>
        </div>
      </div>
  </div>
  )
}

export default WatchOptions