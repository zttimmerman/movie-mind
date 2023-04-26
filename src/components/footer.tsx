const Footer = (): JSX.Element => {
  return (
    <div className="flex w-6/12">
      <span className="font-bold">Powered by </span>
      <span className="w-36 ml-4"><a href="https://www.themoviedb.org/about/"><img src="tmdb-logo.svg" alt="TMDB Logo"/></a></span>
      <span className="w-36 ml-4 -mt-2"><a href="https://openai.com/"><img src="OpenAI_Logo.svg" alt="OpenAI Logo"/></a></span>
    </div>
  )
};

export default Footer