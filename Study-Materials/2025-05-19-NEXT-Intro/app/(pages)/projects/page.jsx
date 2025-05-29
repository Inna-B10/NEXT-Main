import { PageHeaderText } from "@/base/text/PageHeaderText";
import { FancySection } from "./components/FancySection";

export default function AboutPage() {
  return (
    <>
      <section>
        <PageHeaderText>This is the about page...SPARTA!</PageHeaderText>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis velit
          veritatis, iusto voluptas nulla asperiores eligendi alias vitae
          possimus! Quod facilis ducimus accusamus dolore cumque, iste possimus
          sapiente recusandae laboriosam.
        </p>
      </section>
      <FancySection />
    </>
  );
}
