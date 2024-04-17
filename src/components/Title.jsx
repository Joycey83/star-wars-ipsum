import titleLogo from "../images/star-wars-logo.png";

const Title = () => {
  return (
    <>
      <div className="title-img-container">
        <img src={titleLogo} alt="Star wars logo" className="logo" />
      </div>
      <h1 className="main-title">may the Ipsum be with you</h1>
    </>
  );
};
export default Title;
