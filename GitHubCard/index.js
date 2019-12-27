/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/CoinOperatedGuy")
    .then((response) => {
        const myData = response.data;
        // console.log(myData);
        // console.log('response.data.bio', response.data.bio);
        // console.log(cards);
        // myData.forEach((uCard) => {
        //     cards.appendChild(createCard(uCard.avatar_url, uCard.name, uCard.login, uCard.location, uCard.html_url, uCard.followers, uCard.following, Ucard.bio))
        // });
        cards.appendChild(createCard(myData))
        const myFollowersArray = response.data.followers_url;
        // console.log(myFollowersArray);
        axios.get(myFollowersArray)
            .then((response) => {
                // console.log(response);
                const myFollowersData = response.data;
                console.log(myFollowersData);
                myFollowersData.forEach((userObject) => {
                    cards.appendChild(createCard(userObject));
                })
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .catch((err) => {
        console.log(err);
    });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/


const cards = document.querySelector('.cards');

// myData.forEach((uCard) => {
//     cards.appendChild(createCard(uCard.avatar_url, uCard.name, uCard.login, uCard.location, uCard.html_url, uCard.followers, uCard.following, Ucard.bio))
// });

function createCard(object) {
    const card = document.createElement('div');
    const cardPic = document.createElement('img');
    const cardInfo = document.createElement('div');
    const cardName = document.createElement('h3');
    const cardUserName = document.createElement('p');
    const cardLocation = document.createElement('p');
    const cardProfile = document.createElement('p');
    const cardAddress = document.createElement('a');
    const cardFollowers = document.createElement('p');
    const cardFollowing = document.createElement('p');
    const cardBio = document.createElement('p');
    card.appendChild(cardPic);
    card.appendChild(cardInfo);
    cardInfo.appendChild(cardName);
    cardInfo.appendChild(cardUserName);
    cardInfo.appendChild(cardLocation);
    cardInfo.appendChild(cardProfile);
    cardProfile.appendChild(cardAddress);
    cardInfo.appendChild(cardFollowers);
    cardInfo.appendChild(cardFollowing);
    cardInfo.appendChild(cardBio);
    card.classList.add('card');
    cardPic.setAttribute('src', object.avatar_url);
    cardInfo.classList.add('card-info');
    cardName.classList.add('name');
    cardUserName.classList.add('username');
    cardAddress.setAttribute('href', object.url);
    cardName.textContent = object.name;
    cardUserName.textContent = object.login;
    cardLocation.textContent = 'Location: ' + object.location;
    cardAddress.textContent = object.url;
    cardFollowers.textContent = object.followers;
    cardFollowing.textContent = object.following;
    cardBio.textContent = object.bio;

    return card;
}
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/