import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/features/Pages/pageSlice";

const HomePage = () => {
  const count = useSelector((state: any) => state.page.count);
  const disptach = useDispatch();

  return (
    <section>
      <h1>This is the Home Page {count}</h1>
      <button type="button" onClick={() => disptach(increment())}>
        +
      </button>
      <button type="button" onClick={() => disptach(decrement())}>
        -
      </button>
    </section>
  );
};

export default HomePage;
