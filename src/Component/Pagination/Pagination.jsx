import React, { useState } from 'react';
import "../../Assets/css/style.css";
import mockinho from '../../db/mockinho.json';

const Pagination = () => {
    const [itemList,] = useState(mockinho);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage,] = useState(4);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    }

    // Mostrar quantidade de Items por page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = itemList.slice(indexOfFirstItem, indexOfLastItem);

    // Mostrar numeros de páginas
    const qtdPages = Math.ceil(itemList.length / itemsPerPage)
    const pageNumbers = [...Array(qtdPages + 1).keys()].slice(1)

    return (
        <div>
            <ul>
            <li > <b>Total itens</b> - {itemList.length}</li>
                {currentItems.map((item, index) => {
                    index++
                    return <li key={index}> <b>{item.id}</b> - {item.name}</li>;
                })}
            </ul>
            <ul id="page-numbers">
                {pageNumbers.map(number => {
                    return (
                        <li
                            key={number}
                            id={number}
                            onClick={handleClick}
                        >
                            {number}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Pagination;