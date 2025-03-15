import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [balance, setBalance] = useState(1000);
  const [amount, setAmount] = useState("");

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const handleTransaction = (type) => {
    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0) return;

    if (type === "withdraw" && value > balance) {
      alert("Fondos insuficientes");
      return;
    }

    setBalance(type === "deposit" ? balance + value : balance - value);
    setAmount("");
  };

  return (
    <div className="container">
      <h1>Internet Banking</h1>
      {isLoggedIn ? (
        <>
          <p>Balance: ${balance.toFixed(2)}</p>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ingrese el monto"
          />
          <button onClick={() => handleTransaction("deposit")}>
            Depositar
          </button>
          <button onClick={() => handleTransaction("withdraw")}>Retirar</button>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
  );
}

export default App;
