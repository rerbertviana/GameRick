import { createRoot } from "react-dom/client";
import SelectionScreen from './pages/selection-screen/components/selection-screen';

const container = document.getElementById("root");
const root = createRoot(container!); 

// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <SelectionScreen />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

root.render(
  <SelectionScreen />
);
