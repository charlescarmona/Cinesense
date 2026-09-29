// id: unique identifier for every item.
// tags: related terms for the specified movie.

const movies = [
  {
    id: 1,
    title: "The Godfather",
    year: 1972,
    era: "Classic",
    style: "Live-Action",
    age: "R",
    genres: ["Crime", "Drama"],
    baseRating: 4.9,
    userRating: 0,
    img: "images/the-godfather.jpg",
    desc: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    tags: ["Classic", "Masterpiece", "Organized Crime", "Family Saga", "Quotable"]
  },

  {
    id: 2,
    title: "Taxi Driver",
    year: 1976,
    era: "Classic",
    style: "Noir / Dark",
    age: "R",
    genres: ["Crime", "Drama"],
    baseRating: 4.7,
    userRating: 0,
    img: "images/taxi-driver.jpg",
    desc: "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decay fuels his urge for violent action.",
    tags: ["Dark", "Psychological", "Noir", "Gritty", "Character Study"]
  },

  {
    id: 3,
    title: "2001: A Space Odyssey",
    year: 1968,
    era: "Classic",
    style: "Experimental",
    age: "G",
    genres: ["Sci-Fi", "Adventure"],
    baseRating: 4.6,
    userRating: 0,
    img: "images/2001-space-odyssey.jpg",
    desc: "After a mysterious monolith is uncovered on the Moon, a spacecraft is sent to Jupiter with the sentient supercomputer HAL 9000.",
    tags: ["Philosophical", "Visually Stunning", "Surreal", "Space Exploration", "Masterpiece"]
  },

  {
    id: 4,
    title: "Fantasia",
    year: 1940,
    era: "Classic",
    style: "Animation",
    age: "G",
    genres: ["Animation", "Family"],
    baseRating: 4.4,
    userRating: 0,
    img: "images/fantasia.jpg",
    desc: "A collection of animated interpretations of great works of Western classical music.",
    tags: ["Hand-drawn", "Classical Music", "Magical", "Disney", "Visually Stunning"]
  },

  {
    id: 5,
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    era: "Classic",
    style: "Live-Action",
    age: "PG",
    genres: ["Action", "Adventure", "Sci-Fi"],
    baseRating: 4.8,
    userRating: 0,
    img: "images/star-wars.jpg",
    desc: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, and two droids to save the galaxy from the Empire's battle station.",
    tags: ["Hero's Journey", "Space Opera", "Sci-fi", "Cult Classic", "Fun"]
  },

  {
    id: 6,
    title: "Psycho",
    year: 1960,
    era: "Classic",
    style: "Noir / Dark",
    age: "R",
    genres: ["Horror", "Mystery", "Drama"],
    baseRating: 4.7,
    userRating: 0,
    img: "images/psycho.jpg",
    desc: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    tags: ["Suspense", "Black and White", "Twist Ending", "Hitchcock", "Masterpiece"]
  },

  {
    id: 7,
    title: "Willy Wonka & the Chocolate Factory",
    year: 1971,
    era: "Classic",
    style: "Live-Action",
    age: "G",
    genres: ["Family", "Comedy", "Adventure"],
    baseRating: 4.5,
    userRating: 0,
    img: "images/willy-wonka.jpg",
    desc: "A poor but hopeful boy seeks one of the five coveted golden tickets that will grant him admission to an eccentric candymaker's wondrous factory.",
    tags: ["Nostalgia", "Feel-good", "Musical", "Whimsical", "Classic"]
  },

  {
    id: 8,
    title: "Chinatown",
    year: 1974,
    era: "Classic",
    style: "Noir / Dark",
    age: "R",
    genres: ["Crime", "Drama", "Mystery"],
    baseRating: 4.6,
    userRating: 0,
    img: "images/chinatown.jpg",
    desc: "A private detective hired to expose an adulterer finds himself caught in a web of deceit, corruption, and murder in 1930s Southern California.",
    tags: ["Neo-noir", "Dialogue-driven", "Cynical", "Investigation", "Bleak"]
  },

  {
    id: 9,
    title: "The Shawshank Redemption",
    year: 1994,
    era: "Retro 80s-90s",
    style: "Live-Action",
    age: "R",
    genres: ["Drama", "Crime"],
    baseRating: 4.9,
    userRating: 0,
    img: "images/shawshank-redemption.jpg",
    desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    tags: ["Masterpiece", "Inspirational", "Prison Escape", "Philosophical", "Friendship"]
  },
  {
    id: 10,
    title: "Pulp Fiction",
    year: 1994,
    era: "Retro 80s-90s",
    style: "Experimental",
    age: "R",
    genres: ["Crime", "Drama"],
    baseRating: 4.8,
    userRating: 0,
    img: "images/pulp-fiction.jpg",
    desc: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    tags: ["Nonlinear", "Dialogue-driven", "Cult Classic", "Dark Humor", "Retro Vibes"]
  },
  {
    id: 11,
    title: "Blade Runner",
    year: 1982,
    era: "Retro 80s-90s",
    style: "Noir / Dark",
    age: "R",
    genres: ["Sci-Fi", "Drama"],
    baseRating: 4.6,
    userRating: 0,
    img: "images/blade-runner.jpg",
    desc: "A blade runner must pursue and terminate four replicants who stole a ship in space and returned to Earth to find their creator.",
    tags: ["Cyberpunk", "Visually Stunning", "Philosophical", "Existential", "Slow Burn"]
  },
  {
    id: 12,
    title: "The Lion King",
    year: 1994,
    era: "Retro 80s-90s",
    style: "Animation",
    age: "G",
    genres: ["Animation", "Drama", "Family"],
    baseRating: 4.8,
    userRating: 0,
    img: "images/lion-king.jpg",
    desc: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    tags: ["Hand-drawn", "Great Soundtrack", "Disney", "Emotional", "Family"]
  },
  {
    id: 13,
    title: "Toy Story",
    year: 1995,
    era: "Retro 80s-90s",
    style: "Animation",
    age: "G",
    genres: ["Animation", "Adventure", "Comedy"],
    baseRating: 4.7,
    userRating: 0,
    img: "images/toy-story.jpg",
    desc: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
    tags: ["Pixar", "Nostalgia", "Funny", "Groundbreaking", "Friendship"]
  },
  {
    id: 14,
    title: "The Matrix",
    year: 1999,
    era: "Retro 80s-90s",
    style: "Live-Action",
    age: "R",
    genres: ["Action", "Sci-Fi"],
    baseRating: 4.8,
    userRating: 0,
    img: "images/matrix.jpg",
    desc: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth: his reality is a simulation.",
    tags: ["Cyberpunk", "Philosophical", "Martial Arts", "Bullet Time", "Innovative"]
  },
  {
    id: 15,
    title: "Jurassic Park",
    year: 1993,
    era: "Retro 80s-90s",
    style: "Live-Action",
    age: "PG-13",
    genres: ["Action", "Adventure", "Sci-Fi"],
    baseRating: 4.8,
    userRating: 0,
    img: "images/jurassic-park.jpg",
    desc: "A pragmatic paleontologist touring an almost complete theme park on an island is tasked with protecting kids after power fails.",
    tags: ["Dinosaurs", "Special Effects", "Thriller", "Suspense", "Spilberg"]
  },
  {
    id: 16,
    title: "Se7en",
    year: 1995,
    era: "Retro 80s-90s",
    style: "Noir / Dark",
    age: "R",
    genres: ["Crime", "Drama", "Mystery"],
    baseRating: 4.7,
    userRating: 0,
    img: "images/seven.jpg",
    desc: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    tags: ["Gritty", "Dark", "Bleak", "Shocking", "Detective"]
  },
  {
    id: 17,
    title: "Princess Mononoke",
    year: 1997,
    era: "Retro 80s-90s",
    style: "Animation",
    age: "PG-13",
    genres: ["Animation", "Action", "Adventure"],
    baseRating: 4.8,
    userRating: 0,
    img: "images/princess-monoke.jpg",
    desc: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between forest gods and a mining colony.",
    tags: ["Studio Ghibli", "Nature vs Humanity", "Epic", "Environmental", "Visually Stunning"]
  },

  {
    id: 18,
    title: "The Dark Knight",
    year: 2008,
    era: "2000s",
    style: "Noir / Dark",
    age: "PG-13",
    genres: ["Action", "Crime", "Drama"],
    baseRating: 4.9,
    userRating: 0,
    img: "images/dark-knight.jpg",
    desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.",
    tags: ["Dark", "Psychological", "Joker", "Intense Action", "Moral Conflict"]
  },

  {
    id: 19,
    title: "Spirited Away",
    year: 2001,
    era: "2000s",
    style: "Animation",
    age: "PG",
    genres: ["Animation", "Adventure", "Family"],
    baseRating: 4.8,
    userRating: 0,
    img: "images/spirited-away.jpg",
    desc: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
    tags: ["Studio Ghibli", "Magical", "Hand-drawn", "Coming of Age", "Visually Stunning"]
  },

  {
    id: 20,
    title: "Interstellar",
    year: 2014,
    era: "2000s",
    style: "Live-Action",
    age: "PG-13",
    genres: ["Sci-Fi", "Drama", "Adventure"],
    baseRating: 4.8,
    userRating: 0,
    img: "images/interstellar.jpg",
    desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft along with a team of researchers to find a new planet.",
    tags: ["Space Exploration", "Emotional", "Time Travel", "Visually Stunning", "Scientific"]
  },

  {
    id: 21,
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    era: "2000s",
    style: "Experimental",
    age: "R",
    genres: ["Drama", "Romance", "Sci-Fi"],
    baseRating: 4.6,
    userRating: 0,
    img: "images/eternal-sunshine.jpg",
    desc: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    tags: ["Surreal", "Memory", "Emotional", "Mind-bending", "Bittersweet"]
  },

  {
    id: 22,
    title: "WALL-E",
    year: 2008,
    era: "2000s",
    style: "Animation",
    age: "G",
    genres: ["Animation", "Adventure", "Family"],
    baseRating: 4.7,
    userRating: 0,
    img: "images/wall-e.jpg",
    desc: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    tags: ["Pixar", "Environmental", "Visual Storytelling", "Heartwarming", "Space"]
  },

  {
    id: 23,
    title: "Man on Wire",
    year: 2008,
    era: "2000s",
    style: "Documentary",
    age: "PG-13",
    genres: ["Documentary", "Biography"],
    baseRating: 4.4,
    userRating: 0,
    img: "images/man-on-wire.jpg",
    desc: "An examination of Philippe Petit's daring high-wire walk between the Twin Towers of New York's World Trade Center in 1974.",
    tags: ["Daring", "Heist-like", "Inspirational", "Documentary", "Suspenseful"]
  },

  {
    id: 24,
    title: "Superbad",
    year: 2007,
    era: "2000s",
    style: "Live-Action",
    age: "R",
    genres: ["Comedy"],
    baseRating: 4.3,
    userRating: 0,
    img: "images/superbad.jpg",
    desc: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    tags: ["Funny", "Coming of Age", "Hilarious", "Party", "Friendship"]
  },

  {
    id: 25,
    title: "No Country for Old Men",
    year: 2007,
    era: "2000s",
    style: "Noir / Dark",
    age: "R",
    genres: ["Crime", "Drama", "Thriller"],
    baseRating: 4.8,
    userRating: 0,
    img: "images/no-country-for-old-men.jpg",
    desc: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    tags: ["Bleak", "Ruthless", "Philosophical", "Neo-western", "Tense"]
  },

  {
    id: 26,
    title: "Finding Nemo",
    year: 2003,
    era: "2000s",
    style: "Animation",
    age: "G",
    genres: ["Animation", "Adventure", "Comedy"],
    baseRating: 4.6,
    userRating: 0,
    img: "images/finding-nemo.jpg",
    desc: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish embarks on a journey to bring him home.",
    tags: ["Pixar", "Underwater", "Family", "Colorful", "Adventure"]
  },

  {
    id: 27,
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    era: "Contemporary",
    style: "Animation",
    age: "PG",
    genres: ["Animation", "Action", "Sci-Fi"],
    baseRating: 4.9,
    userRating: 0,
    img: "images/across-the-spiderverse.jpg",
    desc: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its existence.",
    tags: ["Visually Stunning", "Multiverse", "Stylized Animation", "Superhero", "Innovative"]
  },

  {
    id: 28,
    title: "Blade Runner",
    year: 2017,
    era: "Contemporary",
    style: "Noir / Dark",
    age: "R",
    genres: ["Sci-Fi", "Drama", "Mystery"],
    baseRating: 4.8,
    userRating: 0,
    img: "images/blade-runner.jpg",
    desc: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    tags: ["Visually Stunning", "Cyberpunk", "Slow Burn", "Existential", "Atmospheric"]
  },

  {
    id: 29,
    title: "Everything Everywhere All at Once",
    year: 2022,
    era: "Contemporary",
    style: "Experimental",
    age: "R",
    genres: ["Action", "Adventure", "Comedy"],
    baseRating: 4.8,
    userRating: 0,
    img: "images/everything-everywhere.jpg",
    desc: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes.",
    tags: ["Multiverse", "Absurd", "Philosophical", "Emotional", "Innovative"]
  },

  {
    id: 30,
    title: "Parasite",
    year: 2019,
    era: "Contemporary",
    style: "Live-Action",
    age: "R",
    genres: ["Drama", "Thriller"],
    baseRating: 4.9,
    userRating: 0,
    img: "images/parasite.jpg",
    desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    tags: ["Social Commentary", "Suspenseful", "Masterpiece", "Twist Ending", "Dark Comedy"]
  },

  {
    id: 31,
    title: "Free Solo",
    year: 2018,
    era: "Contemporary",
    style: "Documentary",
    age: "PG-13",
    genres: ["Documentary", "Adventure", "Sport"],
    baseRating: 4.6,
    userRating: 0,
    img: "images/free-solo.jpg",
    desc: "Alex Honnold attempts to become the first person to ever free solo climb El Capitan in Yosemite National Park.",
    tags: ["Breath-taking", "Documentary", "Extreme Sports", "Nature", "Intense"]
  },

  {
    id: 32,
    title: "Soul",
    year: 2020,
    era: "Contemporary",
    style: "Animation",
    age: "PG",
    genres: ["Animation", "Comedy", "Drama"],
    baseRating: 4.7,
    userRating: 0,
    img: "images/soul.jpg",
    desc: "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.",
    tags: ["Existential", "Jazz", "Emotional", "Pixar", "Philosophical"]
  },

  {
    id: 33,
    title: "The Batman",
    year: 2022,
    era: "Contemporary",
    style: "Noir / Dark",
    age: "PG-13",
    genres: ["Action", "Crime", "Drama"],
    baseRating: 4.6,
    userRating: 0,
    img: "images/the-batman.jpg",
    desc: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    tags: ["Gritty", "Detective", "Noir", "Atmospheric", "Rainy"]
  },

  {
    id: 34,
    title: "Oppenheimer",
    year: 2023,
    era: "Contemporary",
    style: "Live-Action",
    age: "R",
    genres: ["Biography", "Drama", "History"],
    baseRating: 4.8,
    userRating: 0,
    img: "images/oppenheimer.jpg",
    desc: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    tags: ["Historical", "Tension", "Intense Score", "Biopic", "Masterpiece"]
  },

  {
    id: 35,
    title: "Guillermo del Toro's Pinocchio",
    year: 2022,
    era: "Contemporary",
    style: "Animation",
    age: "PG",
    genres: ["Animation", "Drama", "Family"],
    baseRating: 4.6,
    userRating: 0,
    img: "images/pinnochio.jpg",
    desc: "A father's wish magically brings a wooden boy to life in Italy, giving him a chance to care for the child.",
    tags: ["Stop-motion", "Dark Fairy Tale", "Emotional", "Artistic", "Poignant"]
  },

  {
    id: 36,
    title: "My Octopus Teacher",
    year: 2020,
    era: "Contemporary",
    style: "Documentary",
    age: "G",
    genres: ["Documentary"],
    baseRating: 4.5,
    userRating: 0,
    img: "images/octopus-teacher.jpg",
    desc: "A filmmaker forges an unusual friendship with an octopus living in a South African kelp forest, learning as the animal shares the mysteries of her world.",
    tags: ["Nature", "Heartwarming", "Ocean Life", "Emotional", "Documentary"]
  }
];

function addNewMovie(movieObject) {
  movieObject.id = movies.length + 1;
  movieObject.userRating = 0;
  movies.push(movieObject);
}