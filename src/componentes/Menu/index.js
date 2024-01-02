import styles from "./Menu.module.css"
import MenuLink from "../MenuLink";
export default function Menu(){

    return (
        <header>
            <nav className={styles.navegacao}>
               <MenuLink to='/inicio'>
                Início
                </MenuLink>

                <MenuLink to='/cardapio'>
                    Cardápio
                </MenuLink>
            </nav>
        </header>
    )
}