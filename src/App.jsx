import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

function App() {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const expenseRef = useRef();

  // useEffect - Mock API data
  useEffect(() => {
    const fetchExpenses = async () => {
      const mockData = [
        { id: 1, name: "Lunch", amount: 150 },
        { id: 2, name: "Cab Fare", amount: 200 },
        { id: 3, name: "Books", amount: 300 },
      ];

      setExpenses(mockData);
    };

    fetchExpenses();
    expenseRef.current.focus();
  }, []);

  // useCallback
  const addExpense = useCallback(() => {
    if (!expense || !amount) return;

    const newExpense = {
      id: Date.now(),
      name: expense,
      amount: Number(amount),
    };

    setExpenses((prev) => [...prev, newExpense]);
    setExpense("");
    setAmount("");

    expenseRef.current.focus();
  }, [expense, amount]);

  // useMemo
  const totalExpense = useMemo(() => {
    return expenses.reduce((sum, item) => sum + item.amount, 0);
  }, [expenses]);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Expense Tracker</h1>

        <input
          ref={expenseRef}
          type="text"
          placeholder="Enter Expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={inputStyle}
        />

        <button onClick={addExpense} style={buttonStyle}>
          Add Expense
        </button>

        <h2 style={totalStyle}>Total: ₹{totalExpense}</h2>

        <div>
          {expenses.map((item) => (
            <div key={item.id} style={expenseCard}>
              <span>{item.name}</span>
              <span>₹{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
  fontFamily: "Arial",
};

const cardStyle = {
  width: "420px",
  background: "#ffffff",
  padding: "30px",
  borderRadius: "20px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
};

const headingStyle = {
  textAlign: "center",
  color: "#4f46e5",
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#4f46e5",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

const totalStyle = {
  textAlign: "center",
  margin: "20px 0",
  color: "#111827",
};

const expenseCard = {
  display: "flex",
  justifyContent: "space-between",
  background: "#eef2ff",
  padding: "12px",
  marginBottom: "10px",
  borderRadius: "10px",
};

export default App;