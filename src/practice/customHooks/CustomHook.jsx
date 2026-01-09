import React, { useEffect, useState } from "react";
import useCustomHook from "./useCustomHook";

function CustomHook() {
  const { result, loding, error } = useCustomHook(
    "http://jsonplaceholder.typicode.com/todos"
  );

  return (
    <>
      {loding && <p>Loading,...</p>}
      {error && <p>Error....</p>}
      {result && <p>{JSON.stringify(result)}</p>}
    </>
  );
}

export default CustomHook;
