const Footer = () => (
    <footer className="footer full-width">
        <div className="row display-content social-icons">
            <ul>
                <li><a href=""><img src="static/icone_google_reader.svg" alt="" /></a></li>
                <li><a href=""><img src="static/icone_twitter.svg" alt="" /></a></li>
                <li><a href=""><img src="static/icone_youtube.svg" alt="" /></a></li>
                <li><a href=""><img src="static/icone_facebook.svg" alt="" /></a></li>
            </ul>
        </div>

        <div className="row display-content">
            <a href="http://lme.ufc.br/" target="_blank">
            <div>
                <img className="logo" src="static/lme.png" alt="" />
            </div>
          </a>
          <a href="http://portal.virtual.ufc.br/" target="_blank">
            <div>
                <img className="logo" src="static/ufc-virtual.png" alt="" />
            </div>
          </a>
          <a href="http://www.ufc.br/" target="_blank">
            <div>
                <img className="logo" src="static/ufc.png" alt="" />
            </div>
          </a>
          <a href="https://www.funcap.ce.gov.br/programas-de-auxilio/programa-cientista-chefe/" target="_blank">
            <div>
                <img className="logo" src="static/cientista-chefe-azul.png" alt="" />
            </div>
          </a>
          <a href="https://www.ceara.gov.br/" target="_blank">
            <div>
                <img className="logo" src="static/governo.png" alt="" />
            </div>
          </a>
          <a href="https://www.fortaleza.ce.gov.br/" target="_blank">
            <div>
                <img className="logo" src="static/prefeitura.png" alt="" />
            </div>
          </a>
          <a href="https://www.funcap.ce.gov.br/" target="_blank">
            <div>
                <img className="logo funcap" src="static/funcap.png" alt="" />
            </div>
          </a>
        </div>

        <span className="copyright"><a href="https://luzdosaber.seduc.ce.gov.br/politica/index.php" target="_blank">Termos de uso e política de privacidade</a> | &#169; 2019 Luz do Saber. Todos os direitos reservados.</span>

        <style jsx>{`
            .footer {
                font-family: 'Itim', cursive;
                margin-top: 280px;
                text-align: center;
            }

            .display-content {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-bottom: 20px;
            }
            .display-content a {
                margin-left: 30px;
                margin-right: 30px;
            }
            div > img {
                max-width: 100%;
                height: auto;
            }

            ul li {
                display: inline-block;
                padding: 5px;
            }

            .social-icons {
                margin-top: 30px;
            }

            .copyright {
                font-size: 0.8em;
                text-transform: uppercase;
                display: inline-block;
                margin: 30px;
            }

            .logo {
                width: 160px;
                height: 50px;
                margin-bottom: 20px;
            }

            .funcap {
                width: 120px;
            }
        `}</style>
    </footer>
);

export default Footer;
