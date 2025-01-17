function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div>
      <img src={picture} alt=""></img>
      <div>
        <strong>First name:</strong> {firstName}
        <br></br>
        <strong>Last name:</strong> {lastName}
        <br></br>
        <strong>Gender:</strong> {gender}
        <br></br>
        <strong>Height:</strong> {height}
        <br></br>
        <strong>Birth:</strong> {birth.toDateString()}
      </div>
    </div>
  );
}

export default IdCard;
