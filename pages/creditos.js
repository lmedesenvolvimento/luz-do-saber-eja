import Header from "../components/Header";
import BaseLayout from "../components/Base-Layout";
import Footer from '../components/Footer';

export default function Creditos(){
    return (
        <div id="creditos">
            <BaseLayout>
                <Header selected="creditos" />
                <section className="banner full-width">
                    <div className="pagination">
                      <span className="pagination-item">principal</span> <span className="pagination-item">/</span> <span className="pagination-item">créditos</span>
                    </div>
                    <div className="container">
                      <br/>
                      <br/>
                      <p>
                        <h3>Coordenador do Projeto e Cientista-Chefe Funcap</h3>
                        Jorge Herbert Soares de Lira
                        <h3>Coordenador Técnico</h3>
                        Henrique Sérgio Lima Pequeno
                        <h3>Coordenador Acadêmico</h3>
                        George Allan Menezes Gomes
                        <h3>Gerente de Projeto</h3>
                        Francisco Gilson Gomes Júnior
                        <h3>Coordenador Pedagógico</h3>
                        Marcos Dionísio Ribeiro do Nascimento
                        <h3>Diretor de Arte</h3>
                        Antônio José Melo Leite Júnior
                        <h3>Equipe Pedagógica</h3>
                        Eliziana do Nascimento Mendonça<br/>
                        Ellen Damares Felipe de Queiroz
                        <h3>Ilustradores e Designers</h3>
                        Franscisca Nádia Moura Lopes<br/>
                        Márcio Moreira dos Santos Filho<br/>
                        Natália Prata Moraes<br/>
                        Yarick Ivens da Silva Santos
                        <h3>Desenvolvedores</h3>
                        Antônio Nathan Serra Souza<br/>
                        Damis Iuri Garcia do Vale<br/>
                        Lucas Monteiro Ribeiro<br/>
                        Luís Eduardo Regis de Oliveira<br/>
                        Marcos Rodrigo da Silva Lira<br/>
                        Mário Silva Ribeiro<br/>
                        Desenvolvedores Back-end<br/>
                        Bianca Stephani Barone Martins<br/>
                        Wedson Lima de Sousa
                        <h3>Orgão Fomentador</h3>
                        Fundação Cearense de Apoio ao Desenvolvimento Científico e Tecnológico (Funcap)
                      </p>
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
                        margin-bottom: 50px;
                    }
                    .pagination-item {
                        margin-right: 10px;
                    }
                    #projeto .__content{
                        margin: 64px 48px 24px;
                    }
                    #projeto .__content p {
                        font-size: 21px;
                        margin: 48px 0px;
                    }
                `
            }</style>
        </div>
    )
}
