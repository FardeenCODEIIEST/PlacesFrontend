import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const UserPlaces = (props) => {
  const { error, clearError, sendRequest, isLoading } = useHttpClient();
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const userId = useParams().userId;

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`
        );

        console.log(responseData.places);

        setLoadedPlaces(responseData.places);
      } catch (err) {}
    };

    getPlaces();
  }, [sendRequest, userId]);

  const placeDeletedHandler = (deletePlaceId) => {
    setLoadedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletePlaceId)
    );
  };

  return (
    <>
      <ErrorModal onClear={clearError} error={error} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />
      )}
    </>
  );
};

export default UserPlaces;
