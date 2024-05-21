function MobileButton({ img, onClick }) {
  return (
    <div className="mobile-button" onClick={onClick}>
      <img className="mobile-button-img" src={img} />
    </div>
  );
}

export default MobileButton;
