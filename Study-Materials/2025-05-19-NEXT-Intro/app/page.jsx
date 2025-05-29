import { PageHeaderText } from "./components/base/text/PageHeaderText";
import { Counter } from "./components/Counter";

export default function Home() {
  return (
    <>
      <section>
        <PageHeaderText>This is Sparta!</PageHeaderText>
        <p>This is the home page</p>
      </section>
      <Counter />
    </>
  );
}
