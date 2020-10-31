import * as d3 from "d3";

export const formatCurrency = (num) => {
    console.log(USD.format(num))
    return "$" + Number(num.toFixed(1)).toLocaleString()+" ";
}

export const formatDate = (date)=>{
    let d = date.toString();
    let year = d.substring(0,4);
    let month = d.substring(5,7);
    let dat = d.substring(8,10);
    d = "";
    d = dat+"-"+month+"-"+year;
    return d;
}


//currency format
const USD = new Intl.NumberFormat('en-US', {
style: 'currency',
currency: 'USD',
minimumFractionDigits: 2
})
