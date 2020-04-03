import Header from "../components/Header";
import BaseLayout from "../components/Base-Layout";
import Footer from '../components/Footer';

export default function Projeto(){
    return (
        <div id="projeto">
            <BaseLayout>
                <Header selected="projeto" />
                <div className="__content">
                    <p>
                        Atualmente, o Luz do Saber é um projeto do Programa Cientista-Chefe em Educação Básica do Estado do Ceará, gerido e financiado pela FUNCAP, 
                        que tem por objetivo colaborar com a aprendizagem e o desenvolvimento das crianças dos anos iniciais do Ensino Fundamental nos processos de oralidade, 
                        leitura e escrita a partir do contato com os diversos gêneros orais, escritos e digitais.            
                    </p>
                    
                    <p>
                        Para tanto, disponibiliza um portal educacional gratuito com atividades online, jogos e aplicações voltadas para o desenvolvimento da escrita. 
                        Além disso, disponibiliza para download livros didáticos para o 1º e 2º anos do Ensino Fundamental e materiais para orientações didáticas aos professores. 
                        Também é disponibilizado uma grande biblioteca de livros da coleção PAIC - Prosa e Poesia.
                    </p>

                    <p>
                        As atividades propostas, tanto no material didático quanto no software, estimulam uma aprendizagem significativa e desafiadora. 
                        Estão organizadas em uma sequência didática que considera o processo de alfabetização na perspectiva do letramento e promove a interação a partir de situações reais de aprendizagem e do uso social da língua em congruência com a BNCC.
                    </p>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </BaseLayout>
            <style jsx>{
                `
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