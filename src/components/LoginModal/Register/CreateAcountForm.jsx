import "./createAcountForm.css";

const CreateAcountForm = () => {
  return (
    <form className="createAcc-form" method="POST">

      <div className="createAcc-input-container">
        <input type="text" placeholder="Name" id="name" autoComplete="off"></input>
      </div>

      <div className="createAcc-input-container">
        <input type="text" placeholder="Last Name" id="lastName" autoComplete="off"></input>
      </div>

      <div className="createAcc-input-container-date">
        <p>Birthdate:</p>
        <input type="number" placeholder="YYYY" id="year"></input>
        <input type="number" placeholder="MM" id="month"></input>
        <input type="number" placeholder="DD" id="day"></input>
      </div>

      <div className="createAcc-input-container">
        <input type="email" placeholder="Email" id="email" autoComplete="off"></input>
      </div>

      <div className="createAcc-input-password">
        <div className="createAcc-input-container">
          <input type="password" placeholder="Password" id="password"></input>
        </div>

        <div className="createAcc-input-container">
          <input type="password" placeholder="Confirm Password" id="confirmPassword"></input>
        </div>
      </div>

      <button type="submit" className="register-button">
        Register
      </button>
    </form>
  );
};

export default CreateAcountForm;
