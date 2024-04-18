const Header = () => {
  const header = {
    display: "flex",
    backgroundColor: "blueviolet",
    marginInline: "-1rem",
    marginTop: "-1rem",
  };

  const h1Style = {
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "white",
    paddingLeft: "2rem",
  };
  return (
    <div style={header}>
      <h1 style={h1Style}>Notes</h1>
    </div>
  );
};

export default Header;
