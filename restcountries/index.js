fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
.then((countries)=>{
    document.body.innerHTML=`
    <section class="container">
    <div id="flags" class="row">
    </div>
    </section>`;
    countries.forEach((data) => {
        const flags=document.querySelector("#flags");
        flags.innerHTML+=`
        <div class="col-12 col-sm-6 col-md-3">
        <div class="flag-container">
        <img
        src=${data.flags["png"]}
        class="flag"/>
        <div class="details">
            <h3>${data.name["common"]}</h3>
            <p><b>Population:</b>${data.population}</p>
            <p><b>Region:</b>${data.Region}</p>
            <p><b>Capital:</b>${data.capital}</p>
        </div>
        </div>
        </div>`;
        
    });
});

/*const getBlogs=()=>
{
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.responseType="json";
    xhr.onload=()=>{
        console.log(xhr.response);
        
    };
    xhr.send();
};
getBlogs();*/