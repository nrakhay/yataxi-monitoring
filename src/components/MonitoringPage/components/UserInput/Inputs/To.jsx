import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

import markerTo from "../../../../../assets/new_flag.svg";

function To({ isLoaded, onSecondCoordSelect, getToInput }) {
  const {
    value,
    suggestions: { status, data },
    setValue,
    init,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      getToInput(description);

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        // console.log("📍 Coordinates: ", { lat, lng });
        onSecondCoordSelect({ lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          className="suggestion-item"
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <span className="main-suggestion">{main_text}</span>{" "}
          <span className="secondary-suggestion">{secondary_text}</span>
        </li>
      );
    });

  React.useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [isLoaded, init]);

  return (
    <>
      <div className="address to-address" ref={ref}>
        <input
          className="address-input"
          type="text"
          id="name"
          name="name"
          required
          autoComplete="off"
          placeholder="🔎 To"
          value={value}
          onChange={handleInput}
        />
        {status === "OK" && (
          <ul className="suggestions">{renderSuggestions()}</ul>
        )}
      </div>
    </>
  );
}

export default To;
