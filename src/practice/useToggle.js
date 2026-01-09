import React, { useEffect, useEffectEvent, useState } from "react";

function useToggle(toggleVal) {
  const [value, setValue] = useState(null);
  useEffect(() => {
    if (toggleVal == true) {
      setValue(false);
    } else {
      setValue(true);
    }
  }, [toggleVal]);
  return { value, setValue };
}

export default useToggle;
