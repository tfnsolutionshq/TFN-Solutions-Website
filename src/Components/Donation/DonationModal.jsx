import { useState } from "react";
import { X } from "lucide-react";

const DonationModal = ({ isOpen, onClose }) => {
  const [donationAmount, setDonationAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currency, setCurrency] = useState("NGN");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-md shadow-lg w-full max-w-md mx-4 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-1">Thank you for your interest to donate to this cause as an 'anonymous participant'</h2>
          <p className="text-sm text-gray-500 mb-6">Proceed to fill the below information</p>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What currency would you like to donate in?
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D15300]"
              >
                <option value="NGN">Nigerian Naira (NGN)</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">British Pound (GBP)</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How much do you want to Donate?
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  {currency === "NGN" ? "₦" : currency === "USD" ? "$" : currency === "EUR" ? "€" : "£"}
                </span>
                <input
                  type="text"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full p-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D15300]"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address (For receipt of Transaction)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D15300]"
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#D15300] text-white py-3 rounded-md hover:bg-[#FF6900] transition-colors"
            >
              PROCEED TO DONATE
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            This donation is completely anonymous and your identity will not be disclosed to the public.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;