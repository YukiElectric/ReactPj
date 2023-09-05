import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            {/*	Feature Product	*/}
            <div className="products">
                <h3>Sản phẩm nổi bật</h3>
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
            </div>
            {/*	End Feature Product	*/}
            {/*	Latest Product	*/}
            <div className="products">
                <h3>Sản phẩm mới</h3>
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
                <div className="product-list card-deck">
                    <div className="product-item card text-center">
                        <Link to="/ProductDetails"><img src="images/product-10.png" /></Link>
                        <h4><Link to="/ProductDetails">iPhone Xs Max 2 Sim - 256GB</Link></h4>
                        <p>Giá Bán: <span>32.990.000đ</span></p>
                    </div>
                    <div className="product-item card text-center">
                        <Link to="/ProductDetails"><img src="images/product-11.png" /></Link>
                        <h4><Link to="/ProductDetails">iPhone Xs Max 2 Sim - 256GB</Link></h4>
                        <p>Giá Bán: <span>32.990.000đ</span></p>
                    </div>
                    <div className="product-item card text-center">
                        <Link to="/ProductDetails"><img src="images/product-12.png" /></Link>
                        <h4><Link to="/ProductDetails">iPhone Xs Max 2 Sim - 256GB</Link></h4>
                        <p>Giá Bán: <span>32.990.000đ</span></p>
                    </div>
                </div>
            </div>
            {/*	End Latest Product	*/}
        </>
    )
}
export default Home;