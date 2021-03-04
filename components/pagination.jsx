import { Fragment, useEffect, useState } from "react";


function Pagination({initialPage, handleChange, pagesCount}){

    
    const [page, setPage] = useState(initialPage);
    
     
    function getButtons(page) {
        const diff = 2;

        console.log(page);
        let shift = -1 * (page - 1 - diff < 0 ? page - diff - 1 : page + diff - pagesCount > 0 ? page + diff - pagesCount : 0);

        // let leftShift = Math.abs(Math.min(page - 1 - diff, 0));
        // let rightShift = Math.max(page + diff - pagesCount, 0);

        let min = page - diff + shift;
        let max = page + diff + shift;

        console.log(`shift ${shift}, min : ${min}, maxx: ${max}`);

        let btns = [];

        for(let i = min; i <= max; i++) {
            btns.push({
                number: i,
                active: i === page
            });
        }

        console.log(btns);
        return btns;
    }


    function prevPage() {
        
        handleChange(page - 1);
        setPage(page - 1)
    }
    
    function nextPage() {
        handleChange(page + 1);
        setPage(page + 1);
    }

    let btns = getButtons(page);

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className={"page-item " + (page == 1 && "disabled")}>
                    <button className="page-link" onClick={() => prevPage()}>
                        Previous
                    </button>
                </li>
                {/* <li className="page-item">
                    <a className="page-link" href="">
                        1
                    </a>
                </li>
                <li
                    className="page-item active  bg-secondary"
                    aria-current="page"
                >
                    <a className="page-link" href="">
                        2 <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="">
                        3
                    </a>
                </li> */}
                {btns &&
                    btns.map((x) => (
                        <>
                            <li
                                className={
                                    "page-item " +
                                    (x.active == true ? "active" : "")
                                }
                            >
                                <button className={"page-link"}>
                                    {x.number}
                                </button>
                            </li>
                        </>
                    ))}
                <li
                    className={
                        "page-item " + (page == pagesCount && "disabled")
                    }
                >
                    <button className="page-link" onClick={() => nextPage()}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;