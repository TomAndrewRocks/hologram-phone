import { NewsCard } from "@/components/Card/NewsCard";
import { Footer } from "@/components/Footer/Footer";
import { Layout } from "@/components/Layout/Layout";
import { Title } from "@/components/Title/Title";
import { Hero } from "@/components/Hero/Hero";
import Separator from "@/components/Separator/Separator";
import styled from "styled-components";
import { devices } from "@/styles/foundation";
import { TextMediaBlock } from "@/components/Block/TextMediaBlock";

const news = [
  {
    title:
      "Os metais valiosos contidos em seu smartphone - e por que ele pode se tornar um problema ambiental",
    image:
      "https://c.files.bbci.co.uk/108B3/production/_92636776_813d602d-1732-4812-b425-e96de297b310.jpg",
    link: "https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fportuguese%2Fvert-fut-38092622&psig=AOvVaw3gVMAWdhdfW1nGszQjVNcq&ust=1700603099390000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMim-a7G04IDFQAAAAAdAAAAABAJ",
  },
  {
    title:
      "Vídeos mostram arrastões, agressões, roubos e furtos de celulares durante Virada Cultural em SP",
    image:
      "https://s03.video.glbimg.com/640x360/10619226.jpg",
    link: "https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fg1.globo.com%2Fsp%2Fsao-paulo%2Fnoticia%2F2022%2F05%2F29%2Fvideos-mostram-grupos-de-jovens-fazendo-arrastoes-agredindo-roubando-e-furtando-celulares-de-frequentadores-da-virada-cultural.ghtml&psig=AOvVaw05yR5CpCx7PDcUuHezWv3g&ust=1700603292523000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIi174rH04IDFQAAAAAdAAAAABAE",
  },
  {
    title: "Como a nanotecnologia irá transformar o mundo como o conhecemos",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*xnfp85H2bjaeK73syTXWEA.jpeg",
    link: "https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fmedium.com%2Ffuturo-exponencial%2Fcomo-a-nanotecnologia-ir%25C3%25A1-transformar-o-mundo-como-o-conhecemos-fcc770b48eb8&psig=AOvVaw2cm5AyqTQsgdJ3UK-SMxRJ&ust=1700603205163000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiQwOHG04IDFQAAAAAdAAAAABAE",
  },
];

export const App = () => {
  return (
    <Layout>
      <Title />
      <Hero />
      <Separator />
      <TextMediaBlock
        text="No passado, era quase impossível imaginarmos que poderíamos alcançar objetivos e 
        romper barreiras de uma forma tão simples na palma da mão a um clique de distância. No início do 
        século XXl, os celulares passaram a se integrar com a internet e tudo ficou cada vez mais rápido e 
        prático. Hoje é totalmente inimaginável vivermos sem um dispositivo móvel para nos auxiliarmos nas 
        tarefas diárias como locomoção, alimentação, trabalho, educação e vários outras necessidades 
        primordiais da rotina."
        image={
          "https://lottie.host/8d609e3d-fac0-4529-9793-21d329c85f87/OxJ6IZTcl1.json"
        }
      />
      <Separator />
      <NewsContainer>
        {news.map((obj, index) => (
          <NewsCard
            key={index}
            image={obj.image}
            title={obj.title}
            link={obj.link}
          />
        ))}
      </NewsContainer>
      <Separator />
      <TextMediaBlock
        shouldReverse={true}
        text="O projeto propõe um ~smartphone holográfico~ acoplado ao corpo do usuário, ativado por gestos de mãos, simulando as funções de um celular real sem necessidade de materiais tradicionais como plástico, ferro, vidro, etc. Funcionaria sem recarga, alimentado por energia solar, eliminando consumo de energia para operar."
        image={
          "https://lottie.host/a3d4e9a6-90a5-4eba-87f1-ca9e24222a12/2XwxCUf5TO.json"
        }
      />
      <Footer />
    </Layout>
  );
};

const NewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${devices.lg} {
    flex-direction: column;
    align-items: center;
  }
`;
