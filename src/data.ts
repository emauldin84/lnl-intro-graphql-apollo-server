const films = [
    {
        id: '1',
        title: "The Godfather",
        year: "1972",
        genre: "Crime",
        director: "Francis Ford Coppola",
        plot: "...",
        posterUrl: "..."
    },
    {
        id: '2',
        title: "The Godfather: Part II",
        year: "1974",
        genre: "Crime",
        director: "Francis Ford Coppola",
        plot: "...",
        posterUrl: "..."
    },
    {
        id: '3',
        title: "The Shawshank Redemption",
        year: "1994",
        genre: "Drama",
        director: "Frank Darabont",
        plot: "...",
        posterUrl: "..."
    },
    {
        id: '4',
        title: "The Dark Knight",
        year: "2008",
        genre: "Action",
        director: "Christopher Nolan",
        plot: "...",
        posterUrl: "..."
    },
    {
        id: '5',
        title: "Inception",
        year: "2010",
        genre: "Action",
        director: "Christopher Nolan",
        plot: "...",
        posterUrl: "..."
    }
]

const directors = [
    {
        id: '1',
        name: 'Frank Darabont',
        filmIds: ['3']
    },
    {
        id: '2',
        name: 'Francis Ford Coppola',
        filmIds: ['1', '2']
    },
    {
        id: '3',
        name: 'Christopher Nolan',
        filmIds: ['4', '5']
    },
];


export default {
    films,
    directors,
}