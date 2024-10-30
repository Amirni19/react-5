import style from './Home.module.css';
// import { Banner } from '../components/Banner/BannerPage';
import { Category } from '../components/Category/Category';
import { Catalog } from '../components/Catalog/Catalog'

export function HomePage() {
    return (
        <>
            <div className="mt110">
                <div className='container'>
                    <div className={style.catalog}>
                        <p className={style.catalog_title}>Каталог товаров</p>
                        <div className={style.categories}>
                            <p className={style.p}>Категории:</p>
                            <Category />
                        </div>
                        <Catalog />
                    </div>
                </div>
            </div>
        </>
    )
}