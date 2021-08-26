let url = 'https://jsonplaceholder.typicode.com/'

const getUsers = () => {
    return fetch(url + 'users')
        .then(value => value.json());
}

const getUser = (id) => {
    return fetch(url + 'users/' + id)
        .then(value => value.json());
}

const getPosts = (id) => {
    return fetch(url + 'users/' + id + '/posts')
        .then(value => value.json());
}

const getPost = (id) => {
    return fetch(url + 'posts/' + id)
        .then(value => value.json());
}

export {getUser, getUsers,getPosts, getPost}
