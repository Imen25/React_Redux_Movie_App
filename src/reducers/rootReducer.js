import {
  ADD_MOVIE,
  SEARCH_MOVIE,
  DELETE_MOVIE,
  SEARCH_BYRATE,
  EDIT_MOVIE,
  GET_MOVIE
} from "../constants/action-types";

const initialState = {
  movies: [
    {
      title: "You",
      src:
        "https://i.pinimg.com/736x/c2/7f/a4/c27fa447b91d34933293f37a0b2f1a89.jpg",
      trailer: "https://www.youtube.com/embed/z2oMwsIW1zQ",
      rank: "5",
      categorie: "Crime, Thriller, Drama",
      synopsis:
        "Joe, the manager of a New York bookstore, becomes obsessed with Beck, a young aspiring writer who shares his passion for books and poetry. Convinced that they are made for each other, he will then use social networks to feed his obsession, constantly know where she is and what she is doing, and try to break down all the obstacles that could stand in the way of their possible romance. Even if it means committing totally crazy acts ...",
      main_actors: [
        {
          src:
            "https://fr.web.img3.acsta.net/c_215_290/medias/nmedia/18/60/02/70/19593081.jpg",
          name: "Penn Badgley"
        },
        {
          src:
            "https://fr.web.img3.acsta.net/pictures/20/01/07/09/52/3012663.jpg",
          name: "victoria Pedretti"
        },
        {
          src:
            "https://fr.web.img5.acsta.net/pictures/19/12/11/14/37/2761645.jpg",
          name: "Ambyr Childers"
        },
        {
          src:
            "https://fr.web.img4.acsta.net/pictures/20/01/07/10/33/1293202.jpg",
          name: "James Scully"
        }
      ]
    },
    {
      title: "Sonic The Hedgehog",
      src:
        "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1573569638/amc-cdn/production/2/movies/56300/56344/PosterDynamic/96202.jpg",
      trailer: "https://www.youtube.com/embed/szby7ZHLnkA",
      rank: "4",
      categorie: "Adventure, Fantasy, Comedy",
      synopsis:
        "Sonic's misadventures, as he attempts to navigate the complexities of life on Earth, alongside his new best friend, Tom Wachowski, a human. Sonic and Tom join forces to try to prevent the terrible Dr. Robotnik from capturing Sonic, who wants to use his immense power to dominate the world.",
      main_actors: [
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/8/8b/Jim_Carrey_2008.jpg",
          name: "Jim Carrey"
        },
        {
          src:
            "https://fr.web.img2.acsta.net/pictures/16/09/28/11/22/188432.jpg",
          name: "James Marsden"
        },
        {
          src:
            "https://fr.web.img5.acsta.net/pictures/16/07/20/16/18/492842.jpg",
          name: "Tika Sumpter"
        },
        {
          src:
            "https://fr.web.img5.acsta.net/pictures/19/11/26/10/59/0062639.jpg",
          name: "Neal Mcdonough"
        }
      ]
    },
    {
      title: "Harley Quinn: Birds of Prey",
      src:
        "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1576256007/amc-cdn/production/2/movies/54400/54416/PosterDynamic/97309.jpg",
      trailer: "https://www.youtube.com/embed/kGM4uYZzfu0",
      rank: "3",
      categorie: "Crime, Adventure, Action",
      synopsis:
        "When Roman Sionis, the most abominable enemy of Gotham, and his faithful acolyte Zsasz decide to attack a certain Cass, the city is combed through to find the trace of the girl. Harley, Chasseuse, Black Canary and Renee Montoya's journeys overlap and this improbable quartet has no choice but to team up to eliminate Roman.",
      main_actors: [
        {
          src:
            "https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people-a-z/margot-robbie/14670940-2-fre-FR/Margot-Robbie.jpg",
          name: "Margot Robbie"
        },
        {
          src:
            "https://i.pinimg.com/originals/f1/a2/5c/f1a25c8100eed0aa63ea0197a332a96b.jpg",
          name: "Mary Elizabeth Winstead"
        },
        {
          src:
            "https://fr.web.img4.acsta.net/pictures/18/07/17/15/29/4417153.jpg",
          name: "Chris Messina"
        },
        {
          src:
            "https://fr.web.img5.acsta.net/pictures/18/01/08/13/51/4841442.jpg",
          name: "Ewan Mcgregor"
        }
      ]
    },
    {
      title: "Blumhouse's Fantasy Island",
      src:
        "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1580385753/amc-cdn/production/2/movies/59100/59079/Poster/285307R1.jpg",
      trailer: "https://www.youtube.com/embed/a6O30nJ02PU",
      rank: "4",
      categorie: "Adventure, Comedy, Fantasy",
      synopsis:
        ' An horrific version of the eponymous cult series of the 1970s, "the fantastic island" tells the story of an island paradise where all desires can be realized. The magical place is governed by the mysterious Mr. Roarke (Michael Peña).',
      main_actors: [
        {
          src:
            "https://fr.web.img5.acsta.net/pictures/15/06/30/12/25/113481.jpg",
          name: "Michael Peña"
        },
        {
          src:
            "https://fr.web.img4.acsta.net/pictures/15/08/11/12/56/043953.jpg",
          name: "Maggie Q"
        },
        {
          src:
            "https://static1.terrafemina.com/articles/2/26/89/22/@/278553-lucy-hale-soiree-american-music-953x0-2.jpg",
          name: "Lucy Hale"
        },
        {
          src:
            "data:image/jpeg;base64,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",
          name: "Austin Stowell"
        }
      ]
    },
    {
      title: "The Photograph",
      src:
        "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1578590562/amc-cdn/production/2/movies/59400/59413/PosterDynamic/98365.jpg",
      trailer: "https://www.youtube.com/embed/BZulYPti89M",
      rank: "5",
      categorie: "Drama, Romance",
      synopsis:
        "Love stories are intertwined between the past and the present.",
      main_actors: [
        {
          src:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/issa-rae-1553548639.jpg?crop=0.587xw:0.881xh;0.342xw,0.119xh&resize=480:*",
          name: "Issa Rae"
        },
        {
          src:
            "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2019/11/lakeith-2-e1573937958710-665x675.jpg",
          name: "Lakeith Stanfield"
        },
        {
          src:
            "https://fr.web.img6.acsta.net/pictures/17/03/15/11/42/006947.jpg",
          name: "Chelsea Peretti"
        },
        {
          src:
            "https://fr.web.img4.acsta.net/pictures/18/12/03/21/48/2201265.jpg",
          name: "Kelvin Harrison Jr"
        }
      ]
    },
    {
      title: "Sammy's Escape" /*A Turtle's Tale 2:   From Paradise*/,
      src: "https://assets.nflxext.com/us/boxshots/hd1080/70271110.jpg",
      trailer: "https://www.youtube.com/embed/uSEVHO_k9Z8",
      rank: "3",
      categorie: "Animation, Adventure, Family",
      synopsis:
        "Sammy and Ray, two sea turtles, have always been friends and lead good lives along a coral reef. One fatal day, they are captured by poachers and sent to a giant aquarium in Dubai. Entertaining tourists does not amuse its hosts, so the Big Boss seahorse works tirelessly on an escape plan.",
      main_actors: [
        {
          src: "https://www.gstatic.com/tv/thumb/persons/2908/2908_v9_ba.jpg",
          name: "Alan Shearman"
        },
        {
          src:
            "data:image/jpeg;base64,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",
          name: "Dino Andrade"
        },
        {
          src:
            "https://v6j5d8j6.stackpathcdn.com/persone-img/big/cinda-adams-1324161.jpg",
          name: "Cinda Adams"
        },
        {
          src:
            "data:image/jpeg;base64,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",
          name: "Chris Andrew Ciulla"
        }
      ]
    },
    {
      title: "Blue My Mind",
      src:
        "https://m.media-amazon.com/images/M/MV5BNmIzZTA4MDYtNTBjYS00MmJhLWE0ZTktNjM1Mjg2NzlhZDg3XkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_SY1000_SX750_AL_.jpg",
      trailer: "https://www.youtube.com/embed/sBijdXcd5hk",
      rank: "3",
      categorie: "Drama, Fantasy",
      synopsis:
        "Aged 15, Mia faces an overwhelming upheaval that challenges her entire existence. Her body changes completely and, even when she desperately tries to block this transformation, she soon realizes that nature is stronger than she is.",
      main_actors: [
        {
          src:
            "https://www.crew-united.com/Media/Images/813/813999/813999.entity.4_3.jpg",
          name: "Luna Wedler"
        },
        {
          src:
            "https://m.media-amazon.com/images/M/MV5BNGQ4M2JlOTYtMWRmZC00NzZmLTg5NGItMzBjYjVhYWM5NmI1XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
          name: "Zoë Pastelle Holthuizen"
        },
        {
          src:
            "https://fr.web.img4.acsta.net/pictures/14/12/01/20/05/425276.jpg",
          name: "Regula Grauwiller"
        },
        {
          src:
            "data:image/jpeg;base64,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",
          name: "Georg Scharegg"
        }
      ]
    }
  ],
  movie: null,
  filtredMovies: [],
  search: "",
  rank: ""
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.movie]
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        search: action.payload,
        filtredMovies: !state.search
          ? state.movies.filter(el => el.title.includes(action.payload))
          : []
      };
    case SEARCH_BYRATE:
      return {
        ...state,
        rank: action.payload,
        filtredMovies: state.movies.filter(el => el.rank >= action.payload)
      };
    case EDIT_MOVIE:
      const {
        title,
        src,
        trailer,
        rank,
        categorie,
        synopsis,
        main_actors
      } = action.payload;
      return {
        ...state,
        movies: state.movies.map((movie, i) =>
          i === action.payload.id
            ? { title, src, trailer, rank, categorie, synopsis, main_actors }
            : movie
        )
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((_, i) => i !== action.id)
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: state.movies.find(movie => movie.title === action.title)
      };

    default:
      return state;
  }
}

export default rootReducer;
