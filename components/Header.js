import Link from "next/link";

const Header = () => (
    <nav className="d-flex row main-nav">
        <div className="col-sm">
        <div className="row logo">
            <h1 className="hidden-title">LUZ DO SABER - PORTAL</h1>
            <img className="logo-rosto" src="static/logo_eja.png" alt="Logo Sol Luz do Saber" width="55%" />
        </div>
        </div>
        <div className="col-sm-8 nav-search">
            <div className="hamburguer-container">
                <input id="menu-hamburguer" type="checkbox" />

                <label htmlFor="menu-hamburguer">
                    <div className="menu-hamburguer">
                        <span className="hamburguer"></span>
                    </div>
                </label>
            </div>
            {/* <div className="row search-bar">
                <div className="search-bar-itens search-input-container shadow-sm">
                    <input className="search-input form-input-font" type="text" name="search" id="search" placeholder="O QUE VOCÊ PROCURA?" />
                </div>
                <form className="search-bar-itens btn-container shadow-sm" action="https://luz-do-saber-staging.herokuapp.com/#/" target="_blank">
                    <button className="btn search-input btn-font-light form-input-font">Entrar</button>
                </form>
                <div className="search-bar-itens btn-container shadow-sm">
                    <button className="btn search-input btn-font-dark form-input-font">Instalar</button>
                </div>
            </div> */}
            <div className="row menu-container">
                <ul className="col-sm menu">
                        <li className="inicio selected">
                            <Link href='/' passHref>
                                <a>Início</a>
                            </Link>
                        </li>
                        <Link href="/contact" passHref>
                            <li className="software disabled">software</li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="download disabled">Download</li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="tutorial disabled">Tutorial</li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="forum disabled">Fórum</li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="creditos disabled">Créditos</li>
                        </Link>
                        <li className="contato">
                            <Link href='/contact' passHref>
                                <a>Contato</a>
                            </Link>
                        </li>
                </ul>
            </div>
        </div>

        <style jsx>{`
            @media (min-width: 1200px) {
                .hamburguer-container {
                    display: none;
                }
                .main-nav {
                    justify-content: space-around;
                    text-transform: uppercase;
                }
                .hidden-title {
                    visibility: hidden;
                    position: absolute;
                }
                .nav-search {
                    font-family: 'Itim', cursive;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .search-bar {
                    position: absolute;
                    right: 70px;
                    top: 30px;
                }

                .menu {
                    position: absolute;
                    bottom: -17px;
                }

                .menu li {
                    display: inline-block;
                    padding: 10px;
                    width: 100px;
                    font-size: 0.8em;
                    text-align: center;
                    border: 1px solid #F0F0F0;
                    margin-left: 1px;
                }

                .menu li:hover { cursor: pointer; }

                .menu li a { color:#333; text-decoration:none; display:block; }

                .menu .inicio { border: 1px solid transparent; border-top: 4px solid rgba(24, 65, 109, 0.15); }
                .menu .inicio:hover { background: #FFB151; color: #fff; }
                .menu .software { border: 1px solid transparent; border-top: 4px solid rgba(24, 65, 109, 0.15); }
                .menu .software:hover { background: #FFB151; color: #fff; }
                .menu .download { border: 1px solid transparent; border-top: 4px solid rgba(24, 65, 109, 0.15); }
                .menu .download:hover { background: #FFB151; color: #fff; }
                .menu .tutorial { border: 1px solid transparent; border-top: 4px solid rgba(24, 65, 109, 0.15); }
                .menu .tutorial:hover { background: #FFB151; color: #fff; }
                .menu .forum { border: 1px solid transparent; border-top: 4px solid rgba(24, 65, 109, 0.15); }
                .menu .forum:hover { background: #FFB151; color: #fff; }
                .menu .creditos { border: 1px solid transparent; border-top: 4px solid rgba(24, 65, 109, 0.15); }
                .menu .creditos:hover { background: #FFB151; color: #fff; }
                .menu .contato { border: 1px solid transparent; border-top: 4px solid rgba(24, 65, 109, 0.15); }
                .menu .contato:hover { background: #FFB151; color: #fff; }

                .selected {
                    background: #FFB151;
                }

                .disabled {
                    background: #d3d3d3; color: #fff;
                    border-top: 3px solid #d3d3d3;
                }

                .logo-rosto {
                    padding: 20px 0;
                }
                button, input {
                    top: 6px;
                    left: 7px;
                }
            }

            @media (min-width: 320px) and (max-width: 1199px) {
                /*
                *
                *   MENU HAMBURGUER
                *
                */
                {/* .hamburguer-container {
                    position: fixed;
                    width: 46px;
                    height: 46px;
                    right: 10px;
                    top: 40px;
                } */}
                .hamburguer-container > input {
                    display: none;
                }
                .menu-hamburguer {
                    position: fixed;
                    top: 40px;
                    background: #fff;
                    border-radius: 50%;
                    width: 60px;
                    height: 60px;
                    right: 0;
                }
                .hamburguer {
                    position: absolute;
                    display: block;
                    width: 30px;
                    height: 2px;
                    top: 28px;
                    right: 15px;
                    background: #000;

                    transition: .5s ease-in-out;
                }
                .hamburguer:before,
                .hamburguer:after {
                    background: #000;
                    content: '';
                    display: block;
                    width: 30px;
                    height: 2px;
                    position: absolute;

                    transition: .5s ease-in-out;
                }
                .hamburguer:before {
                    top: -10px;
                }

                .hamburguer:after {
                    bottom: -10px;
                }

                input:checked ~ label .hamburguer {
                    transform: rotate(45deg);
                }

                input:checked ~ label .hamburguer:before {
                    transform: rotate(90deg);
                    top: 0;
                }

                input:checked ~ label .hamburguer:after {
                    transform: rotate(90deg);
                    bottom: 0;
                }
                /*
                *
                *   MENU HAMBURGUER
                *
                */

                .main-nav {
                    justify-content: space-around;
                    text-transform: uppercase;
                }
                .hidden-title {
                    visibility: hidden;
                    position: absolute;
                }
                .nav-search {
                    font-family: 'Itim', cursive;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    z-index: 10;
                }
                .search-bar {
                    position: absolute;
                    right: 70px;
                    top: 30px;
                }
                .search-bar-itens:first-child { /* BARRA DE PESQUISA */
                    display: none;
                }
                .menu-container {
                    display: none;
                    position: fixed;
                    background: #000;
                    top: 0px;
                    right: -10vw;
                    width: 100vw;
                    height: 50vh;
                }
                .menu {
                    position: absolute;
                }
                .menu li {
                    display: block;
                    padding: 10px;
                    width: 100px;
                    background: #fff;
                    font-size: 0.8em;
                    text-align: center;
                    border: 1px solid #F0F0F0;
                    margin-left: 1px;
                }

                .menu li:hover { cursor: pointer; }

                .menu li a { color:#333; text-decoration:none; display:block; }

                .menu .inicio { border: 1px solid transparent; border-top: 3px solid #FFB151; }
                .menu .inicio:hover { background: #FFB151; color: #fff; }
                .menu .software { border: 1px solid transparent; border-top: 3px solid #F766AE; }
                .menu .software:hover { background: #F766AE; color: #fff; }
                .menu .download { border: 1px solid transparent; border-top: 3px solid #AE67E0; }
                .menu .download:hover { background: #AE67E0; color: #fff; }
                .menu .tutorial { border: 1px solid transparent; border-top: 3px solid #757BFA; }
                .menu .tutorial:hover { background: #757BFA; color: #fff; }
                .menu .forum { border: 1px solid transparent; border-top: 3px solid #75C0FF; }
                .menu .forum:hover { background: #75C0FF; color: #fff; }
                .menu .creditos { border: 1px solid transparent; border-top: 3px solid #50C0AA; }
                .menu .creditos:hover { background: #50C0AA; color: #fff; }
                .menu .contato { border: 1px solid transparent; border-top: 3px solid #50946D; }
                .menu .contato:hover { background: #50946D; color: #fff; }

                .selected {
                    background: #FFB151;
                }

                .logo-rosto {
                    padding: 20px 0;
                }
                button, input {
                    top: 6px;
                    left: 7px;
                }
            }
        `}</style>
    </nav>
);

export default Header;