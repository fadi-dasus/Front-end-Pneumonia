import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Sygehus Lillebælt</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
            Hospital Lillebælt is the Patients 'Hospital and consists of three hospitals, 
            each with its own special focus: the Patients' Emergency Hospital in Kolding, 
            the Patients 'Cancer and Specialist Hospital in Vejle and the Patients' Back Center in Middelfart.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Afdelinger</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="http://www.sygehuslillebaelt.dk/default.asp?id=248815">Hjertesygdomme</a>
            </p>
            <p>
              <a href="http://www.sygehuslillebaelt.dk/wm249140">Røntgenafdelingen</a>
            </p>
            <p>
              <a href="http://www.sygehuslillebaelt.dk/default.asp?id=439314">Skadestuen</a>
            </p>
            <p>
              <a href="http://www.sygehuslillebaelt.dk/default.asp?id=297787">Biokemi og Immunologi</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="http://www.sygehuslillebaelt.dk/wm222773">Om OS</a>
            </p>
            <p>
              <a href="http://www.sygehuslillebaelt.dk/wm226097">Job-Karriere</a>
            </p>
            <p>
              <a href="http://www.sygehuslillebaelt.dk/wm225634">Patienter</a>
            </p>
            <p>
              <a href="#!">Hjælp</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Kontakt</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> Beriderbakken 4
7100 Vejle
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 45 76 36 20 00
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 45 76 36 20 00
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://www.sygehuslillebaelt.dk/wm223295"> sygehuslillebaelt.dk </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;