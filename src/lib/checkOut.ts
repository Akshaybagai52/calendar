
// import {loadStripe} from '@stripe/stripe-js'
// export const getStripe = () => {
//   let stripePromise = null;
//   let publishKey:string  = process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY || "publish key"

//   if (!stripePromise) {
//     stripePromise = loadStripe(publishKey);
//   }
//   return stripePromise;
// };



let siteUrl:string="https://bookingcalendar.vercel.app/"

let Url=typeof window !== "undefined" && window.location.href==="http://localhost:3000/plans" ?"http://localhost:3000/":siteUrl

  export const checkOut = async (PayId:any) => {
    

    // try {
    //   const stripe = await getStripe(); 
    //   const lineItemsFormatted = [
    //     {
    //         price:PayId ,
    //         quantity: 1,
    //       },

    //   ];
    
    //   await stripe?.redirectToCheckout({
    //     mode: "subscription",
    //     lineItems:lineItemsFormatted,
    //     successUrl:`${Url}`,
    //     cancelUrl: `${Url}`,
    //   });
    //   return stripe
    // } catch (error) {
      
    //   console.error('Error during checkout:', error);
     
    //   throw error;
    // }


  };
  