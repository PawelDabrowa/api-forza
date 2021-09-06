import React from 'react'

export const Price = ({ minimum_price, ...rest }) => {
  const currency = minimum_price.regular_price.currency || 'GBP'

  const price = minimum_price.regular_price.value.toLocaleString('en-US', {
    style: 'currency',
    currency,
  })


  return (
    <span>
      {price} 
    </span>
  )
}
