

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;

};

type CartItem = {

    product: Product;
    quantity: number;

};


type ShoppingCart = {

    items: CartItem[];
    totalAmount: number;

};
  const jacket: Product = {
    id: 1,
    name: "Winter Jacket",
    description: "A warm winter jacket that can withstand temperatures down to -20°C",
    price: 150,
    category: "Winter Clothing",

  };

  const shoes: Product = {
    id: 2,
    name: "Winter Shoes",
    description: "Warm winter shoes that can withstand temperatures down to -15°C",
    price: 100,
    category: "Winter Shoes",

  };


  const myOrder1: CartItem = {

    product: jacket,
    quantity: 2,
  };
const myOrder2: CartItem = {

    product: shoes,
    quantity: 3,

};

const total = (myOrder1.product.price * myOrder1.quantity) + (myOrder2.product.price * myOrder2.quantity);


const cart: ShoppingCart = {
    items: [myOrder1, myOrder2],
    totalAmount: total,
};
console.log(`Total Amount: ${cart.totalAmount}`);