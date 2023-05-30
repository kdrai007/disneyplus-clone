import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Originals from "./Originals";
import Series from "./Series";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "movies"));
        const movieData = {
          recommends: [],
          originals: [],
          newDisney: [],
          trending: [],
        };

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          switch (data.type) {
            case "recommend":
              movieData.recommends.push({ id: doc.id, ...data });
              break;
            case "original":
              movieData.originals.push({ id: doc.id, ...data });
              break;
            case "new":
              movieData.newDisney.push({ id: doc.id, ...data });
              break;
            case "trending":
              movieData.trending.push({ id: doc.id, ...data });
              break;

            default:
              break;
          }
        });

        dispatch(
          setMovies({
            recommend: movieData.recommends,
            newDisney: movieData.newDisney,
            original: movieData.originals,
            trending: movieData.trending,
          })
        );
      } catch (error) {
        console.log("Error retrieving movie data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);
  return (
    <Wrapper>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Series />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
