

 const About=()=>{
    return(
        <div>
            <h1>
                About
            </h1>
            <h2>
                this is web development web series
            </h2>
        </div>
        
    );
};
export default About;
/**tou cn use this in user compom=nent also , as in class base componeent does not have  hook concept so we use here other methofd to use context..
supose we want to use UserContext here so we will do like this 
<div>
LoggedIn user
<UserContext.consumer>{
(data)=>console.log(data)}
</UserContext.consumer>
</div>*/

