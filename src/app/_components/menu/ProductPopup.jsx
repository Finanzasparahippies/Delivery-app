import {useState, useEffect, useRef, useContext} from "react";
import Link from "next/link";

import CartContext from "../../utils/cartContext";
import {useQuantity, useExtrasQuantity} from "../../hooks/useQuantity";
import usePendingOrder  from "../../hooks/usePendingOrder";


const ProductPopup = ( {item, showProduct, setShowProduct, categoria} ) => {

    const [total, setTotal] = useState(0);
    // const [showQuantitySection, setShowQuantitySection] = useState(true);
    const [showExtrasSection, setShowExtrasSection] = useState(false);
    const [extrasFreeQuantity, setExtrasFreeQuantity] = useState({
        "salsa roja": 0,
        "salsa wera": 0,
        "aderezo de bongles": 0,
    });
    
    const extraPrice = 15;
    const popupRef = useRef(null);
    const [numTriangles, setNumTriangles] = useState(0);

    //custom hooks
    const { quantity, increaseQuantity, decreaseQuantity, updateQuantity } = useQuantity(1);
    const [extras, setExtras] = useState([]);
    const { extraQuantity, increaseExtraQuantity, decreaseExtraQuantity } = useExtrasQuantity(1);
    const { pendingOrder, totalOrder, addToPendingOrder, removeFromPendingOrder } = usePendingOrder(item, quantity, extras, extraQuantity, extrasFreeQuantity, 15);
    // const { pendingOrder, addToPendingOrder } = usePendingOrder(item);
    const { cartItems, addOrderToCart , removeFromCart, addToCart } = useContext(CartContext);
    
    const updatedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const closePopup = () => {
        setShowProduct(false);
    };

    const handleAddToCart = () => {
        addOrderToCart(pendingOrder);
        closePopup();
        };

    const handleRemoveFromPendingOrder = (event, index) => {
        event.stopPropagation();
        removeFromPendingOrder(index);
         // Verifica si aún hay productos después de eliminar
        const remainingProducts = pendingOrder.filter((_, i) => i !== index);
        
        // Si aún quedan productos, mantén el popup abierto
        if (remainingProducts.length > 0) {
            setShowProduct(true);
            } else {
            // Si no quedan productos, puedes decidir qué hacer
            closePopup();
            }
        };
        
        
        const handleExtrasChange = (productIndex, extra) => {
            setExtras((prevExtras) => {
                const productExtras = prevExtras[productIndex] || [];
                if (productExtras.includes(extra)) {
                    // Si el extra ya está seleccionado, lo eliminamos
                    return {
                    ...prevExtras,
                    [productIndex]: productExtras.filter((e) => e !== extra),
                    };
                } else {
                    // Si no está seleccionado, lo agregamos
                    return {
                    ...prevExtras,
                    [productIndex]: [...productExtras, extra],
                    };
                }
                });
            };
        
        const increaseExtrasFree = ( id ) => {
        setExtrasFreeQuantity(prev => ({
            ...prev,
            [id]: Math.min((prev[id]) + 1, 2)
        }));
        };
        
        const decreaseExtrasFree = ( freeKey ) => {
        setExtrasFreeQuantity(prev => ({
            ...prev,
            [freeKey]: Math.max(prev[freeKey] - 1, 0)
        }));
    };
    
        useEffect(() => {
            const calculateTotal = () => {
            let productTotal = item.price * quantity;
        
            let extrasTotal = extras.reduce((total, extraId) => {
                const extraDetail = item.extras.find(extra => extra.id === extraId);
                const extraQuantityValue = extraQuantity[extraId] || 0;
                return total + (extraDetail?.price || extraPrice) * extraQuantityValue;
            }, 0);
        
            setTotal(productTotal + extrasTotal);            
        };
            calculateTotal();
        }, [quantity, extras, extraQuantity]);

        useEffect(() => {
            const calculateTriangles = () => {
            if (popupRef.current) {
                const popupWidth = popupRef.current.offsetWidth;
                const triangleWidth = 26;
                const numOfTriangles = Math.floor(popupWidth / triangleWidth);
                setNumTriangles(numOfTriangles);
            }
            };
        
            window.addEventListener('resize', calculateTriangles);
            calculateTriangles();
        
            return () => {
            window.removeEventListener('resize', calculateTriangles);
            };
        }, [showProduct]);

        useEffect(() => {
                const handleClickOutside = (event) => {
                if (popupRef.current && !popupRef.current.contains(event.target)) {
                    closePopup();
                }
                };
            
                if (showProduct) {
                document.addEventListener("click", handleClickOutside);
                document.body.classList.add('no-scroll');
                } else {
                document.removeEventListener("click", handleClickOutside);
                document.body.classList.remove('no-scroll');
                }
            
                return () => {
                document.removeEventListener("click", handleClickOutside);
                };
            }, [showProduct]);
            

    return (
        <>
                {
                    console.log(
                    "pendingOrder", pendingOrder,
                    "cartItems", cartItems,
                    "extras", extras,
                )
                }
            <div className="popup-overlay">
                <div className="contain-popup">
                    <div className="ticket-popup">
                    <div className="triangle-container">
                        {[...Array(numTriangles)].map((_, index) => (
                        <div key={index} className="triangle-popup"></div>
                        ))}
                    </div>
                    </div>
                <div className="popup-content" ref={popupRef}>
                    <h2 className="">{item.name}</h2>
                    <img className="img-popup" src={item.image} alt={item.name} />
                    <p className="price-detail">${item.price}</p>

                    {/* <div className="container-detail">
                    <p
                        style={ { backgroundColor:"transparent", color:"black", fontWeight:"bold", textAlign:"center" }}
                    >
                        Selecciona la Cantidad{''}
                    </p>
                    { showQuantitySection && (
                        <div>
                        <button className="increase" onClick={decreaseQuantity}>-</button>
                        <span className="product-span">{quantity}</span>
                        <button className="decrease" onClick={increaseQuantity}>+</button>
                        </div>
                    )
                    }
                    </div> */}
                    <hr style={{marginTop:"0px"}}/>
                    {categoria !== "Bebidas" && (
                    <>
                    {
                    <div key={item.id}>
                    <p style={ { backgroundColor:"transparent", color:"black", fontWeight:"bold", textAlign:"center" }}>selecciona los extras para la {`${item.name} `}</p>
                    <div className="container-detail">
                    <p
                    className="toggle-btn"
                    onClick={() => setShowExtrasSection(!showExtrasSection)}  
                    >
                    Seleccione los extras{ showExtrasSection ? '▲' : '▼' }
                    </p>
                    { showExtrasSection && (
                    <>
                    <div className="container-detail">
                        <h4>Extras Gratuitos</h4>
                        {Object.keys(extrasFreeQuantity).map((freeKey) => (
                            <div key={freeKey} className="extras-container">
                            <span className="extra-label">{freeKey}</span>
                                <div className="extra-quantity-control">
                                <button className="decreaseExtra" onClick={ () => decreaseExtrasFree(freeKey)}> - </button>
                                    <span className="extra-span">{extrasFreeQuantity[freeKey]}</span>
                                <button className="increaseExtra" onClick={ () => increaseExtrasFree(freeKey)}> + </button>
                                </div>
                            </div>
                        ))}
                        </div>
                    <p className="price-detail">Extras ${extraPrice}</p>
                    <ul className="ul-ingredients" style={{ paddingBottom:"20px"}}>
                    {item.extras?.map((extra, key) => (
                        <li key={key}>
                            <button 
                            className={`add-extra-btn ${extras.includes(extra.ingredient) ? 'added' : ''}`}
                            onClick={() => {
                                if (extras.includes(extra.ingredient)) {
                                setExtras(extras.filter( (ingredient) => ingredient !== extra.ingredient));
                                } else {
                                    setExtras([...extras, extra.ingredient]);
                                }
                                }}
                            >
                            <span className="extra-label">{extra.ingredient}</span>
                            {/* {extras.includes(extra.ingredient) ? 'Remover' : 'Agregar'} */}
                            </button>
                            {extras.includes(extra.ingredient) && (
                            <div className="extra-quantity-control">
                                <button className="decreaseExtra" onClick={() => decreaseExtraQuantity(extra.ingredient)}>-</button>
                                <span className="extra-span">{extraQuantity[extra.ingredient] || 0}</span>
                                <button className="increaseExtra" onClick= {() => increaseExtraQuantity(extra.ingredient)}>+</button>
                            </div>
                            )}
                            <br />
                        </li>
                    ))}
                    </ul>
                    </>
                    )}
                </div>
                <hr style={{marginTop:"0px"}}/>
                </div>
                    }
                <button className="sb-btn-add" onClick={addToPendingOrder}>Agregar Producto</button>
                </>
                    )}
                    <hr style={{marginTop:"0px"}}/>
                    <p className="price-detail">Orden: ${total}</p>
                    <hr style={{marginTop:"0px"}}/>
                    <p className="price-detail">Total: ${totalOrder}</p>
                    <hr style={{marginTop:"0px"}}/>
                    <div className="container-detail">
                                {pendingOrder.length > 0 && (
                            <div>
                                <h3>Productos en la Orden:</h3>
                                    {pendingOrder.map((product, index) => (
                                        <div key={index}>
                                        <p>{product.name} x {product.quantity}</p>
                                        <button className="sb-btn-remove" onClick={(e) => handleRemoveFromPendingOrder(e, index)}>Remover Producto</button>
                                        </div>
                                    ))}
                                <button className="sb-btn-add" onClick={handleAddToCart}>Agregar Producto a la Orden</button>
                            </div>
                        )}
                        {
                            updatedCart.length > 0 && (
                                <div>
                                    <h3>Productos en el Carrito:</h3>
                                    {updatedCart.map((product, index) => (
                                        console.log("key", index),
                                        <div key={index}>
                                        <p>{product.name} x {product.quantity}</p>
                                        <button className="sb-btn-remove" onClick={(e) => removeFromCart(e, product.id)}>Remover Producto</button>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>            
                    {/* <Link href="/cart" className="sb-btn sb-btn sb-btn-text">
                        <span style={{ fontWeight:"bold"}}>Ver Orden</span>
                    </Link> */}
                    <Link href="/checkout" className="sb-btn sb-btn sb-btn-shop sb-btn-text">
                        <span style={{ fontWeight:"bold"}}>Pagar</span>
                    </Link>
                    <span 
                    className="close-detail sb-btn sb-btn sb-btn-text" 
                    style={{ fontWeight:"bold"}} 
                    onClick={() => setShowProduct(false)}>
                        Seguir Comprando
                    </span>
                </div>
                </div>
            </div> 
        </>
    )
}

export default ProductPopup