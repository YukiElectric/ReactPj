import React from "react";
import ProductItem from "../../shared/components/product-items";
import { getCategory, getProdctCategory } from "../../services/Api";
import { useParams, useSearchParams } from "react-router-dom";
import Pagination from "../../shared/components/Pagination";

const Category = () => {
    const [product, setProduct] = React.useState([]);

    const [pages, setPages] = React.useState({
        limit: 12,
    });

    const [searchParams, setSearchParams] = useSearchParams();

    const page = searchParams.get("page") || 1;
    
    const [productItem, setProductItem] = React.useState("");

    const params = useParams();

    const id = params.id;

    React.useEffect(() => {
        getProdctCategory(id, {
            params: {
                limit: 12,
                page : page
            }
        }).then(({ data }) => {
            setProduct(data.data.docs);
            setPages({ ...pages, ...data.data.pages });
        });
        getCategory(id, {}).then(({ data }) => setProductItem(data.data));
    }, [id, page])

    return (
        <>
            <div>
                {/*	List Product	*/}
                <div className="products">
                    <h3>{`${productItem.name} (hiện có ${product.length} sản phẩm)`}</h3>
                    <div className="product-list card-deck">
                        {
                            product.map((item) =>
                                <ProductItem item={item} />
                            )
                        }
                    </div>
                </div>
                {/*	End List Product	*/}
                <div id="pagination">
                    <Pagination pages={pages}/>
                </div>
            </div>

        </>
    )
}
export default Category;