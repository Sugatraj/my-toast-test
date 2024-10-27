import React from "react";
import Toast from "./toast/Toast";
import ToastService from "./toast/ToastService";
import './index.css';

function App() {
  const mockApiResponse = (state) => {
    const messages = {
      1: "This is a success message for state 1",
      2: "This is an info message for state 2",
      3: "This is a warning message for state 3",
      4: "This is an error message for state 4",
    };
    return messages[state] || "Unknown state";
  };

  const showToastForStateAndPosition = (state, position) => {
    const message = mockApiResponse(state);
    switch (state) {
      case 1:
        ToastService.success(message, { position });
        break;
      case 2:
        ToastService.info(message, { position });
        break;
      case 3:
        ToastService.warning(message, { position });
        break;
      case 4:
        ToastService.error(message, { position });
        break;
      default:
        ToastService.default(message, { position });
    }
  };

  return (
    <>
      <Toast position="top-right" /> {/* Default position */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8">Test Toast Colors and Positions</h1>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Success Toasts</h2>
              <div className="space-x-4">
                <button
                  className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(1, "top-right")}
                >
                  Top Right
                </button>
                <button
                  className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(1, "top-left")}
                >
                  Top Left
                </button>
                <button
                  className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(1, "bottom-right")}
                >
                  Bottom Right
                </button>
                <button
                  className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(1, "bottom-left")}
                >
                  Bottom Left
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Info Toasts</h2>
              <div className="space-x-4">
                <button
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(2, "top-right")}
                >
                  Top Right
                </button>
                <button
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(2, "top-left")}
                >
                  Top Left
                </button>
                <button
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(2, "bottom-right")}
                >
                  Bottom Right
                </button>
                <button
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(2, "bottom-left")}
                >
                  Bottom Left
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Warning Toasts</h2>
              <div className="space-x-4">
                <button
                  className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(3, "top-right")}
                >
                  Top Right
                </button>
                <button
                  className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(3, "top-left")}
                >
                  Top Left
                </button>
                <button
                  className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(3, "bottom-right")}
                >
                  Bottom Right
                </button>
                <button
                  className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(3, "bottom-left")}
                >
                  Bottom Left
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Error Toasts</h2>
              <div className="space-x-4">
                <button
                  className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(4, "top-right")}
                >
                  Top Right
                </button>
                <button
                  className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(4, "top-left")}
                >
                  Top Left
                </button>
                <button
                  className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(4, "bottom-right")}
                >
                  Bottom Right
                </button>
                <button
                  className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                  onClick={() => showToastForStateAndPosition(4, "bottom-left")}
                >
                  Bottom Left
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
