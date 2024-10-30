import style from './Catalog.module.css'
import { Card } from '../Cards/Card'
import { products } from '../../Datab/Data';

export function Catalog() {
    return (
        <>
            
            <div className="container">
            <div className={style.catalog_grid}>
                {
                    products.map((product) => {
                        return (
                            <Card img={product.img} name={product.name} price={product.price} />
                        )
                    } )
                }
            </div>
            </div>
        </>
    )
}