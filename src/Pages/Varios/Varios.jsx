import { Link } from "react-router-dom";
import { items } from "../../Helpers/Items.js";

const Varios = () => {
  // Filtra los elementos con la categoría "Varios"
  const variosItems = items.filter((item) => item.categoría === "Varios");

  return (
    <>
      <div
        style={{
          textAlign: "center"
        }}
      >
        <h2>Varios</h2>
        <img src="/Images/hoppis.png" alt="hoppis"
          height={200}
          width={200}
        />
      </div>
      {variosItems.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Link to={`/Categorias/${item.id}`}>{item.title}</Link>
          </div>
        );
      })}
    </>
  );
};


export default Varios