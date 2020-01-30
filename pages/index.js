import Link from "next/link";
import BaseLayout from '../components/Base-Layout';
import Footer from "../components/Footer";

export default function Index() {
    return (
        <div>
            <BaseLayout>

                <section className="banner full-width">
                    <div className="container">
                        <div className="row banner-content">
                            <div className="col banner-left-content">
                                <img src="static/pessoas.png" alt="Desenho de crianças estudando" />
                            </div>

                            <div className="col banner-right-content">
                                <h2>Atividades, jogos e exercícios <br /> de alfabetização e letramento</h2>

                                <span className="section-text">Clique no botão abaixo para iniciar</span>

                                <Link href="http://app.eja.luzdosaber.virtual.ufc.br/" passHref>
                                    <a target="_blank">
                                        <div className="play-button">
                                            <div>
                                                <div className="outer-card rounded-circle shadow-sm">
                                                    <div className="inner-card">
                                                        <img src="static/btn_iniciar.svg" alt="" width="30px;" />
                                                    </div>
                                                </div>
                                                <div className="search-bar-itens shadow-lg play-card play-card-outer">
                                                    <button className="btn search-input form-input-font btn-font-orange play-card">Iniciar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="atividades">
                    <div className="section-head">
                        <h4 className="subtitle">O que você vai encontrar?</h4>
                        <span className="section-text">Veja o que oferecemos para auxiliar o seu aprendizado!</span>
                    </div>
                    <div className="row">
                        <div className="col atividades-content">
                            <img src="static/puzzle.png" alt="" />
                            <p>Jogos <br />Educativos</p>
                            <span className="section-text">Divirta-se e aprenda com jogos como quebra-cabeça, bingo e diversos outros disponíveis!</span>
                        </div>
                        <div className="col atividades-content">
                            <img src="static/book.png" alt="" />
                            <p>Atividades <br />Divertidas</p>
                            <span className="section-text">Resolva atividades desafiadoras, crie gibis e jornais e teste seus conhecimentos!</span>
                        </div>
                        <div className="col atividades-content">
                            <img src="static/atividades.png" alt="" />
                            <p>Atividades Personalizadas</p>
                            <span className="section-text">Jogue ou faça as atividades escritas e editadas pelo seu professor!</span>
                        </div>
                    </div>
                </section>

                <section className="news full-width">
                    <div className="container">
                        <div className="section-head">
                            <h4 className="subtitle white-header">Receba nossas novidades!</h4>
                            <span className="newsletter-call">Envie seu e-mail para ficar por dentro de tudo!</span>
                        </div>

                        <div className="row form">
                            <div className="search-bar-itens search-input-container shadow-sm">
                                <input className="search-input form-input-font" type="text" name="search" id="search" placeholder="ESCREVA SEU NOME" />
                            </div>
                            <div className="search-bar-itens search-input-container search-input-container-large shadow-sm">
                                <input className="search-input search-input-large form-input-font" type="text" name="search" id="search" placeholder="ESCREVA SEU E-MAIL" />
                            </div>
                            <div className="search-bar-itens btn-container shadow-sm">
                                <button className="btn btn-font-dark form-input-font">Enviar</button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

            </BaseLayout>

            <style jsx>{`
                .banner {
                    font-family: 'Itim', cursive;
                    background: 
                        url('static/banner-transparency.png'),
                        url('static/banner-blue.png');
                    background-position: 
                        left top,
                        center top;
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                .banner-content {
                    position: relative;
                    height: 588px;
                    align-items: center;
                }
                .banner-left-content {
                    position: absolute;
                    width: auto;
                    margin-top: 21px;
                }
                .banner-left-content > img {
                    width: 100%;
                    height: 100%;
                    max-width: 70%;
                }
                {/* .banner-right-content {
                    position: absolute;
                    width: auto;
                    right: 0;
                    top: 155px;
                    text-align: right;
                    color: #fff;
                    text-transform: uppercase;
                }
                .banner-right-content > h2 {
                    font-size: 1.7em;
                }
                .banner-right-content > .section-text {
                    font-size: 1.2em;
                    display: inline-block;
                    padding: 1.5em 0;
                }
                .play-button {
                    position: absolute;
                    top: 160px;
                    right: 243px;
                    cursor: pointer;
                } */}
                {/* .outer-card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    z-index: 2;
                    width: 100px;
                    height: 100px;
                    background: #fff;
                } */}
                .inner-card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 90px;
                    height: 90px;
                    border: 3px solid #CA8C40;
                    background: #ffb248;
                    border-radius: 50px;
                }
                .inner-card > a {
                    padding-left: 3px;
                }
                .play-card {
                    position: absolute;
                    left: 70px;
                    top: 17px;
                    width: 150px;
                    height: 60px;
                    border-radius: 20px;
                    font-size: 1.2em;
                    cursor: pointer;
                }
                .play-card-outer {
                    background: #fff;
                    width: 160px;
                    height: 70px;
                }
                .white-header {
                    color: #fff;
                }
                .newsletter-call {
                    font-size: 1.5em;
                    color: #ffeac1;
                }
                .news {
                    font-family: 'Itim', cursive;
                    background: url('static/bg-news.png');
                    height: 280px;
                }
                .search-input-container {
                    margin-left: 20px;
                }
                .search-input {
                    left: 6px;
                    top: 5px;
                }
                .btn-container {
                    width: 101px;
                }
            `}</style>
        </div>
    );
}