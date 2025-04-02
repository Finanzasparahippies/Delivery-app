import React from "react";

import AppData from "@data/app.json";
import MenuData from "@data/menu.json";

import PageBanner from "@components/PageBanner";
import MenuGrid from "@components/menu/MenuGrid";
import PromoSection from "@components/sections/Promo";


export const metadata = {
  title: {
		default: "Menu",
	},
  description: AppData.settings.siteDescription,
}

const Menu1 = () => {

  
  return (
    <>
      <PageBanner pageTitle={"Nuestro menú"} breadTitle={"Menú"} type={1} />
      {/* menu section 1 */}
      <section className="sb-menu-section sb-p-90-60">
        <div className="sb-bg-1">
          <div></div>
        </div>
        <div className="container">
          <div className="sb-mb-60">
            <h2 className="sb-cate-title sb-mb-15">Tortas</h2>
            <div className="subtitle-container">
              <p className="sb-text subtitle">Las tortas que estabas buscando, ingredientes frescos y de la mas alta calidad.</p>
            </div>
          </div>

          <MenuGrid categoria="Tortas" />
        </div>
      </section>
      {/* menu section 1 end */}

      {/* menu section 2 */}
      <section className="sb-menu-section sb-p-0-60">
        <div className="sb-bg-2">
          <div></div>
        </div>
        <div className="container">
          <div className="sb-mb-60">
            <h2 className="sb-cate-title sb-mb-15">{MenuData.categories[1].name}</h2>
            <div className="subtitle-container">
            <p className="sb-text subtitle" dangerouslySetInnerHTML={{__html : MenuData.categories[1].description}} />
            </div>
          </div>

          <MenuGrid categoria="Quekas" />
        </div>
      </section>
      {/* menu section 2 end */}

      {/* menu section 3 */}
      <section className="sb-menu-section sb-p-0-60">
        <div className="sb-bg-1">
          <div></div>
        </div>
        <div className="container">
          <div className="sb-mb-60">
            <h2 className="sb-cate-title sb-mb-15">{MenuData.categories[2].name}</h2>
            <div className="subtitle-container">
            <p className="sb-text subtitle" dangerouslySetInnerHTML={{__html : MenuData.categories[2].description}} />
            </div>
          </div>

          <MenuGrid categoria="Papas" />
        </div>
      </section>
      {/* menu section 3 end */}

      {/* menu section 4 */}
      <section className="sb-menu-section sb-p-0-60">
        <div className="container">
          <div className="sb-mb-60">
            <h2 className="sb-cate-title sb-mb-15">{MenuData.categories[3].name}</h2>
            <div className="subtitle-container">
              <p className="sb-text" dangerouslySetInnerHTML={{__html : MenuData.categories[3].description}} />  
            </div>
          </div>

          <MenuGrid categoria="Bebidas" />
        </div>
      </section>
      {/* menu section 4 end */}

      <PromoSection />
    </>
  );
};
export default Menu1;