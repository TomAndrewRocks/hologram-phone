export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p style={{color: 'black'}}>Brasil | {currentYear}</p>
    </footer>
  );
};
