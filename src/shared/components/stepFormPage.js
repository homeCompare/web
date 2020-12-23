import React, {useState} from 'react';

const HomeFormPage = () => {
  const [page, setPage] = useState(0);

  const next = values => {
    setPage((prevState) => (prevState + 1));
  };

  const previous = () => {
    setPage((prevState) => (prevState - 1));
  };

  return (
    <div />
  );
};

export default HomeFormPage;
