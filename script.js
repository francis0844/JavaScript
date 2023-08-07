// object literals
let user = {
    name: 'Crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'berlin',
    blogs: ['blog 1', 'blog 2'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out')
    },
    logBlogs: function(){
        // console.log(this.blogs);
        console.log('this user has written:')
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

user.logBlogs();