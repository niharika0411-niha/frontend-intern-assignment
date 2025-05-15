import AppRoutes from "./routes/AppRoutes";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}
