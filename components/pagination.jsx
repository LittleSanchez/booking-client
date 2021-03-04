import { Fragment, useState } from "react";


function Pagination({initialPage, handleChange, pagesCount}){

    const [page, setPage] = useState(initialPage);

    function prevPage() {
        page = page - 1;
        setPage(page);
        handleChange(page);
    }

    function nextPage() {
        page = page + 1;
        setPage(page);
        handleChange(page);
    }

    return (
        <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active  bg-secondary" aria-current="page">
      <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
    )
}

export default Pagination;