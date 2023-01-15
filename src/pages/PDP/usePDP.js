import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchMovieById, selectMovieById } from "store/slices/movieByIdSlice";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlist,
} from "store/slices/wishlistSlice";

const usePDP = ({ movieId } = {}) => {
  const dispatch = useAppDispatch();
  const { status, error, data } = useAppSelector(selectMovieById);
  const { wishlistIds } = useAppSelector(selectWishlist);
  const isAddedToWishlist = useMemo(
    () => wishlistIds.includes(movieId),
    [wishlistIds]
  );

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieById(movieId));
    }
  }, [movieId]);

  const handleWishList = useCallback(() => {
    dispatch(
      isAddedToWishlist ? removeFromWishlist(movieId) : addToWishlist(movieId)
    );
  }, [isAddedToWishlist]);

  return {
    status,
    error,
    movie: data?.id ? data : null,
    isAddedToWishlist,
    handleWishList,
  };
};

export default usePDP;
