import Layout from "../pages/_layout";

function Welcome() {

  return (
    <>
     <div className='welcome_height d-flex align-items-center flex-column'>
        <div className="welcome_margin">
        <h1>Find your dream flat</h1>
        </div>
        <div>
        <ul className="welcome_ul list-unstyled mt-4">
            <li><i class="fas fa-house-user"></i> buy a new flat</li>
            <li><i class="fas fa-house-damage"></i> sell the old one</li>
            <li><i class="fas fa-laptop-house"></i> find your perfect flat</li>
            <li><i class="fas fa-home"></i> rate our service</li>
        </ul>
        </div>
    </div>
    </>
  );
}

Welcome.Layout = Layout;

export default Welcome
