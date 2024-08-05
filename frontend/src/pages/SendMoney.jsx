import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Appbar } from "../components/Appbar";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);

  const handleSendMoney = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/account/transfer",
        {
          to: id,
          amount,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 200) {
        toast.success("Money sent successfully!");
      }
    } catch (error) {
      console.error("Error sending money:", error);
      toast.error("Failed to send money. Please try again.");
    }
  };

  return (
    <>
      <Appbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Send Money
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-3xl text-white">
                {name ? name[0].toUpperCase() : ""}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700">{name}</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="amount"
              >
                Amount (in Rs)
              </label>
              <input
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                type="number"
                className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="amount"
                placeholder="Enter amount"
              />
            </div>
            <button
              onClick={handleSendMoney}
              className="w-full h-10 flex items-center justify-center rounded-md bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
            >
              Send Money
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default SendMoney;
