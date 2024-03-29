import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  // 현재 버전은 data 를 캐싱하기에 문제 x
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function Movie({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie Vidoes</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
