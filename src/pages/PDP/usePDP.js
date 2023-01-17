import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchMovieById, selectMovieById } from "store/slices/movieByIdSlice";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlist,
} from "store/slices/wishlistSlice";
import { hasItem } from "utils/movieUtils";

const usePDP = ({ movieId } = {}) => {
  const dispatch = useAppDispatch();
  const { status, error, data } = useAppSelector(selectMovieById);
  const { wishlistItems } = useAppSelector(selectWishlist);
  const isAddedToWishlist = useMemo(
    () => hasItem(wishlistItems, movieId),
    [wishlistItems, movieId]
  );

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieById(movieId));
    }
  }, [movieId]);

  const handleWishList = useCallback(() => {
    dispatch(
      isAddedToWishlist ? removeFromWishlist(data.id) : addToWishlist(data)
    );
  }, [isAddedToWishlist, data]);

  return {
    status,
    error,
    movie: data?.id ? data : null,
    isAddedToWishlist,
    wishlistItems,
    handleWishList,
  };
};

export default usePDP;
