
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const Carrito = () => {
    const { carrito, total, vaciarCarrito } = useContext(CartContext)  

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
    <div className='container'>
        <h1 className='container-h1'>Carrito</h1>
        <div className='container-carrito'>
        
        {
            carrito.map((producto) => (
                <div key={producto.id}>
                    <h3>{producto.titulo}</h3>
                    <img src={producto.imagen} alt={producto.nombre} />
                    <p>Precio unitario: $ {producto.precio}</p>
                    <p>Cantidad: {producto.cantidad}</p>
                    <p>Total: $ {producto.precio * producto.cantidad}</p>
                </div>
            ))
        }
        {   
                    carrito.length > 0 ?
                    <div className='finalizar-compra'>
                        <h2>Precio total: ${total()}</h2>
                        <button className='boton-vaciar' onClick={handleVaciar}>Vaciar <i class="fa-solid fa-trash"></i></button>
                        <Link className='boton-finalizar-compra' to="/checkout">Finalizar compra</Link>
                    </div> :
                    <h2>El carrito esta vacio :'(</h2>
        }
       </div> 
    </div>
  )
}

