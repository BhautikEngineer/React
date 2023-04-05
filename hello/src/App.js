import CompoEx1 from "./learning/Compo";
import Prop from "./learning/Properties";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventsReact from "./learning/Events";
import LI from "./learning/list";
import Form from "./learning/form";
import Layout from "./learning/Layout";
import TodoList from "./task/Todo";
import API from "./learning/api";
import CrudAPI from "./task/CrudAPI";
import APItry from "./learning/APItry";

function App() {
  return (
    <div>
      <API />
      <APItry />
      {/* <CrudAPI /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CompoEx1 />} />
            <Route path="Prop" element={<Prop />} />
            <Route path="EventsReact" element={<EventsReact />} />
            <Route path="todo" element={<TodoList />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <h1>Bhautik gvjhbjn</h1>

      <CompoEx1 />
      <Prop />
      <EventsReact />
      <LI />
      <Form />
    </div>
  );
}

export default App;
