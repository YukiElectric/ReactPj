import React from "react";
import { order } from "../../services/Api";
import { useDispatch, useSelector } from "react-redux";
import { getImageProduct } from "../../shared/ultils";
import { DELETE_CART, UPDATE_CART } from "../../shared/constants/action-type";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    // const data = localStorage.getItem("cart_items");

    const navigate = useNavigate();

    const items = useSelector(({ Cart }) => {
        return Cart.items;
    })

    const dispath = useDispatch();

    const onChangeValue = (e, id) => {
        const value = parseInt(e.target.value);
        if (value <= 0) onDeleteItem(e, id);
        else {
            dispath({
                type: UPDATE_CART,
                payload: {
                    _id: id,
                    qty: value
                }
            });
        }
    }

    const onDeleteItem = (e, id) => {
        e.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        let isConfirm = confirm("Bạn muốn xóa sản phẩm khỏi giỏ hàng?");
        if (isConfirm) {
            dispath({
                type: DELETE_CART,
                payload: {
                    _id: id,
                }
            })
        } else {
            dispath({
                type: UPDATE_CART,
                payload: {
                    qty: 1,
                    _id: id
                }
            })
        }
    }

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInputInfor({ ...inputInfor, [name]: value });
    }

    const [inputInfor, setInputInfor] = React.useState({});


    const onClickOrder = (e) => {
        e.preventDefault();
        const carts = items.map((item) => ({
            prd_id: item._id,
            qty: item.qty
        }))
        order({
            items: carts,
            ...inputInfor,
        }, {}).then(({ data }) => {
            if (data.status == "success") {
                navigate('/Success');
                items.forEach((item) => {
                    console.log(item._id);
                    dispath({
                        type: DELETE_CART,
                        payload : {
                            _id : item._id
                        }
                    })
                }
            )
            }
        })
    }

    return (
        <>
            <div>
                {/*	Cart	*/}
                <div id="my-cart">
                    <div className="row">
                        <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">Thông tin sản phẩm</div>
                        <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">Tùy chọn</div>
                        <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
                    </div>
                    <form>
                        {
                            items.map((item) =>
                                <div className="cart-item row">
                                    <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                                        <img src={getImageProduct(item.image)} />
                                        <h4>{item.name}</h4>
                                    </div>
                                    <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
                                        <input type="number" id="quantity" className="form-control form-blue quantity" onChange={(e) => onChangeValue(e, item._id)} value={item.qty} />
                                    </div>
                                    <div className="cart-price col-lg-3 col-md-3 col-sm-12"><b>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price * item.qty)}</b><a onClick={(e) => onDeleteItem(e, item._id)} href="#">Xóa</a></div>
                                </div>
                            )
                        }
                        <div className="row">
                            <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                                <button id="update-cart" onClick={() => localStorage.removeItem("cart_items")} className="btn btn-success" type="submit" name="sbm">Cập nhật giỏ hàng</button>
                            </div>
                            <div className="cart-total col-lg-2 col-md-2 col-sm-12"><b>Tổng cộng:</b></div>
                            <div className="cart-price col-lg-3 col-md-3 col-sm-12"><b>{
                                new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                    items.reduce((total, item) => total + item.qty * item.price, 0)
                                )
                            }</b></div>
                        </div>
                    </form>
                </div>
                {/*	End Cart	*/}
                {/*	Customer Info	*/}
                <div id="customer">
                    <form method="post">
                        <div className="row">
                            <div id="customer-name" className="col-lg-4 col-md-4 col-sm-12">
                                <input onChange={(e) => onChangeInput(e)} placeholder="Họ và tên (bắt buộc)" type="text" name="name" className="form-control" required value={inputInfor.name || ""} />
                            </div>
                            <div id="customer-phone" className="col-lg-4 col-md-4 col-sm-12">
                                <input onChange={(e) => onChangeInput(e)} placeholder="Số điện thoại (bắt buộc)" type="tel" name="phone" className="form-control" required value={inputInfor.phone || ""} />
                            </div>
                            <div id="customer-mail" className="col-lg-4 col-md-4 col-sm-12">
                                <input onChange={(e) => onChangeInput(e)} placeholder="Email (bắt buộc)" type="email" name="email" className="form-control" required value={inputInfor.email || ""} />
                            </div>
                            <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
                                <input onChange={(e) => onChangeInput(e)} placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)" type="text" name="address" className="form-control" required value={inputInfor.address || ""} />
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <div className="by-now col-lg-6 col-md-6 col-sm-12">
                            <a onClick={(e) => onClickOrder(e)} href="#">
                                <b>Mua ngay</b>
                                <span>Giao hàng tận nơi siêu tốc</span>
                            </a>
                        </div>
                        <div className="by-now col-lg-6 col-md-6 col-sm-12">
                            <a href="#">
                                <b>Trả góp Online</b>
                                <span>Vui lòng call (+84) 0988 550 553</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/*	End Customer Info	*/}
            </div>

        </>
    )
}
export default Cart;