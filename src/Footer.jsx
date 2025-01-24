/* eslint-disable react/prop-types */
export default function Footer({ feature, makeWith }) {
  return (
    <>
      <div className="card text-center fixed-bottom">
        <div className="card-header">{feature}</div>
        <div className="card-body bg-success">
          <h5 className="card-title text-primary-emphasis">
            ©2024 @Parad0xJ-(Laurent-CMND)
          </h5>
          <p className="card-text"></p>
        </div>
        <div className="card-footer text-body-secondary">{makeWith}</div>
      </div>
    </>
  );
}
