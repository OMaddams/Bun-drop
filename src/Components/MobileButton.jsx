function MobileButton({ img, onClick, text }) {
  return (
    <div className="mobile-button" onClick={onClick}>
      {img ? (
        <img className="mobile-button-img" src={img} />
      ) : (
        <p style={{ color: "white" }}>{text}</p>
      )}
    </div>
  );
}

export default MobileButton;
