import { useState } from 'react';

function useList() {
  const [list, setList] = useState<Movie[] | DocumentData[]>([]);
  return list;
}

export default useList;
