import React from 'react'
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = () => {
  return (
    <h3><FontAwesomeIcon icon={faBagShopping} /></h3>
  )
}

export default CartWidget