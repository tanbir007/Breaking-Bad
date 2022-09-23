import React, { useEffect, useState } from 'react';
import BlogPost from '../BlogPost/BlogPost';
import './Blog.css'
const Blog = () => {

const [data,setData]=useState([]);
console.log(data);








// fetch('https://api.publicapis.org/entries') //need to work with this api
//     .then(response => response.json())
//     .then(response => console.log(response,"mememem"))
//     .catch(err => console.error(err));



















useEffect(() => {


    fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data=>setData(data))
.catch(err => alert("DATA FETCHING ERROR")
)


},[])

function loadData(data){

console.log(data);
}

    return (
        <div className="data">
            {
                data.slice(0,10).map(d=><BlogPost post={d} key={d.id}/>)
            }
            
        </div>
    );
};

export default Blog;