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
            <div>
                <img src="static/lme.png" alt="" />
            </div>
            <div>
                <img src="static/ufc-virtual.png" alt="" />
            </div>
            <div>
                <img src="static/ufc.png" alt="" />
            </div>
            <div>
                <img src="static/governo.png" alt="" />
            </div>
            <div>
                <img src="static/funcap.png" alt="" />
            </div>
            <div>
                <img src="static/prefeitura.png" alt="" />
            </div>
        </div>

        <span className="copyright"><a href="">Termos de uso e política de privacidade</a> | &#169; 2019 Luz do Saber. Todos os direitos reservados.</span>

        <style jsx>{`
            .footer {
                font-family: 'Itim', cursive;
                margin-top: 280px;
                text-align: center;
            }

            .display-content {
                display: flex;
                justify-content: center;
                padding-bottom: 20px;
            }
            .display-content > div {
                margin: 15px 30px;
                width: 120px;
                height: auto;
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
        `}</style>
    </footer>
);

export default Footer;