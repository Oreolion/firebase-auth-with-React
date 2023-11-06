import { Routes, Route } from "react-router-dom";
import Signin from "/src/components/Signin";
import Signup from "/src/components/Signup";
import Account from "/src/components/Account";
import { AuthContextProvider } from "../AuthContext";
import { ProtectedRoute } from "../ProtectedRoute";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold">
        Firebase Auth and Context
      </h1>

      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
