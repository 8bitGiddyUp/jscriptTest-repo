//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmerelda" },
        ],
        "/users/1": {
          id: 1,
          username: "Bilbo",
          upvotes: 360,
          city: "Lisbon",
          topPostId: 454321,
        },
        "/users/5": {
          id: 5,
          username: "Esmerelda",
          upvotes: 571,
          city: "Honolulu",
        },
        "/posts/454321": {
          id: 454321,
          title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
        },
        "/about": "This is the about page!",
      };

      const dt = pages[url];
      if (dt) {
        res({ status: 200, dt }); //resolve with a value!
      } else {
        rej({ status: 404 }); //reject with a value!
      }
    }, 1000);
  });
};

console.log("++++++++++++++++++++++++++++++++");
fakeRequest("/users")
  .then((resD) => {
    const id = resD.dt[0].id;
    fakeRequest(`/users/${id}`)
      .then((rData) => {
        console.log("2 - resData: ", rData.dt.topPostId);
        const topPostId = rData.dt.topPostId;
        console.log("topPostId: ", topPostId);
        fakeRequest(`/post/${topPostId}`)
          .then((rD) => {
            console.log("3 - post: ", rD.dt.title);
          })
          .catch((e) => {
            console.log("error: title");
          });
      })
      .catch((e) => {
        console.log("error: topPostId");
      });
  })
  .catch((e) => {
    console.log("error: id", e);
  });
console.log("---------------------------------");

console.log("++++++++++++++++++++++++++++++++");
// now with chaining; one "catch" catches all errors
fakeRequest("/users")
  .then((rD) => {
    const id = rD.dt[0].id;
    return fakeRequest(`/users/${id}`);
  })
  .then((d) => {
    const topPostId = d.dt.topPostId;
    return fakeRequest(`/posts/${topPostId}`);
  })
  .then((d) => {
    const title = d.dt.title;
    console.log("6 - title: ", title);
  })
  .catch((e) => {
    console.log("7 - error: ", e);
  });
console.log("---------------------------------");

// promise chaining
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/users/${id}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	});

// ************************************************
// ATTEMPT 2 (deliberate error to illustrate CATCH)
// ************************************************
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/useALSKDJrs/${id}`); //INVALID URL, CATCH WILL RUN!
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	});
