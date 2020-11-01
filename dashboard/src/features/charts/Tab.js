import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Chart from "../../components/Chart";

import { changeAttribute, selectAttribute } from './chartSlice'

export function Tab(){


    const selectedAttribute = useSelector(selectAttribute)
    const dispatch = useDispatch()
    const [initial] = useState('retailSales')
    
    return (
        <div>
            <button aria-label="retail sales" value = "retailSales" onClick= {(e)=> dispatch(changeAttribute(e.target.value))}>retail sales</button>
            <button aria-label="units sold" value = "unitsSold" onClick= {(e)=> dispatch(changeAttribute(e.target.value))}>Units Sold</button>
            <button aria-label="wholesale sales" value = "wholesaleSales" onClick= {(e)=> dispatch(changeAttribute(e.target.value))}>wholesale sales</button>
            <button aria-label="retailer margin" value = "retailerMargin" onClick= {(e)=> dispatch(changeAttribute(e.target.value))}>retailer margins</button>

            <p>{selectedAttribute}</p>

        </div>
    )
}


