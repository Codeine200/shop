import {Card} from "../components/Card/Card";
import { cardList} from "../constants";
import {useOutletContext} from "react-router";

export const Home = () => {
    const { products } = useOutletContext();

    return (
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main__title">Рекомендации для вас</h2>

                                <div className="content-main__list">
                                    {
                                        products.map(card => (
                                            <Card
                                                key={card.id}
                                                card={card}
                                            />
                                        ))
                                    }
                                 </div>
                            </div>

                            <div className="content-side">
                                <h3 className="content-side__title">Сервисы и услуги</h3>

                                <div className="content-side__box">
                                    <div className="content-side__list">
                                        <div className="content-side__list-item">
                                            <img src="/images/delivery-truck.svg" alt="delivery-truck"
                                                 className="content-side__list-item--image"/>
                                            <h5 className="content-side__list-item--title">Доставка</h5>
                                            <p className="content-side__list-item--text">Проверка при получении и
                                                возможность бесплатно вернуть товар</p>
                                        </div>
                                        <div className="content-side__list-item">
                                            <img src="/images/sedan.svg" alt="sedan"
                                                 className="content-side__list-item--image"/>
                                            <h5 className="content-side__list-item--title">Автотека</h5>
                                            <p className="content-side__list-item--text">Отчёт с историей авто: пробег,
                                                владельцы, сведения о залоге, ДТП и ремонтах</p>
                                        </div>
                                        <div className="content-side__list-item">
                                            <img src="/images/group.svg" alt="group"
                                                 className="content-side__list-item--image"/>
                                            <h5 className="content-side__list-item--title">Онлайн-бронирование
                                                жилья</h5>
                                            <p className="content-side__list-item--text">Посуточная аренда квартир и
                                                домов: большой выбор вариантов для поездок по России</p>

                                        </div>
                                    </div>

                                    <div className="content-side__footer">
                                        <p className="content-side__footer-item">© ООО «Codeine», 2008–2025</p>
                                        <a href="#" className="content-side__footer--item">Политика
                                            конфиденциальности</a>
                                        <a href="#" className="content-side__footer--item">Обработка данных</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}