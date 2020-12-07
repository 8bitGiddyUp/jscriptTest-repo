function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e) {
  console.log(e.key);
  if (e.key === 'ArrowDown') {
    // to make the avatar move
    // avatar.style.top = '200px';
    const curTop = extractPos(avatar.style.top);
    console.log("curTop:", curTop);
    avatar.style.top = `${curTop + 50}px`;
    console.log("avatar.style.top:", avatar.style.top);
  }
  else if (e.key === 'ArrowUp') {
    const curTop = extractPos(avatar.style.top);
    avatar.style.top = `${curTop - 50}px`;
  }
  else if (e.key === 'ArrowRight') {
    const curLeft = extractPos(avatar.style.left);
    avatar.style.left = `${curLeft + 50}px`;
    avatar.style.transform = 'scale(1,1)';
  }
  else if (e.key === 'ArrowLeft') {
    const curLeft = extractPos(avatar.style.left);
    avatar.style.left = `${curLeft - 50}px`;
    avatar.style.transform = 'scale(-1,1)';
  }

  if (isTouching(avatar, coin)) {
    moveCoin();
  }
});


const extractPos = (pos) => !pos ? 100 : parseInt(pos.slice(0, -2));

const moveCoin = () => {
  const x = (Math.random() * window.innerWidth);
  const y = (Math.random() * window.innerHeight);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
}

moveCoin();