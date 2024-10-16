(() => {

    // TODO: función para obtener información de una película por Id
    // function getAllMovies(movieId: string) {
    //     console.log({ movieId });
    // }

    function getMovieById(id: string) {
        console.log({ id });
    }

    // TODO: función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    // function getAllMovieActors(id: string) {
    //     console.log({ id });
    // }

    function getMovieActorsById(id: string) {
        console.log({ id });
    }

    // TODO funcion para obtener el bio del actor por el id
    function getActorBioById(id: string) {
        console.log({ id });
    }

    // TODO Crear una película
    interface Movie { title: string; description: string; rating: number; cast: string[] };
    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    // TODO Crea un nuevo actor
    function checkFullName(fullName: string) {
        return true
    }

    function createActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (checkFullName(fullName)) return false;

        console.log('Crear actor');
        return true;

    }

})();




