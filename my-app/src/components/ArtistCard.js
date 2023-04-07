import React from 'react';
import { artistCardData } from '../data';
import { motion } from 'framer-motion'

export const ArtistCard = () => {
    const { photo, btnText, name, title, description } = artistCardData

    return(
        <section id='artist-card' className='section'>
   <div className="container">
      <div className="w-[70%]">
        <div className="px-0 py-20">
          <div className="flex justify-center">
            <div className="row">
              <div className="col-md-3">
                <div className="wsk-cp-product bg-white p-15 rounded-lg shadow-md relative w-460 h-870">
                  <div className="absolute -translate-x-2/4 w-[450px] transition-all duration-[0.2s] ease-[ease-in-out] p-[15px] left-[5_0%] top-[5px];
                    -webkit-transform: translate(-50%);
                    -ms-transform: translate(-50%);
                    -moz-transform: translate(-50%);
                    -o-transform: translate(-50%);
                    -khtml-transform: translate(-50%);">
                    <img src={photo} alt="Product" className="img-responsive" />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="category">
                      <span>Portfolio</span>
                    </div>
                    <div className="title-product">
                      <h2>Мирослав Илиев</h2>
                    </div>
                    <div className="title-product">
                      <h3>Основател / татуист</h3>
                    </div>
                    <div className="description-prod">
                      <p>Известен със своята креативност, прецизност и внимание към детайла, неговите проекти са много търсени. Скайлър казва: „Всичко зависи от страстта, която влагате, правете го правилно или не го правете изобщо.</p>
                    </div>
                    {/* <div className="card-footer">
                      <div className="wcf-left"><span className="price">Rp500.000</span></div>
                      <div className="wcf-right"><a href="#" className="buy-btn"><i className="zmdi zmdi-shopping-basket"></i></a></div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </section>

    )
}