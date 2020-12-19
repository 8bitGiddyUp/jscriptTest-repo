const createAutoComplete = ({root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
  getchData}) => {
  root.innerHTML = `
    <label><b>Search</b></label>
    <input class="input" size="5">
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;

  const input = root.querySelector('input');
  const dropdown = root.querySelector('.dropdown');
  const resultsWrapper = root.querySelector('.results');

  const onInput = async event => {
    const items = await fetchData(event.target.value);

    /*
      when search returns nothing
    */
   if (!items.length) {
     dropdown.classList.remove('is-active');
     return;
   }

    /*
      clear the buffer
    */
   resultsWrapper.innerHTML = '';

    dropdown.classList.add('is-active');
    for (let item of items) {
      const option = document.createElement('a');

      option.classList.add('dropdown-item');
      option.innerHTML = renderOption(item);

      /*
        when a item is clicked from the dropdown list:
          - the dropdown box disappears
          - the selected item title is copied to the input box
      */
      console.log("---", item.Title);
      option.addEventListener('click', () => {
        console.log("+++", item);
        dropdown.classList.remove('is-active');
        input.value = inputValue(item);

        /*
          once a user selects a item, another api search is done with item.Title
        */
        onOptionSelect(item);
      });
      resultsWrapper.appendChild(option);
    }
  };

  input.addEventListener('input', debounce(onInput, 500));

  document.addEventListener('click', event => {
    console.log(event.target);
    /*
      if the elements in the root is not clicked, close the dropdown list
    */
    if (!root.contains(event.target)){
      dropdown.classList.remove('is-active');
    }
  });
};