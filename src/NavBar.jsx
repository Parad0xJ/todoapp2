/* eslint-disable react/prop-types */

export default function NavBar({ url1, url2 }) {
  return (
    <>
      <nav className="navbar bg-success ">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand" href="#">
            <img
              src={url1}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top me-2"
            />
            React App : ToDO
            <img
              src={url2}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top mx-2"
            />
          </a>
        </div>
      </nav>
    </>
  );
}
