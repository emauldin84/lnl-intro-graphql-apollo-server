import db from './data.js';
import {GraphQLResolveInfo} from "graphql/type";

export const resolvers = {
    Query: {
        films: () => {
            return db.films;
        },
        film: (parent: {}, args: {id: string}, context: null, info: GraphQLResolveInfo) => {
            return db.films.find((film) => film.id === args.id);
        },
        directors: () => {
            return db.directors;
        },
        director: (parent: {}, args: {id: string, name: string}, context: null, info: GraphQLResolveInfo) => {
            if (args.id) {
                return db.directors.find((director) => director.id === args.id);
            }
            if (args.name) {
                return db.directors.find((director) => director.name === args.name);
            }
        }
    },
    Film: {
        director: (parent: {director: string}, args: {}, context: null, info: GraphQLResolveInfo) => {
            return db.directors.find((director) => director.name === parent.director);
        }
    },
    Director: {
        film: (parent: {filmIds: string[]}, args: {}, context: null, info: GraphQLResolveInfo) => {
            return db.films.filter((film) => parent.filmIds.includes(film.id));
        }
    }
}