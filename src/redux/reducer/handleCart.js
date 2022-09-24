const cart =[];


const handleCart = (state = cart,action) =>{
  const product = action.payload;
  switch(action.type){
      case "ADDITEM" :
        //   check if product is already exist
     const exit = state.find((x)=>x.id === product.id);
     if(exit){
         // incraese the quantity
         return state.map((x)=>
         x.id === product.id ? {...x, qty: x.qty+1} :x
         );
     }else{
         const product = action.payload;
         return [
             ...state,
             {
                 ...product,
                 qty:1,
             }
         ]
     }
      break;
     
      case "DELITEM":
        const exit1 = state.find((x)=>x.id === product.id);
        if(exit1.qty === 1){
            return state.filter((x)=>x.id !==exit1.id);
        }else{
            return state.map((x)=>
            x.id === product.id ?{...x, qty: x.qty-1}:x
            );
        }
       break;

      default:
          return state;
          break;
  }
}
export default handleCart;
