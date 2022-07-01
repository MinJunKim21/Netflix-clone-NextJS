import { XIcon } from '@heroicons/react/solid';
import MuiModal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtoms';
import { Movie } from '../typings';
import { Element, Genre } from '../typings';

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((response) => response.json())
        .catch((err) => console.log(err.message));
      // 클릭되는 썸네일의 데이터를 fetch해오는 과정이었음

      //만약 data가 존재한다면, index를 찾을거임. trailer가 있는 '그' 인덱스를 찾아내기 위해서 findIndex function(JS) 을 사용. trailer 값을 '그' 위치의 key값으로 설정
      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer'
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      //data.genres가 존재한다면, genres를 설정.
      if (data?.genres) {
        setGenres(data.genres);
      }
    }
    fetchMovie();
  }, [movie]);
  //modal을 눌러서 실행될 때마다, movie 값이 바뀌고 useEffect가 발동되어서 video를 fetch해와서 trailer를 사용할 수 있게됨.

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div></div>
      </>
      {/* 이 빈 괄호는 mui의 modal 사용법에서 한번 감싸주어야 되는 실행법이 있어서 형식적으로 만든거임 */}
    </MuiModal>
  );
}

export default Modal;
