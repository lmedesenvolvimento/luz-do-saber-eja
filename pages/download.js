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
                <div className="__content">
                    <h1 className="heading">Downloads</h1>
                    <LinkList items={links} />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </BaseLayout>
            <style jsx>{
                `
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