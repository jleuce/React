import { useEffect,useState } from 'react';


const products = [
    {id: 1, name:"mouse", price:"20"},
    {id: 2, name:"teclado", price:"30"},
    {id: 3, name:"monitor", price:"250"},
];



const ItemList = () => {
    const [items , setItems] = useState([])
// esto hace que se ejecute al traer el componente
    useEffect( () => {
        getProducts()
    }, []);
    

   /* const getProducts = () => {
        const productsPromise = new Promise((resolve,reject) => {
            const rand = Math.random();
            console.log(rand);
            if (rand >0.5){
            resolve ("success");
            }
            else{
            reject ("fail");
            }
        })*/
        const getProducts = () => {
            const productsPromise = new Promise((resolve) => {
                setTimeout(() => {
                resolve (products)
                },3000);
            })
        productsPromise
        .then( res => {
            console.log ("res: "+ JSON.stringify(res));
            setItems(products);
        })

        .catch( err => {
            console.log ("err: "+ err);
        })

        console.log("trayendo productos...");
    
}


  return (
    <div>
        <h1>Componente ItemList</h1>
    { items.map ( item => <li key = {item.id}>{item.name}</li>)    }
  </div>
  )
}

export default ItemList