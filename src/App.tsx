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
      "O ”Boom” das plataformas de Delivery no Brasil e suas consequências peculiares",
    image:
      "https://static.wixstatic.com/media/0b3988_3a87d77344804aefb0ce2023a26f34f4~mv2.jpg/v1/fill/w_693,h_363,al_c,q_80,enc_auto/0b3988_3a87d77344804aefb0ce2023a26f34f4~mv2.jpg",
    link: "https://portal.fgv.br/artigos/boom-plataformas-delivery-brasil-e-suas-consequencias-peculiares",
  },
  {
    title:
      "Entregador de delivery é atropelado por Hilux em alta velocidade e morre",
    image:
      "https://amazonasatual.com.br/wp-content/uploads/2023/01/Hilux-acidente.jpg",
    link: "https://amazonasatual.com.br/entregador-de-delivery-e-atropelado-por-hilux-em-alta-velocidade-e-morre/",
  },
  {
    title: "Tendências da Logística para o Futuro",
    image:
      "https://www.truckpad.com.br/wp-content/uploads/2022/12/full-shot-man-walking-by-trucks-fleet-min-2048x1365.jpg",
    link: "https://www.truckpad.com.br/blog/tendencias-da-logistica-para-o-futuro/#:~:text=A%20integra%C3%A7%C3%A3o%20de%20sistemas%2C%20a,da%20log%C3%ADstica%20para%20o%20futuro.",
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
