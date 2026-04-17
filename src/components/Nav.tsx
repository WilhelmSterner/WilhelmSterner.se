function Nav() {
  return (
    <header className="site-header">
      <a className="brand" href="#start" aria-label="Till startsidan">
        Wilhelm Sterner
      </a>
      <nav className="site-nav" aria-label="Huvudnavigering">
        <a href="#om-mig">Om mig</a>
        <a href="#nyheter">Nyheter</a>
        <a href="#resultat">Resultat</a>
        <a href="#bilder">Bilder</a>
        <a href="#tavlingar">Tävlingar</a>
        <a href="#stotta">Stötta mig</a>
        <a href="#mal">Mål</a>
      </nav>
    </header>
  );
}

export default Nav;
