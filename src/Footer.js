const Footer = ({ length }) => {
  // const today = new Date();

  return (
    <footer>
      <p>
        {length} List {length === 1 ? "item" : "items"}
        {/* Copyright &copy; {today.getFullYear()}  */}
      </p>
    </footer>
  );
};

export default Footer;
