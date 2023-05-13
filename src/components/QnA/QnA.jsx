import React from "react";

const QnA = ({question, children}) => {
  return (
    <div className="my-5 border p-4 rounded-lg border-purple-400">
      <h4 className="text-xl font-semibold">
       
        <strong>Question :</strong> {question}
      </h4>
      <hr className="border-1 mt-2 border-purple-200" />
      <h3 className="text-lg font-medium mt-3">
       
        <strong>Answer:</strong> {children}
      </h3>
    </div>
  );
};

export default QnA;
