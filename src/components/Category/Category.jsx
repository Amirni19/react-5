import style from './Category.module.css'

export function Category() {
    return (
        <>
        <div className="container">
        <p className={style.catalog_title}>Каталог товаров</p>
            <div className={style.category}>
                <p className={style.active}>Все товары</p>
                <p>Шины/колеса</p>
                <p>Масла</p>
                <p>Ароматизаторы</p>
            </div>
            </div>
        </>
    )
}