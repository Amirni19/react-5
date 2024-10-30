import style from './CatalogPage.module.css'
import { Catalog } from '../components/Catalog/Catalog'


export function Catalog() {
    return (
        <>
            <div className="container">
                <div className={style.mt}>
                    <Catalog />
                </div>
            </div>
        </>
    )
}