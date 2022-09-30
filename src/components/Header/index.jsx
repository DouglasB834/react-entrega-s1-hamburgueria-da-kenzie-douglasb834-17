import { HeaderStyled } from "./style";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { ProductContext } from "../../Context";
import { toast } from "react-toastify";

export const Header = () => {
  const { setProducts, search } = useContext(ProductContext);
  const Toast = () => {
    toast.error(`item nao encontrado`,{
      autoClose: 600,
    });
  };

  const hendleItens = (itens) => {
    const newproduct = itens.toLowerCase().trim();

    const produto = search.filter((element) => {
      const nome = element.name.toLowerCase();
      const category = element.category.toLowerCase();

      return nome.includes(newproduct) || category.includes(newproduct);
    });

    itens === undefined
      ? setProducts(search)
      : produto.length === 0
      ? Toast()
      : setProducts(produto);
  };

  return (
    <HeaderStyled>
      <div>
        <div>
          <img src={logo} alt="logo Burguer kenzie" />
        </div>
        <div className="search">
          <div>
            <input
              type="text"
              placeholder="Digite Pesquisa"
              onChange={(event) => hendleItens(event.target.value)}
            />
            <button type="submit" className="btnText">
              Pesquisa
            </button>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};
