import "./App.css";
import Navigation from "./Components/Navigation";
import ProductList from "./Components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import ProductDetails from "./Components/ProductDetails";

function App() {
  const products = [
    {
      id: 0,
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/Hc72f3726c52c459a8c9d68be9cea111eF.jpg_300x300.jpg",
      name: "AirPods",
      price: `6,99 $`,
      trailer: "https://www.youtube.com/embed/BFwGqLa_oAo",
    },
    {
      id: 1,
      imgSrc: `https://s.alicdn.com/@sc01/kf/Hdfd49d641a21425b980735a170a9de89K.jpg_300x300.jpg`,
      name: "Smart watch",
      price: `8,64 $`,
      trailer: "https://www.youtube.com/embed/BFwGqLa_oAo",
    },
    {
      id: 2,
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/H06b8a5528adc413b8f4eeef65d889acfK.jpg_300x300.jpg",
      name: "Iphone 11 ",
      price: `150 $`,
      trailer: "https://www.youtube.com/embed/BFwGqLa_oAo",
    },
  ];
  return (
    <div className="App">
      <Navigation />
      {/* router v5 */}
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/productlist">
          <ProductList list={products} />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route
          path="/details/:id"
          render={(props) => <ProductDetails list={products} {...props} />}
        />
      </Switch> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/productlist"
          element={<ProductList list={products} />}
        />
        <Route exact path="/login" element={<Login />} />
        <Route
          path="/details/:id"
          element={<ProductDetails list={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;
