import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

const UserInput = ({ isLoaded }) => {
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

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
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
    <div className="component-container user-input">
      <div className="address-container">
        <div className="address from-address" ref={ref}>
          <input
            className="address-input"
            type="text"
            id="name"
            name="name"
            required
            autoComplete="off"
            placeholder="Откуда?"
            value={value}
            onChange={handleInput}
          />
          {status === "OK" && (
            <ul className="suggestions">{renderSuggestions()}</ul>
          )}
        </div>
        <div className="address to-address" ref={ref}>
          <input
            className="address-input"
            type="text"
            id="name"
            name="name"
            required
            autoComplete="off"
            placeholder="Куда?"
          />
        </div>
      </div>
      <div className="classes-container">
        <ul>
          <li>
            <input
              type="radio"
              value="1"
              name="radio"
              className="class-select"
              id="econ"
            />
            <label htmlFor="econ" className="class-labels">
              Эконом
            </label>
          </li>
          <li>
            <input
              type="radio"
              value="2"
              name="radio"
              className="class-select"
              id="comf"
            />
            <label htmlFor="comf" className="class-labels">
              Комфорт
            </label>
          </li>
          <li>
            <input
              type="radio"
              value="3"
              name="radio"
              className="class-select"
              id="comf-plus"
            />
            <label htmlFor="comf-plus" className="class-labels">
              Комфорт+
            </label>
          </li>
          <li>
            <input
              type="radio"
              value="5"
              name="radio"
              className="class-select"
              id="business"
            />
            <label htmlFor="business" className="class-labels">
              Бизнес
            </label>
          </li>
        </ul>
      </div>
      <div className="submit-container">
        <input
          type="submit"
          value="Начать мониторинг"
          className="search-button"
        />
      </div>
    </div>
  );
};

export default UserInput;
