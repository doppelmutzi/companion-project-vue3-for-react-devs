import { useEffect } from "react";

export default (title, initialValue) => {
  useEffect(() => {
    if (!title) document.title = initialValue;
    else document.title = title;
  }, [title]);
};
