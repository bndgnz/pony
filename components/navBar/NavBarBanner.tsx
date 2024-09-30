





function NavBarBanner(props: any) {
 

  function BreadCrumb() {
    if (props.props.showBreadcrumb === true) {
      return (
        <div className="banner--inner__breadcrumb d-flex justify-content-start justify-content-md-end">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item false">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">{props.title}</li>
            </ol>
          </nav>
        </div>
      );
    } else {
      null;
    }
  }

  function Banner() {
    if (props.props.showBanner) {
      return (
        <section
          className="banner--inner"
          style={{
            backgroundImage: `url(${props.props?.image[0]?.original_secure_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                
              </div>
              <div className="col-md-6">
            
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      null;
    }
  }

  return <Banner />;
}

export default NavBarBanner;
