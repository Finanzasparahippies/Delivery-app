import { useState, useEffect } from "react";

const usePendingOrder = (item, quantity, extras, extraQuantity, extrasFreeQuantity, extraPrice) => {
    
    const [pendingOrder, setPendingOrder] = useState([]);
    const [totalOrder, setTotalOrder] = useState(0);

    const addToPendingOrder = () => {
        const newProduct = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        extras: extras.map(extraId => {
            const extraDetail = item.extras.find(extra => extra.id === extraId);
            return {
            id: extraId,
            name: extraDetail?.ingredient || "",
            price: extraDetail?.price || extraPrice,
            quantity: extraQuantity[extraId] || 1,
            };
        }),
        extrasFreeQuantity,
        };
        setPendingOrder((prev) => [...prev, newProduct]);
    };

    const removeFromPendingOrder = (index) => {
        setPendingOrder(pendingOrder.filter((_, i) => i !== index));
    };

    // useEffect(() => {
    //     const pendingTotal = pendingOrder.reduce((total, product) => {
    //     let productTotal = product.price * product.quantity;
    //     let extrasTotal = product.extras.reduce((acumulado, extra) => {
    //         return acumulado + extra.price * (extra.quantity || 1);
    //     }, 0);
    //     return total + productTotal + extrasTotal;
    //     }, 0);
    //     setTotalOrder(pendingTotal);
    // }, [pendingOrder]);

    return { pendingOrder, totalOrder, addToPendingOrder, removeFromPendingOrder };
};

export default usePendingOrder;

