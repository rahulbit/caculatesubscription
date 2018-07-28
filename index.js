const  express = require('express')
const moment = require ('moment')

const readline = require('readline-sync')



let expiry_date = moment.utc().format('DD/MM/YYYY')

let months_to_buy=readline.question("months_to_buy : ");
let monthly_cost =readline.question("monthly_cost : ");
let annual_cost =readline.question("annual_cost : "); 




let calculate_subscription =(expiry_date, months_to_buy, monthly_cost, annual_cost)=>{
    

    if(months_to_buy==3)


    {
    const  cost  = (monthly_cost*2 + (monthly_cost/30)*26)
    
    let new_expiry = moment().add(86, 'd').format('DD/MM/YYYY')

      console.log( `${new_expiry} ,${cost}`)
    }

    if(months_to_buy==1)
    {
        const cost = ((monthly_cost/30)*26);
        let new_expiry = moment().add(26, 'd').format('DD/MM/YYYY');
       
        console.log(`${new_expiry} , ${cost}`)
    }


    if(months_to_buy==12)
    {      
        
           const  cost =  ( annual_cost*1 + ((annual_cost/365)*12))  ;
            let  new_expiry = moment().add(377, 'd').format('DD/MM/YYYY');

            console.log( `${new_expiry} , ${cost}`)
    }

    

}


calculate_subscription(expiry_date, months_to_buy, monthly_cost, annual_cost)