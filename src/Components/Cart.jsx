import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import {
  addcart,
  delcart,
  increament,
  decreament,
} from "../redux/action/index";

const Cart = () => {
  let navigate = useNavigate();
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const handleclose = (cartitemremove) => {
    dispatch(delcart(cartitemremove));
  };
  const handleincrement = (itemincrement) => {
    dispatch(increament(itemincrement));
  };
  const handledecrement = (itemdecrement) => {
    dispatch(decreament(itemdecrement));
  };

  const emptyCart = () => {
    return <tr>Your cart is empty</tr>
  };
  console.log(state, "state")

  const map1 = state.map((x, i) => {
    let productId
    // mens tshirt start
    if (x.id == "41166794653902") {
      switch (x.selectedSize) {
        case 1: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166794653902';
              break;
            case 2:
              productId = '41166794686670';
              break;
            case 3:
              productId = '41166794719438';
              break;
            case 4:
              productId = '41166794752206';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 2: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166794784974';
              break;
            case 2:
              productId = '41166794817742';
              break;
            case 3:
              productId = '41166794850510';
              break;
            case 4:
              productId = '41166794883278';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 3: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166794916046';
              break;
            case 2:
              productId = '41166794948814';
              break;
            case 3:
              productId = '41166794981582';
              break;
            case 4:
              productId = '41166795014350';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 4: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166795047118';
              break;
            case 2:
              productId = '41166795079886';
              break;
            case 3:
              productId = '41166795112654';
              break;
            case 4:
              productId = '41166795145422';
              break;

          }
        }
      }
      switch (x.selectedSize) {
        case 5: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166795178190';
              break;
            case 2:
              productId = '41166795210958';
              break;
            case 3:
              productId = '41166795243726';
              break;
            case 4:
              productId = '41166795276494';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 6: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166795309262';
              break;
            case 2:
              productId = '41166795342030';
              break;
            case 3:
              productId = '41166795374798';
              break;
            case 4:
              productId = '41166795407566';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 7: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166795440334';
              break;
            case 2:
              productId = '41166795473102';
              break;
            case 3:
              productId = '41166795505870';
              break;
            case 4:
              productId = '41166795538638';
              break;
          }
        }
      }
    }
    // mens tshirt end
    // ladies tshirt start
    if (x.id == "40999509065934") {
      switch (x.selectedSize) {
        case 1: {
          switch (x.selectedValue) {
            case 1:
              productId = '40999509065934';
              break;
            case 2:
              productId = '40999509131470';
              break;
            case 3:
              productId = '40999509164238';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 2: {
          switch (x.selectedValue) {
            case 1:
              productId = '40999509197006';
              break;
            case 2:
              productId = '40999509262542';
              break;
            case 3:
              productId = '40999509295310';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 3: {
          switch (x.selectedValue) {
            case 1:
              productId = '40999509328078';
              break;
            case 2:
              productId = '40999509393614';
              break;
            case 3:
              productId = '40999509426382';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 4: {
          switch (x.selectedValue) {
            case 1:
              productId = '40999509459150';
              break;
            case 2:
              productId = '40999509557454';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 5: {
          switch (x.selectedValue) {
            case 1:
              productId = '40999509590222';
              break;
            case 2:
              productId = '40999509655758';
              break;
            case 3:
              productId = '40999509688526';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 6: {
          switch (x.selectedValue) {
            case 1:
              productId = '40999509721294';
              break;
            case 2:
              productId = '40999509786830';
              break;
            case 3:
              productId = '40999509819598';
              break;
          }
        }
      }
    }
    // ladies tshirt end
    // hoodie start
    if (x.id == "40992657866958") {
      switch (x.selectedSize) {
        case 1: {
          switch (x.selectedValue) {
            case 1:
              productId = '40992657866958';
              break;
            case 2:
              productId = '40992657932494';
              break;
            case 3:
              productId = '40992657965262';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 2: {
          switch (x.selectedValue) {
            case 1:
              productId = '40992657998030';
              break;
            case 2:
              productId = '40992658063566';
              break;
            case 3:
              productId = '40992658096334';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 3: {
          switch (x.selectedValue) {
            case 1:
              productId = '40992658129102';
              break;
            case 2:
              productId = '40992658194638';
              break;
            case 3:
              productId = '40992658227406';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 4: {
          switch (x.selectedValue) {
            case 1:
              productId = '40992658260174';
              break;
            case 2:
              productId = '40992658325710';
              break;
            case 3:
              productId = '40992658358478';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 5: {
          switch (x.selectedValue) {
            case 1:
              productId = '40992658391246';
              break;
            case 2:
              productId = '40992658456782';
              break;
            case 3:
              productId = '40992658489550';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 6: {
          switch (x.selectedValue) {
            case 1:
              productId = '40992658522318';
              break;
            case 2:
              productId = '40992658587854';
              break;
          }
        }
      }
    }
    // hoodie end
    // mug start
    if (x.id == "40999393001678") {
      switch (x.selectedValue) {
        case 1:
          productId = '40999393001678';
          break;
        case 2:
          productId = '40999393034446';
          break;
      }
    }
    // mug end
    // metal sign start
    if (x.id == "41138846007502") {
      switch (x.selectedSize) {
        case 1:
          productId = '41138846007502';
          break;
        case 2:
          productId = '41138846040270';
          break;
        case 3:
          productId = '41197827064014';
          break;
        case 4:
          productId = '41138846105806';
          break;
      }
    }
    // metal sign end
    return (i ? '' : '') + productId + ":" + x.qty
  })
  const map2 = state.map((x, i) => {
    let productId
    // mens tshirt start
    if (x.id == "41166794653902") {
      switch (x.selectedSize) {
        case 1: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166794653902';
              break;
            case 2:
              productId = '41166794686670';
              break;
            case 3:
              productId = '41166794719438';
              break;
            case 4:
              productId = '41166794752206';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 2: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166794784974';
              break;
            case 2:
              productId = '41166794817742';
              break;
            case 3:
              productId = '41166794850510';
              break;
            case 4:
              productId = '41166794883278';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 3: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166794916046';
              break;
            case 2:
              productId = '41166794948814';
              break;
            case 3:
              productId = '41166794981582';
              break;
            case 4:
              productId = '41166795014350';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 4: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166795047118';
              break;
            case 2:
              productId = '41166795079886';
              break;
            case 3:
              productId = '41166795112654';
              break;
            case 4:
              productId = '41166795145422';
              break;

          }
        }
      }
      switch (x.selectedSize) {
        case 5: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166795178190';
              break;
            case 2:
              productId = '41166795210958';
              break;
            case 3:
              productId = '41166795243726';
              break;
            case 4:
              productId = '41166795276494';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 6: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166795309262';
              break;
            case 2:
              productId = '41166795342030';
              break;
            case 3:
              productId = '41166795374798';
              break;
            case 4:
              productId = '41166795407566';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 7: {
          switch (x.selectedValue) {
            case 1:
              productId = '41166795440334';
              break;
            case 2:
              productId = '41166795473102';
              break;
            case 3:
              productId = '41166795505870';
              break;
            case 4:
              productId = '41166795538638';
              break;
          }
        }
      }
    }
    // mens tshirt end
    // ladies tshirt start
    if (x.id == "40999509065934") {
      switch (x.selectedSize) {
        case 1: {
          switch (x.selectedValue) {
            case 1:
              productId = '40999509065934';
              break;
            case 2:
              productId = '40999509131470';
              break;
            case 3:
              productId = '40999509164238';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 2: {
          switch (x.selectedValue) {
            case 1:
              productId = '40999509197006';
              break;
            case 2:
              productId = '40999509262542';
              break;
            case 3:
              productId = '40999509295310';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 3: {
          switch (x.selectedValue) {
            case 1:
              productId = '40999509328078';
              break;
            case 2:
              productId = '40999509393614';
              break;
            case 3:
              productId = '40999509426382';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 4: {
          switch (x.selectedValue) {
            case 1:
              productId = '40999509459150';
              break;
            case 2:
              productId = '40999509557454';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 5: {
          switch (x.selectedValue) {
            case 1:
              productId = '40999509590222';
              break;
            case 2:
              productId = '40999509655758';
              break;
            case 3:
              productId = '40999509688526';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 6: {
          switch (x.selectedValue) {
            case 1:
              productId = '40999509721294';
              break;
            case 2:
              productId = '40999509786830';
              break;
            case 3:
              productId = '40999509819598';
              break;
          }
        }
      }
    }
    // ladies tshirt end
    // hoodie start
    if (x.id == "40992657866958") {
      switch (x.selectedSize) {
        case 1: {
          switch (x.selectedValue) {
            case 1:
              productId = '40992657866958';
              break;
            case 2:
              productId = '40992657932494';
              break;
            case 3:
              productId = '40992657965262';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 2: {
          switch (x.selectedValue) {
            case 1:
              productId = '40992657998030';
              break;
            case 2:
              productId = '40992658063566';
              break;
            case 3:
              productId = '40992658096334';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 3: {
          switch (x.selectedValue) {
            case 1:
              productId = '40992658129102';
              break;
            case 2:
              productId = '40992658194638';
              break;
            case 3:
              productId = '40992658227406';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 4: {
          switch (x.selectedValue) {
            case 1:
              productId = '40992658260174';
              break;
            case 2:
              productId = '40992658325710';
              break;
            case 3:
              productId = '40992658358478';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 5: {
          switch (x.selectedValue) {
            case 1:
              productId = '40992658391246';
              break;
            case 2:
              productId = '40992658456782';
              break;
            case 3:
              productId = '40992658489550';
              break;
          }
        }
      }
      switch (x.selectedSize) {
        case 6: {
          switch (x.selectedValue) {
            case 1:
              productId = '40992658522318';
              break;
            case 2:
              productId = '40992658587854';
              break;
          }
        }
      }
    }
    // hoodie end
    // mug start
    if (x.id == "40999393001678") {
      switch (x.selectedValue) {
        case 1:
          productId = '40999393001678';
          break;
        case 2:
          productId = '40999393034446';
          break;
      }
    }
    // mug end
    // metal sign start
    if (x.id == "41138846007502") {
      switch (x.selectedSize) {
        case 1:
          productId = '41138846007502';
          break;
        case 2:
          productId = '41138846040270';
          break;
        case 3:
          productId = '41197827064014';
          break;
        case 4:
          productId = '41138846105806';
          break;
      }
    }
    // metal sign end
    return (i ? '&' : '') + `attributes[${productId}]` + "=" + `${x.selectedImage ? `https://tangibletokensbucket.s3.amazonaws.com/${x.selectedImage}` : "No Image selected"}`
  })

  const procedToCheckout = () => {
    return (
      <> <a href={`https://www.tangibletokenz.com/cart/${map1}?${map2}`} className="proceed-checkout-btn mb-5">
        <i className="fa fa-lock" aria-hidden="true"></i><span> Proceed to checkout</span>
      </a>
      </>
    );
  };
  

 
  // const newPrice = state.filter(product => product.size.some(item => item.id == product.selectedSize ? item.price: "")
  // ).reduce((acc, curr) => {
  //   acc += curr.qty * curr.price;
  //   return acc;
  // }, 0);

  // console.log(newPrice,'newPrice')
  let selval = 100
  const cartItems = (cartItem) => {
    return (
      <React.Fragment key={cartItem.id} >
        <tr className="cart__row table__section">
          <td
            className="text-center product-image cart__image"
            data-label="Product"
          >
            {cartItem.color.length != 0 && cartItem.size.length === 0 ?
              cartItem.thumbnails.map((thumb) =>
                thumb.id === cartItem.selectedValue ?
                  <div className="selectedImage">
                    <img src={thumb.url} height="92px" key={thumb.id} />
                    {cartItem.selectedImage ? <img className="imagepositon" src={`/images/${cartItem.selectedImage}`} /> : ""}
                  </div>
                  : ""
              )
              : null}
            {cartItem.size.length != 0 && cartItem.color.length === 0 ?
              cartItem.thumbnails.map((thumb) =>
                thumb.id === cartItem.selectedSize ?
                  <div className="selectedImage">
                    <img src={thumb.url} height="92px" key={thumb.id} />
                    {cartItem.selectedImage ? <img className="imagepositon" src={`/images/${cartItem.selectedImage}`} /> : ""}
                  </div>
                  : ""
              )
              : null}
            {cartItem.size.length != 0 && cartItem.color.length != 0 ?
              cartItem.thumbnails.map((thumb) =>
                thumb.id === cartItem.selectedValue ?
                  <div className="selectedImage">
                    <img src={thumb.url} height="92px" key={thumb.id} />
                    {cartItem.selectedImage ? <img className="imagepositon" src={`/images/${cartItem.selectedImage}`} /> : ""}
                  </div>
                  : ""
              )
              : null}
          </td>
          <td className="text-center cart-item--title">
            {cartItem.title}
            <p>{cartItem.size.length != 0 ?
              cartItem.size.map((size) =>
                size.id === cartItem.selectedSize ?
                  <small key={size.id}> {size.type} </small>
                  : ""
              )
              : ""}
              {cartItem.size.length && cartItem.color.length != 0 ? "/ " : ""}
              {cartItem.color.length != 0 ?
                cartItem.color.map((col) =>
                  col.id === cartItem.selectedValue ?
                    <small key={col.id}>{col.color_name}</small>
                    :
                    ""
                )
                : ""}

            </p>
            <div className="js-qty">
              <span className="cart_qty">
                <button
                  onClick={() => handledecrement(cartItem)}
                  className="entry-holder cartminus"
                >
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </button>
                <p>{cartItem.qty}</p>
                <button
                  onClick={() => handleincrement(cartItem)}
                  className="entry-holder cartplus"
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
              </span>
              <br />
            </div>
          </td>
          <td className="total_price" data-label="Total">
            <span className="cart-item-price">
              $
              {cartItem.size.length != 0 ?
                cartItem.size.map((res) => {
                  return (
                    cartItem.selectedSize === res.id ? (cartItem.qty * res.price).toFixed(2) : ""
                  );
                })
                :
                (cartItem.qty * cartItem.price).toFixed(2)
              }
            </span>

            <button
              onClick={() => handleclose(cartItem)}
              className="cart__remove"
            >
              Remove
            </button>
          </td>
        </tr>

      </React.Fragment>
    );
  };
  return (
    <div className="cart-page py-5">
      <div className="container-wrap">
        <span className="d-none d-md-block">{state.length !== 0 && procedToCheckout()}</span>
        <table className="cart-table full text-center">
          <thead className="cart__row cart__header-labels">
            {/* <tr className="titlecol"></tr> */}
          </thead>
          <tbody>
            {/* {state.length !== 0 && procedToCheckout()} */}
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
          </tbody>
        </table>
        <div className="bottom-cart-info">
          <div className="cart-row-2">
            {state.length !== 0 ?
              <div className="cont-shopping pt-5">
                <NavLink to="/">Continue Shopping</NavLink>
              </div>
              : <p className="text-center pt-3"><button onClick={() => navigate("/")} className="btn-dark text-center p-10 pt-2 pb-2">Continue shopping</button></p>
            }
            {state.length !== 0 &&
              <div className="total-all pt-2 pt-md-5">
                Total:{" "}
                <strong>
                  <span className="cart-total"> ${state.reduce((sum, i) => (
                    sum += i.qty * (i.variatioPrice != "0" ? i.variatioPrice : i.price)
                  ), 0).toFixed(2)}</span>
                </strong>
              </div>}
            {state.length !== 0 && procedToCheckout()}
          </div>
          {state.length !== 0 &&
            <p className="cart-cupom-code pb-5 mb-0">
              CONGRATULATIONS! WE'LL PAY YOUR SHIPPING
            </p>}
        </div>
      </div>
    </div>
  );
};
export default Cart;
