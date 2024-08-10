const Contact=()=>{
    return(
        <div>
            <h1>
                Contact us ,we will try to solve ur querries
            </h1>
            <form>
                <input placeholder="name" className=" m-4 p-4 border rounded-lg bg-red-400"></input>
                <input placeholder="course" className=" m-4 p-4 border rounded-lg bg-red-400"></input>
            </form>
            <button className="bg-lime-400 p-3 m-3">
                submit
            </button>
        </div>
    );
};
export default Contact;