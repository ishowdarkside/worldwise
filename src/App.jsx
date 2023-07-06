import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { CityProvider } from "./contexts/CitiesContext";
import CountriesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";

import { AuthProvider } from "./contexts/fakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <CityProvider>
        <BrowserRouter>
          <Routes>
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route index element={<Homepage />} />

            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountriesList />} />
              <Route path="form" element={<Form />} />
            </Route>

            <Route path="/login" element={<Login />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CityProvider>
    </AuthProvider>
  );
}
