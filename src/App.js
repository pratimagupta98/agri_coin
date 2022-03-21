import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import TermsOfUse from "./wrappers/myPage/TermsOfUse";
import { Component } from "react";


// home pages
// const HomeFashion = lazy(() => import("./pages/home/HomeFashion"));
//const HomeFashionTwo = lazy(() => import("./pages/home/HomeFashionTwo"));
// const HomeFashionThree = lazy(() => import("./pages/home/HomeFashionThree"));
// const HomeFashionFour = lazy(() => import("./pages/home/HomeFashionFour"));
// const HomeFashionFive = lazy(() => import("./pages/home/HomeFashionFive"));
// const HomeFashionSix = lazy(() => import("./pages/home/HomeFashionSix"));
// const HomeFashionSeven = lazy(() => import("./pages/home/HomeFashionSeven"));
// const HomeFashionEight = lazy(() => import("./pages/home/HomeFashionEight"));
// const HomeKidsFashion = lazy(() => import("./pages/home/HomeKidsFashion"));
// const HomeCosmetics = lazy(() => import("./pages/home/HomeCosmetics"));
// const HomeFurniture = lazy(() => import("./pages/home/HomeFurniture"));
const HomeFurnitureTwo = lazy(() => import("./pages/home/HomeFurnitureTwo"));
// const HomeFurnitureThree = lazy(() =>
//   import("./pages/home/HomeFurnitureThree")
// );
// const HomeFurnitureFour = lazy(() => import("./pages/home/HomeFurnitureFour"));
// const HomeFurnitureFive = lazy(() => import("./pages/home/HomeFurnitureFive"));
// const HomeFurnitureSix = lazy(() => import("./pages/home/HomeFurnitureSix"));
// const HomeFurnitureSeven = lazy(() =>
//   import("./pages/home/HomeFurnitureSeven")
// );
// const HomeElectronics = lazy(() => import("./pages/home/HomeElectronics"));
// const HomeElectronicsTwo = lazy(() =>
//   import("./pages/home/HomeElectronicsTwo")
// );
// const HomeElectronicsThree = lazy(() =>
//   import("./pages/home/HomeElectronicsThree")
// );
// const HomeBookStore = lazy(() => import("./pages/home/HomeBookStore"));
// const HomeBookStoreTwo = lazy(() => import("./pages/home/HomeBookStoreTwo"));
// const HomePlants = lazy(() => import("./pages/home/HomePlants"));
// const HomeFlowerShop = lazy(() => import("./pages/home/HomeFlowerShop"));
// const HomeFlowerShopTwo = lazy(() => import("./pages/home/HomeFlowerShopTwo"));
// const HomeOrganicFood = lazy(() => import("./pages/home/HomeOrganicFood"));
// const HomeOrganicFoodTwo = lazy(() =>
//   import("./pages/home/HomeOrganicFoodTwo")
// );
// const HomeOnepageScroll = lazy(() => import("./pages/home/HomeOnepageScroll"));
// const HomeGridBanner = lazy(() => import("./pages/home/HomeGridBanner"));
// const HomeAutoParts = lazy(() => import("./pages/home/HomeAutoParts"));
// const HomeCakeShop = lazy(() => import("./pages/home/HomeCakeShop"));
// const HomeHandmade = lazy(() => import("./pages/home/HomeHandmade"));
// const HomePetFood = lazy(() => import("./pages/home/HomePetFood"));
// const HomeMedicalEquipment = lazy(() =>
//   import("./pages/home/HomeMedicalEquipment")
// );
// const HomeChristmas = lazy(() => import("./pages/home/HomeChristmas"));
// const HomeBlackFriday = lazy(() => import("./pages/home/HomeBlackFriday"));
// const HomeBlackFridayTwo = lazy(() =>
//   import("./pages/home/HomeBlackFridayTwo")
// );
// const HomeValentinesDay = lazy(() => import("./pages/home/HomeValentinesDay"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));
const ShopGridTwoColumn = lazy(() => import("./pages/shop/ShopGridTwoColumn"));
const ShopGridMenColumn = lazy(() => import("./pages/shop/ShopGridMenColumn"));
const ShopGridWomenColumn = lazy(() =>
  import("./pages/shop/ShopGridWomenColumn")
);
const ShopGridKidsColumn = lazy(() =>
  import("./pages/shop/ShopGridKidsColumn")
);
const ShopGridNoSidebar = lazy(() => import("./pages/shop/ShopGridNoSidebar"));
const ShopGridFullWidth = lazy(() => import("./pages/shop/ShopGridFullWidth"));
const ShopGridRightSidebar = lazy(() =>
  import("./pages/shop/ShopGridRightSidebar")
);
const ShopListStandard = lazy(() => import("./pages/shop/ShopListStandard"));
const ShopListFullWidth = lazy(() => import("./pages/shop/ShopListFullWidth"));
const ShopListTwoColumn = lazy(() => import("./pages/shop/ShopListTwoColumn"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));
const BlogRightSidebar = lazy(() => import("./pages/blog/BlogRightSidebar"));
const BlogDetailsStandard = lazy(() =>
  import("./pages/blog/BlogDetailsStandard")
);

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const faqPage = lazy(() => import("./wrappers/myPage/FaqPage"));
const privacyPolicy = lazy(() => import("./wrappers/myPage/privacyPolicy"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const Step = lazy(() => import("./pages/other/Step"));
const Phone = lazy(() => import("./pages/other/Phone"));
const Otp = lazy(() => import("./pages/other/Otp"));

const Cart = lazy(() => import("./pages/other/Cart"));
const MyOrder = lazy(() => import("./pages/other/MyOrder"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

// agricoinpages
const InternetBill = lazy(() => import("./components/agricoinpage/InternetBill.js"));
const Electricity = lazy(() => import("./components/agricoinpage/Electricity.js"));
const Gass = lazy(() => import("./components/agricoinpage/gass.js"));
const Internet = lazy(() => import("./components/agricoinpage/Internet.js"));
const Water = lazy(() => import("./components/agricoinpage/Water.js"));
const shoppingBill = lazy(() => import("./components/agricoinpage/shoppingBill.js"));
const Wallet = lazy(() => import("./components/agricoinpage/wallet.js"));
const TableHistory = lazy(() => import("./components/agricoinpage/TableHistory.js"));









const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json"),
        },
      })
    );
  });

  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={HomeFurnitureTwo}
                />

                {/* Homepages */}
                {/* <Route
                  path={process.env.PUBLIC_URL + "/home-fashion"}
                  component={HomeFashion}
                /> */}
                {/* <Route
                  path={process.env.PUBLIC_URL + "/home-fashion-two"}
                  component={HomeFashionTwo}
                /> */}
                {/*  <Route
                  path={process.env.PUBLIC_URL + "/home-fashion-three"}
                  component={HomeFashionThree}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-fashion-four"}
                  component={HomeFashionFour}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-fashion-five"}
                  component={HomeFashionFive}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-fashion-six"}
                  component={HomeFashionSix}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-fashion-seven"}
                  component={HomeFashionSeven}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-fashion-eight"}
                  component={HomeFashionEight}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-kids-fashion"}
                  component={HomeKidsFashion}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-cosmetics"}
                  component={HomeCosmetics}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-furniture"}
                  component={HomeFurniture}
                /> */}
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={HomeFurnitureTwo}
                />
                {/*  <Route
                  path={process.env.PUBLIC_URL + "/home-furniture-three"}
                  component={HomeFurnitureThree}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-furniture-four"}
                  component={HomeFurnitureFour}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-furniture-five"}
                  component={HomeFurnitureFive}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-furniture-six"}
                  component={HomeFurnitureSix}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-furniture-seven"}
                  component={HomeFurnitureSeven}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-electronics"}
                  component={HomeElectronics}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-electronics-two"}
                  component={HomeElectronicsTwo}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-electronics-three"}
                  component={HomeElectronicsThree}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-book-store"}
                  component={HomeBookStore}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-book-store-two"}
                  component={HomeBookStoreTwo}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-plants"}
                  component={HomePlants}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-flower-shop"}
                  component={HomeFlowerShop}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-flower-shop-two"}
                  component={HomeFlowerShopTwo}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-organic-food"}
                  component={HomeOrganicFood}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-organic-food-two"}
                  component={HomeOrganicFoodTwo}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-onepage-scroll"}
                  component={HomeOnepageScroll}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-grid-banner"}
                  component={HomeGridBanner}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-auto-parts"}
                  component={HomeAutoParts}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-cake-shop"}
                  component={HomeCakeShop}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-handmade"}
                  component={HomeHandmade}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-pet-food"}
                  component={HomePetFood}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-medical-equipment"}
                  component={HomeMedicalEquipment}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-christmas"}
                  component={HomeChristmas}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-black-friday"}
                  component={HomeBlackFriday}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-black-friday-two"}
                  component={HomeBlackFridayTwo}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-valentines-day"}
                  component={HomeValentinesDay}
                /> */}

                {/* agriconpagesroute */}

                <Route
                  path={process.env.PUBLIC_URL + "/internetbill"}
                  component={InternetBill}
                />
                 <Route
                  path={process.env.PUBLIC_URL + "/shoppingbill"}
                  component={shoppingBill}
                />
                 <Route
                  path={process.env.PUBLIC_URL + "/electricity"}
                  component={Electricity}
                />
                  <Route
                  path={process.env.PUBLIC_URL + "/internet"}
                  component={Internet}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/gass"}
                  component={Gass}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/water"}
                  component={Water}
                />
                 <Route
                  path={process.env.PUBLIC_URL + "/wallet"}
                  component={Wallet}
                />
                  <Route
                  path={process.env.PUBLIC_URL + "/tablehistory"}
                  component={TableHistory}
                />
               
                {/* Shop pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/shop-grid-standard"}
                  component={ShopGridStandard}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/shop-grid-filter"}
                  component={ShopGridFilter}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/shop-grid-two-column"}
                  component={ShopGridTwoColumn}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/shop-grid-men-column"}
                  component={ShopGridMenColumn}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/shop-grid-women-column"}
                  component={ShopGridWomenColumn}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/shop-grid-kids-column"}
                  component={ShopGridKidsColumn}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}
                  component={ShopGridNoSidebar}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/shop-grid-full-width"}
                  component={ShopGridFullWidth}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
                  component={ShopGridRightSidebar}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/shop-list-standard/:_id"}
                  render={(routeProps) => (
                    <Product
                      {...routeProps}
                      key={routeProps.match.params._id}
                    />
                  )}
                  component={ShopListStandard}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/shop-list-full-width"}
                  component={ShopListFullWidth}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/shop-list-two-column"}
                  component={ShopListTwoColumn}
                />

                {/* Shop product pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product/:id"}
                  render={(routeProps) => (
                    <Product {...routeProps} key={routeProps.match.params.id} />
                  )}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
                  component={ProductTabLeft}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
                  component={ProductTabRight}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product-sticky/:id"}
                  component={ProductSticky}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product-slider/:id"}
                  component={ProductSlider}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
                  component={ProductFixedImage}
                />

                {/* Blog pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/blog-standard"}
                  component={BlogStandard}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
                  component={BlogNoSidebar}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-right-sidebar"}
                  component={BlogRightSidebar}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-details-standard"}
                  component={BlogDetailsStandard}
                />

                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/faqPage"}
                  component={faqPage}
                />
              
                <Route
                  path={process.env.PUBLIC_URL + "/privacyPolicy"}
                  component={privacyPolicy}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/TermsOfUse"}
                  component={TermsOfUse}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegister}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/step"}
                  component={Step}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/Phone"}
                  component={Phone}
                />
                {/* <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={Cart}
                /> */}
                <Route path={process.env.PUBLIC_URL + "/Otp"} component={Otp} />
                <Route
                  render={() =>
                    localStorage.getItem("auth-token") ? (
                      <>
                        <Route
                          path={process.env.PUBLIC_URL + "/cart"}
                          component={Cart}
                        />
                        <Route
                          path={process.env.PUBLIC_URL + "/myOrder"}
                          component={MyOrder}
                        />
                        <Route
                          path={process.env.PUBLIC_URL + "/wishlist"}
                          component={Wishlist}
                        />
                        <Route
                          path={process.env.PUBLIC_URL + "/checkout"}
                          component={Checkout}
                        />
                        <Route
                          path={process.env.PUBLIC_URL + "/my-account"}
                          component={MyAccount}
                        />
                      </>
                    ) : (
                      <Redirect
                        to={process.env.PUBLIC_URL + "/login-register"}
                      />
                    )
                  }
                />
                {/* <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={Wishlist}
                /> */}
                <Route
                  path={process.env.PUBLIC_URL + "/compare"}
                  component={Compare}
                />
                {/* <Route
                  path={process.env.PUBLIC_URL + "/checkout"}
                  component={Checkout}
                /> */}

                <Route
                  path={process.env.PUBLIC_URL + "/not-found"}
                  component={NotFound}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
