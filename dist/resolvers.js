import db from './data.js';
export const resolvers = {
    Query: {
        films: () => {
            return db.films;
        },
        film: (parent, args, context, info) => {
            return db.films.find((film) => film.id === args.id);
        },
        directors: () => {
            return db.directors;
        },
        director: (parent, args, context, info) => {
            if (args.id) {
                return db.directors.find((director) => director.id === args.id);
            }
            if (args.name) {
                return db.directors.find((director) => director.name === args.name);
            }
        }
    },
    Film: {
        director: (parent, args, context, info) => {
            return db.directors.find((director) => director.name === parent.director);
        }
    },
    Director: {
        film: (parent, args, context, info) => {
            return db.films.filter((film) => parent.filmIds.includes(film.id));
        }
    }
};
