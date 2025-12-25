import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementBy,
  selectCount,
} from "@/features/Pages/pageSlice";

const HomePage = () => {
  const disptach = useDispatch();
  const count = useSelector(selectCount);
  console.log(count);

  return (
    <section>
      <h1>This is the Home Page {count}</h1>
      <button type="button" onClick={() => disptach(increment())}>
        +
      </button>
      <button type="button" onClick={() => disptach(decrement())}>
        -
      </button>
      <button type="button" onClick={() => disptach(reset())}>
        Reset
      </button>
      <button type="button" onClick={() => disptach(incrementBy(5))}>
        + 5
      </button>
    </section>
  );
};

export default HomePage;
