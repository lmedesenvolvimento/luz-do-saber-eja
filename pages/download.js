import Header from "../components/Header";
import BaseLayout from "../components/Base-Layout";
import Footer from '../components/Footer';

export default function Projeto(){
    const links = [
        {
            title: 'Luz do Saber - 1º Ano - Caderno de Orientações Didáticas',
            src: 'static/downloads/Luz do Saber - 1º Ano - Caderno de Orientações Didáticas.pdf',
        },
        {
            title: 'Luz do Saber - 1º ano',
            src: 'static/downloads/Luz do Saber - 1º ano.pdf',
        },
        {
            title: 'Luz do Saber - 2º Ano - Caderno de Orientações Didáticas',
            src: 'static/downloads/Luz do Saber - 2º Ano - Caderno de Orientações Didáticas.pdf',
        },
        {
            title: 'Luz do Saber - 2º ano',
            src: 'static/downloads/Luz do Saber - 2º ano.pdf',
        },
    ]
    return (
        <div id="download">
            <BaseLayout>
                <Header selected="download" />
                <section className="banner full-width">
                    <div className="pagination">
                        <span className="pagination-item">principal</span> <span className="pagination-item">/</span> <span className="pagination-item">download</span>
                    </div>

                    <div className="__content">
                        <h1 className="heading">Downloads</h1>
                        <LinkList items={links} />
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                </section>
            </BaseLayout>
            <style jsx>{
                `
                    .pagination {
                        display: flex;
                        align-items: center;
                        position: absolute;
                        background: #FFB151;
                        border-radius: 0;
                        width: 100%;
                        height: 50px;
                        padding: 0 90px;
                        color: #fff;
                        font-size: 0.8em;
                        text-transform: uppercase;
                    }
                    .pagination-item {
                        margin-right: 10px;
                    }
                    #download .__content{
                        margin: 64px 48px 24px;
                    }
                    #download .__content p {
                        font-size: 21px;
                        margin: 48px 0px;
                    }
                    .heading {
                        padding: 16px 0px;
                        margin-bottom: 24px;
                        border-bottom: 1px solid grey;
                    }
                `
            }</style>
        </div>
    )
}

function LinkList ({ items }) {
    return (
        <ul>
            {items.map(({ title, src }) => {
                return (
                    <li>
                        <a href={src} target="_blank" download title={title}>
                            {title}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
