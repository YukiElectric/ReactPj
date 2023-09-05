import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <>
            <div>
                {/*	List Product	*/}
                <div className="products">
                    <h3>iPhone (hiện có 186 sản phẩm)</h3>
                    <div className="product-list card-deck">
                        <div className="product-item card text-center">
                            <Link to="/ProductDetails"><img src="images/product-1.png" /></Link>
                            <h4><Link to="/ProductDetails">iPhone Xs Max 2 Sim - 256GB</Link></h4>
                            <p>Giá Bán: <span>32.990.000đ</span></p>
                        </div>
                        <div className="product-item card text-center">
                            <Link to="/ProductDetails"><img src="images/product-2.png" /></Link>
                            <h4><Link to="/ProductDetails">iPhone Xs Max 2 Sim - 256GB</Link></h4>
                            <p>Giá Bán: <span>32.990.000đ</span></p>
                        </div>
                        <div className="product-item card text-center">
                            <Link to="/ProductDetails"><img src="images/product-3.png" /></Link>
                            <h4><Link to="/ProductDetails">iPhone Xs Max 2 Sim - 256GB</Link></h4>
                            <p>Giá Bán: <span>32.990.000đ</span></p>
                        </div>
                    </div>
                    <div className="product-list card-deck">
                        <div className="product-item card text-center">
                            <Link to="/ProductDetails"><img src="images/product-4.png" /></Link>
                            <h4><Link to="/ProductDetails">iPhone Xs Max 2 Sim - 256GB</Link></h4>
                            <p>Giá Bán: <span>32.990.000đ</span></p>
                        </div>
                        <div className="product-item card text-center">
                            <Link to="/ProductDetails"><img src="images/product-5.png" /></Link>
                            <h4><Link to="/ProductDetails">iPhone Xs Max 2 Sim - 256GB</Link></h4>
                            <p>Giá Bán: <span>32.990.000đ</span></p>
                        </div>
                        <div className="product-item card text-center">
                            <Link to="/ProductDetails"><img src="images/product-6.png" /></Link>
                            <h4><Link to="/ProductDetails">iPhone Xs Max 2 Sim - 256GB</Link></h4>
                            <p>Giá Bán: <span>32.990.000đ</span></p>
                        </div>
                    </div>
                    <div className="product-list card-deck">
                        <div className="product-item card text-center">
                            <Link to="/ProductDetails"><img src="images/product-7.png" /></Link>
                            <h4><Link to="/ProductDetails">iPhone Xs Max 2 Sim - 256GB</Link></h4>
                            <p>Giá Bán: <span>32.990.000đ</span></p>
                        </div>
                        <div className="product-item card text-center">
                            <Link to="/ProductDetails"><img src="images/product-8.png" /></Link>
                            <h4><Link to="/ProductDetails">iPhone Xs Max 2 Sim - 256GB</Link></h4>
                            <p>Giá Bán: <span>32.990.000đ</span></p>
                        </div>
                        <div className="product-item card text-center">
                            <Link to="/ProductDetails"><img src="images/product-9.png" /></Link>
                            <h4><Link to="/ProductDetails">iPhone Xs Max 2 Sim - 256GB</Link></h4>
                            <p>Giá Bán: <span>32.990.000đ</span></p>
                        </div>
                    </div>
                </div>
                {/*	End List Product	*/}
                <div id="pagination">
                    <ul className="pagination">
                        <li className="page-item"><Link className="page-link" to="#">Trang trước</Link></li>
                        <li className="page-item active"><Link className="page-link" to="/#">1</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">Trang sau</Link></li>
                    </ul>
                </div>
            </div>

        </>
    )
}
export default Category;