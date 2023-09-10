import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import style from "./Pagination.module.css";

function Pagination({ dogs }) {
  const itemsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  // Definimos dos estados: currentPage para mantener el número de página actual
  // e items para mantener la lista de perros que se mostrarán en la página actual.

  // Este efecto se ejecutará cada vez que cambien las dependencias (dogs, currentPage, itemsPerPage).
  useEffect(() => {
    const lastItem = currentPage * itemsPerPage; // Calculamos el índice de fin para la página actual.
    const firstItem = lastItem - itemsPerPage; // Calculamos el índice de inicio para la página actual.
    const dogsToShow = dogs.slice(firstItem, lastItem); // Extraemos los perros que deben mostrarse en la página actual.
    setItems(dogsToShow); // Actualizamos el estado items con la lista de perros para la página actual.
  }, [dogs, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(dogs.length / itemsPerPage); // Calculamos el número total de páginas dividiendo la cantidad total de perros por itemsPerPage.

  const handlePageChange = (page) => {
    setCurrentPage(page); // Actualizamos el estado currentPage al número de página deseado.
  };
  

  return (
    <div>
      <div className={style.Container}>
        {items.map((dog) => (
          <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.image}
            weight={dog.weight}
            temperament={dog.temperament}
          />
        ))}
      </div>
      <div className={style.containerButtons}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={style.button}
        >
          🐾 PREVIOUS PAGE
        </button>
        <span className={style.spanPageNumber}>
          Pagina {currentPage} de {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={style.button}
        >
          NEXT PAGE 🐾
        </button>
      </div>
    </div>
  );
}

export default Pagination;
