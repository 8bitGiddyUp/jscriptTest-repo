128 Web DOM
  at console
    document
    console.dir(document)
    document.img
    document.all
133 getElementById
  selecting
    getElementById -> returns one object
      document.getElementById('bear-photo') -> returns HTML
      const img = document.getElementById('bear-photo') -> returns an object
    getElementsByTagName -> returns a HTMLCollection of objects (not an array)
      const inputs = document.getElementsByTagName('input')
        inputs
          inputs[0] -> selects the first element in the HTMLCollection
          inputs.length
          inputs.pop() -> returns an error since it is not an array
      to convert HTMLCollection to an array
        const arr = [...inputs] -> the spread statement make it an array
    getElementsByClassName -> returns a HTMLCollection
      const headers = document.getElementsByClassName('header')
      search within a tag
        const ul = document.getElementsByTagName('ul')[0] -> the first one
        const special = ul.getElementsByClassName('special')
    ID -> since there is one unique ID on a web document, there is not need for
      search within an ID
136 querySelector -> returns the first find; a swiss army knife of DOM selectors
  querySelector -> returns one and it is new
    document.querySelector('h1');
    document.querySelector('#bear-photo') -> needs '#'
      document.getElementById('bear-photo') -> don't need '#'
    document.querySelector('section ul li.special')
    using CSS attribute to select:
      document.querySelector('input[type="password"]')
        -> returns
          <input type="password" placeholder="password">
  querySelectorAll -> returns 'NodeList' a collection -> more than one
    document.querySelectorAll('li') -> returns a collection -- not an array
137 working with innerText textContent
  MANIPULATE -> accessing data such as from forms and web pages
    classList
      manipulating classes
        assuming a webpage has:
          <ul id='todos'>
            <li class='todo'>mow the lawn <button>x</button></li>
            <li class='todo'>milk the cow <button>x</button></li>
            <li class='todo'>feed the alpacas <button>x</button></li>
          </ul>
          in CSS:
            .todo {
              font-size: 30px;
              color: olive;
            }
          to change 'todos' styles:
            const todo = document.querySelector('#todos .todo')
            todo.style.color = 'gray';
            toto.style.textDecoration = 'line-through';
            todo.style.opacity = '50%';
          this is inefficient if changing many, many properties; use "class" instead
            in CSS add ".done":
              .done {
                color: gray;
                text-decoration: line-through;
                opacity: 50%;
              }

              now apply the above ".done" style:
                const todo = document.querySelector('#todos .todo')
                todo.getAttribute('class')
                  -> "todo"
                todo.setAttribute('class', 'done') -> here "done" is from CSS
                  the side effect is "hard code change to done":
                    <ul id='todos'>
                      <li class='done'>mow the lawn <button>x</button></li>
                      <li class='todo'>milk the cow <button>x</button></li>
                      <li class='todo'>feed the alpacas <button>x</button></li>
                    </ul>
                INSTEAD, use "classList"
                  todo.classList
                    -> returns available "methods"
                  NOW, use one of the methods:
                    to remove the CSS' done style:
                      todo.classList.remove('done')
                    to add CSS done style:
                      todo.classList.add('done')
                    to toggle a CSS 'done' style:
                      todo.classList.toggle('done')
                        -> removes CSS style if 'on'; adds it if 'off'
    getAttribute()
      const range = document.querySelector('input[type="range"]')
      range.getAttribute('max') -> returns "500"
      range.getAttribute('dummy') -> returns null
    setAttribute()
      range.setAttribute('min', '-500') -> changes "min" attribute to "-500"
      range.value -> returns "-500"
    insertBefore()
      adds before the first li in 'li.todo':
        const parentUL = document.querySelector('ul')
        const newLI = document.createElement('li')
        newLI.innerText = 'i am new li'
        const firstLI = document.querySelector('li.todo')
        parentUL.insertBefore(newLI, firstLI)
      to insert before the last 'li':
        const lastUL = document.querySelectorAll('li.todo')[2] -> index based on
          the original
        parentUL.insertBefore(newLI, lastUL)
    append() & prepend()
      append() -> add more than one
      prepend() -> add only one
    removeChild() & remove()
      to remove 'peas':
      <section>
        <ul>
          <li>carrot</li>
          <li class='special'>peas</li>
          <li>broccoli</li>
        </ul>
      </section>
      const ul = document.querySelector('section ul')
      const removeMe = ul.querySelector('.special')
      const deleted = ul.removeChild(removeMe)
        -> 'peas' is gone
      to remove 'h1':
        const h1 = document.querySelector('h1')
        h1.remove()
    createElement()
      used to create an element from scratch and it to the DOM, add/insert urls
      properties to the DOM
        const newh2 = document.createElement('h2')
          created a blank object of "h2" called "newh2"
        console.dir(newh2)
          -> h2 an empty 'h2' has been created
        newh2
          -> <h2></h2>
        newh2.innerText = 'i like animals!'
        newh2
          -> <h2>i like animals!!</h2>
        to add a class called 'special':
          newh2.classList.add('special')
          newh2
            -> <h2 class='special'>i like animals!</h2>
        now, these changes are temporary; how to make it permanent by adding them
        to the DOME:
          to add 'h2', use appendChild() to add to the DOM; adding to the HTML
          below:
            <section>
              <ul>
                <li>carrot</li>
                <li class='special'>peas</li>
                <li>broccoli</li>
              </ul>
            </section>
          to add to "<section>:
            create a new h2 -> "newh2"
              const section = document.querySelector('section') -> must be used
                before the <htmltag>.appendChild()
              const newh2 = document.createElement('h2')
              newh2.innerText = 'i like animals!'
              section.appendChild(newh2) -> appends to the child of 'section'
                result is:
                  <section>
                    <ul>
                      <li>carrot</li>
                      <li class='special'>peas</li>
                      <li>broccoli</li>
                    </ul>
                ->  <h2 class='special'>i like animals</h2>
                  </section>
    innerText
      const h1 = document.querySelector('h1')
      h1.innerText -> "my webpage"
      h1 -> <h1 class="header">my webpage</h1>

      const ul = document.querySelector('ul')
      ul.innerText -> returns as a string, not 3 individual strings
        "first thing
         second thing
         third thing"
      ul.innerText = "new Ul list" -> replace all 3 ul lists
      document.body.innerText -> returns the output of HTML

      h1.innerText = "im hungry" -> replaces "my webpage" only in console (temp)
    textContent
      at first, h1.innerText is similar to h1.textContent but...
      const p = document.querySelector('#main')
      p.innerText -> only displays what HTML allows
        "ddffdfdfd dkjdfd ddffdfdfd
         dfdf dffd dff dffdfdf dfdf"
      p.textContent -> displays indiscriminately
        "ddffdfd
         fd dkjdfd ddffdfdfd
         dfdf dffd d
         ff dffdfdf dfdf
         console.log("hello everyone!")
         "
      innerText is faster than textContent
    innerHTML
      const form = document.querySelector('form')
      form.innerHTML -> returns a string of every element in "form"
      "
        <input type='text' placeholder="bear name">
        <input type='passworld' placeholder="password">
        <input type='submit'>
      "
      form.innerHTML = '<b>im bold</b>' -> replaces the above input string
        -> returns "<b>im bold</b>" -> also changes the DOM tree by adding <b>
      MAIN DIFFERENCE BETWEEN
        innerHTML vs innerText
          innerHTML -> interprets innerHTML = "<b>im bold</b>" make it bold
          innerText -> just prints without interpreting the HTML tags
    value
      const inputs = document.querySelectorAll('input')
      inputs[0].value -> access first input in the form
        -> returns "bubba"
        inputs[0].value += 'the bear'
          -> returns "bubbathe bear'
          -> to set it to blank -> inputs[0].value = ''
        inputs[1] -> returns
          <input type='passworld' placeholder="password">
          inputs[1].placeholder -> returns
            "password"
          inputs[1].placeholder = "please enter password"
          inputs[1].placeholder -> returns
            "please enter password"
      <variable>.<HTML attribute> = "<some value>"
    parentElement -> used to go up the DOM tree
      const firstLI = document.querySelector('li')
      firstLI
        <li class="special">first thing</li>
      console.dir(firstLI) -> returns its DOM
        -> its parentElement: ul
      firstLI.parentElement
        -> <ul></ul>
      firstLI.parentElement.parentElement
        -> <body></body>
      firstLI.parentElement.parentElement.parentElement
        -> <html>
           <head></head>
           <body></body>
           </html>
      firstLI.parentElement.parentElement.parentElement.parentElement
        -> null
    children
      const ul = document.querySelector('ul')
      ul
        -> <ul></ul>
      ul.children
        -> HTMLCollection(3) [li.special, li, li.special]
      ul.children[0] -> to access first child
        -> <li class="special">first thing</li>
      ul.children[0].innerText
        -> "first thing"
    nextSibling
      firstLI.nextElementSibling
        -> <li>second thing</li>
      firstLI.nextElementSibling.nextElementSibling
        -> <li class="special">third thing</li>
    previousSibling
      this is a reverse traver of "nextElementSibling"
    style
      const h1 = document.querySelector('hi')
      h1.style.color
        -> ""
      h1.style -> returns CSSStyleDeclaration
        -> "color: """ -> is blank although the CSS style sheet has it as purple
          because it is not defined in the inline "style"
          i.e.
            <h1 style="color: teal;" class="header">my webpage</h1>
            h1.style.color -> now returns
              "teal"
      ht.style.color = "pink" -> added in "style" tag as style="color: pink;"
      to change multiple colors
        style is an inline and supercedes all other CSS styles
        const allLis = document.querySelectorAll('li')
        const colors = ['red', 'orange', 'yello']
        allLis.forEach((li, i) => {
          const color = colors[i]
          console.log(el, color)
          li.style.color = color
        });
142 changing multiple elements
  const allLis = document.querySelectorAll('li')
  for(let i = 0; i < allLis.length; i++) {
    allLis[i].innerText = "we are the champ"
  }

  for(let li of allLis) {
    li.innerHTML = 'we are <b>the champ</b>'
  }
144 getComputedStyle
  document.querySelector('li')
    -> <li class='special'>first thing</li>
  document.querySelector('li').style.color
    -> "" returns blank because "style.color" is an inline style, not computed
  to get computed style (css, javascript assigned values)
    const li = document.querySelector('li')
    const styles = getComputedStyle(li)
      styles -> returns all CSS properties
        uses "styles" to change values
          li.style.color = 'pink' -> changes to pink
          styles.color -> "rgb(255, 0, 0)"
    const h1 = document.querySelector('hi')
    const compStyles = getComputedStyle(h1)
    compStyles.color
      -> "rgb(128,0,128)"
    compStyles.fontSize
      -> "60px"
    h1.style.color (inline style call)
      -> "" returns blank because inline
    h1.style.fontSize
      -> ""
152 Two ways not to add events
  HOW DOES EVENT WORKS:
    an object             event type               the code to run 
    button                click                    change the color 
    input                 hits return              get search result 
    image                 mouseover                display the img caption

    DONT USE THESE:
      - inline event handlers such as:
        <button on<eventName>="alert(...)" ...>
        <button onmouseover="alert('you mouseover me')">click me</button>

        at the console, find the 'onmouseover''s value:
          const mouseOverBtn = document.querySelector('button')
          console.dir(mouseOverBtn)
            -> when opened, onmouseover shows "f onmouseover(event)

      - add the following in a js script:
        
          const btn = document.querySelector('#clicker');
          btn.onclick = alert("btn.onclick activated");
            -> even without a click, these codes cause popup right away
            -> in console alert("btn.onclick activated") is undefined therefore,
              btn.onclick = undefined
            -> or btn.onclick can have a function expression:
              btn.onclick = function(){
                console.log('you click function() onclick')
              }
          THE DISADVANGE IS THAT ALL THESE EVENT PROPERTIES MUST BE TRACKED DOWN
          AND MAINTAINED--too many to handle

    DO USE THIS FINAL THIRD EVENT HANDLER OPTION:
      - ADD EVENT LISTENER
        -> addEventListener: addEventListener can help more than one event can
          be added to an object

          const button = document.querySelector('h1');
          button.addEventListener('click', () => {
              alert("new addEventListener clicked me!!!')
            }
          );


  clicks
  drags
  drops
  hovers
  scrolls
  form submission
  key presses
  focus/blur
  mouse wheel
  double click
  copying
  pasting
  audio start
  screen resize
  printing

  155 how to add multiple event listeners


  157 Key Events Keypress Keyup keydown
    - needs 'e' argument sent to addEventListener's callback function
    const input = document.querySelector('#username');
    input.addEventListener('keydown', function(e) {
      console.log('key down');
    });