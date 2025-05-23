import React, { useState } from "react";
import { BeforeBedMessage } from "../Others/Objects";
import { useEffect } from "react";

const BeforeYouSleep = () => {
  const [messages, setMessages] = useState(BeforeBedMessage);
  const [newMessage, setNewMessage] = useState({
    title: "",
    text: "",
    Bibleverse: "",
    date: "",
    concludingGreeting: "",
  });
  const [showInput, setShowInput] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("Current Messages:", messages);
  }, [messages]);

  // State to manage the currently displayed message
  const [currentMessage, setCurrentMessage] = useState(messages[0]); // Initially display the first message

  const handleInputChange = (e) => {
    setNewMessage({
      ...newMessage,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveMessage = () => {
    const newErrors = {};
    if (!newMessage.title) {
      newErrors.title = "Title is required";
    }
    if (!newMessage.text) {
      newErrors.text = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const updatedMessages = [...messages, newMessage]; // Add new message to existing messages
    setMessages(updatedMessages);
    setCurrentMessage(newMessage);

    setNewMessage({
      title: "",
      text: "",
      Bibleverse: "",
      date: "",
      concludingGreeting: "",
    });
    setShowInput(false);
    setErrors({});
  };

  const handleAddNewMessage = () => {
    setShowInput(true);
    setCurrentMessage(null); // Remove the currently displayed message
  };

  return (
    <div>
      <div className="BeforeBedContainer py-16 px-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Before You Sleep
        </h2>

        {}
        {currentMessage && (
          <div className="message-card bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
              {currentMessage.title}
            </h3>
            <p className="text-gray-700 mb-4 text-xl">{currentMessage.text}</p>
            <p className="text-gray-600 italic mb-4">
              Bible Verse: {currentMessage.Bibleverse}
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Date: {currentMessage.date}
            </p>
            <p className="text-indigo-600 font-medium">
              {currentMessage.concludingGreeting}
            </p>
          </div>
        )}

        {}
        {!showInput && (
          <button
            onClick={handleAddNewMessage}
            className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
          >
            Add New Message
          </button>
        )}

        {showInput && (
          <div className="mt-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newMessage.title}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded mb-2 w-full"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title}</span>
            )}
            <textarea
              name="text"
              placeholder="Message"
              value={newMessage.text}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded mb-2 w-full"
            />
            {errors.text && (
              <span className="text-red-500 text-sm">{errors.text}</span>
            )}
            <input
              type="text"
              name="Bibleverse"
              placeholder="Bible Verse"
              value={newMessage.Bibleverse}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded mb-2 w-full"
            />
            {errors.text && (
              <span className="text-red-500 text-sm">{errors.Bibleverse}</span>
            )}
            <input
              type="text"
              name="date"
              placeholder="Date"
              value={newMessage.date}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded mb-2 w-full"
            />
            {errors.text && (
              <span className="text-red-500 text-sm">{errors.date}</span>
            )}
            <input
              type="text"
              name="concludingGreeting"
              placeholder="Concluding Greeting"
              value={newMessage.concludingGreeting}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded mb-2 w-full"
            />
            {errors.text && (
              <span className="text-red-500 text-sm">
                {errors.concludingGreeting}
              </span>
            )}
            <button
              onClick={handleSaveMessage}
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
            >
              Save Message
            </button>
          </div>
        )}
        {}
      </div>
    </div>
  );
};

export default BeforeYouSleep;
