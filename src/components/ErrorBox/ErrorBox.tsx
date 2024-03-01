import React from "react";
import { MainBox } from "../../layout/MainBox";

type ErrorProps = { error: Error };

export const ErrorBox: React.FC<ErrorProps> = ({ error }) => {
  console.log(error.name, error.message);
  return (
    <div className="p-2 sm:p-4">
      <MainBox className="bg-error-container text-on-error-container text-center">
        <p className="mx-auto text-error text-title-lg p-4">
          {error.name}: {error.message},
        </p>
      </MainBox>
    </div>
  );
};
