import {Outlet} from "react-router";
import {Header} from "../components/Header/Header";
import {useEffect, useState} from "react";
import {cardList} from "../constants";

export const Layout = () => {
    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState([]);

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    }

    useEffect(() => {
        setProducts(cardList)
    }, [])

    const handleSearchProducts = () => {
        setProducts(cardList.filter(({title, price}) => {
            return title.includes(searchText) || price.includes(searchText) ;
        }))
    }

    return (
        <>
            <Header />
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" value={searchText} onChange={handleSearch }/>
                            <button className="btn btn-primary" onClick={handleSearchProducts}>
                                <img src="/images/search.svg" alt="search" className="search-btn__icon" />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>
            <Outlet context={{products}}/>
            </main>
        </>
    )
}