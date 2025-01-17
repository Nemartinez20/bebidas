import { useMemo } from "react";
import { useLocation, NavLink } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  console.log(isHome);
  return (
    <header
      className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex  justify-between items-center">
          <div>
            <img src="/logo.svg" alt="logotipo" className="w-32" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form
            action=""
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-4 rounded-lg space-y-6 my-32 p-10"
          >
            <div className="space-y-4 ">
              <label
                htmlFor="ingredient"
                className="block uppercase text-white font-extrabold"
              >
                Nombre o Ingredientes
              </label>
              <input
                type="text"
                id="ingredient"
                name="ingredient"
                className="p-3 w-full rounded-lg"
                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Cafe"
              />
            </div>
            <div className="space-y-4 ">
              <label
                htmlFor="category"
                className="block uppercase text-white font-extrabold"
              >
                Categoria
              </label>
              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg"
              >
                <option value="">--Seleccione--</option>
              </select>
            </div>

            <input
              type="submit"
              value="Buscar Recertas"
              className="cursor-pointer rounded-lg uppercase  text-white bg-orange-900 font-extrabold w-full p-2"
            />
          </form>
        )}
      </div>
    </header>
  );
}
