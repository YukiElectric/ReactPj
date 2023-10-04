import { useLocation, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Pagination = ({ pages }) => {
    
    const { limit, total, currentPage, next, prev, hasNext, hasPrev } = pages;

    const [searchParams, setSearchParams] = useSearchParams();

    const { pathname, search } = useLocation();

    const totalPages = Math.ceil(total / limit);


    const formatUrl = (page) => {
        if(searchParams.get('keyword')) return `${pathname}?keyword=${searchParams.get('keyword')}&page=${page}`;
        return`${pathname}?page=${page}`
    }

    const renderPagesHtml = (delta = 2) => {
        let pagesHtml = [];
        const left = currentPage - delta;
        const right = currentPage + delta;
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                i === currentPage ||
                (i >= left && i <= right)
            ) pagesHtml.push(i);
            else if (
                i === left - 1 ||
                i === right + 1
            ) pagesHtml.push("...");
        }
        return pagesHtml;
    }

    return (
        <ul className="pagination">
            {
                hasPrev && <li className="page-item"><Link className="page-link" to={formatUrl(prev)}>Trang trước</Link></li>
            }
            {
                renderPagesHtml().map((value) => 
                    <li className={`page-item + ${currentPage===value && "active"}`} >
                        {
                            value==="..." 
                            ? <span className="page-link">{value}</span>
                            : <Link className="page-link" to={formatUrl(value)}>{value}</Link>
                        }
                    </li>
                )
            }
            {
                hasNext && <li className="page-item"><Link className="page-link" to={formatUrl(next)}>Trang sau</Link></li>
            }
        </ul>
    )
}

export default Pagination;