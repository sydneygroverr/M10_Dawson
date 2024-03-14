function Header(props: any) {
  return (
    <>
      <header className="row navbar navbar-dark bg-dark">
        <div className="col-4 text-white">
          <h1>Mission 10_Dawson</h1>
        </div>
        <div className="col subtitle">
          <h1 className="text-white">{props.title}</h1>
        </div>
      </header>
      <header className="row navbar">
        <div
          className="col-12
         "
        >
          <h3>
            This site allows you to view Bowling League data for players that
            are on the Marlins or the Sharks
          </h3>
          <br />
          <br />
        </div>
      </header>
    </>
  );
}

export default Header;
