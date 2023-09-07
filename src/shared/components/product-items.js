import { Link } from "react-router-dom";
import { getImageProduct } from "../ultils";

const ProductItem = ({item}) =>
    <div className="product-item card text-center">
        <Link to="/ProductDetails"><img src={getImageProduct(item.image)} /></Link>
        <h4><Link to="/ProductDetails">{item.name}</Link></h4>
        <p>Giá Bán: <span>{item.price}đ</span></p>
    </div>

export default ProductItem;