function MobilebuttonLarge({ text, onClick }) {
  return (
    <div className="mobile-button-large" onClick={onClick}>
      <p>{text}</p>
    </div>
  );
}

export default MobilebuttonLarge;
