import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='dark'  className='text-center pt-5 text-lg-start text-muted '>
      
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Stories
              </h6>
              <p>
               Far for away, behind the word mountains,far from the countries vokalia and consonantia , there live the blind texts.
              </p>
             
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Information</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Terms of Uses
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Stories
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Accessibility Help
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Advirtise with us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Categories</h6>
              <p>
                <a href='#!' className='text-reset'>
                    Food
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Restaurant
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Dessert
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Lifestyle
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Recipes
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Have a Questions?</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Foodie.com
        </a>
      </div>
    </MDBFooter>
  );
}