function MobileButton({ img, onClick, text, hidden }) {
  return (
    <div className={`mobile-button ${hidden}`} onClick={onClick}>
      {img ? (
        <img className="mobile-button-img" src={img} />
      ) : (
        <p style={{ color: "white" }}>{text}</p>
      )}
    </div>
  );
}

export default MobileButton;
