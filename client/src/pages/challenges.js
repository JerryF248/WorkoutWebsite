export const Challenges = () =>{
    return (
    <div classname=""> 
        <Create />
    </div>
    );
};

const Create = () => {
    return (
            <div className="challenges-container">
            <div className="challenges">
                <h1>Challenges</h1>
                <h3><i>CHALLENGES THAT PUT YOUR FITNESS TO THE TEST</i></h3>
                <br></br><br></br><br></br>
                <h4>Logged in users may complete either a premade challenge or create a <mark className="yellow">personal challenge</mark> from the list below.</h4>
                <br></br><br></br>
                <table className="table table-hover table-dark">
                    <tbody>
                        <tr className="table-secondary">
                            <th>Bench Your Own Body Weight</th>
                            <td>Bench press your body weight for one full rep.</td>
                            <td>Not Completed</td>
                        </tr>
                        <tr className="table-warning">
                            <th>My 1 Month Cardio Challenge</th>
                            <td>Participate in an average-intesity cardio-related excersize every day of a month.</td>
                            <td>Completed</td>
                        </tr>
                        <tr className="table-secondary">
                            <th>db.Name</th>
                            <td>db.desc</td>
                            <td>db.completed</td>
                        </tr>
                    </tbody>
                </table>
                <form className="create-challenge">
                    <h3 style={{color: "white"}}>Create a Personal Challenge</h3>
                    <div clasName="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Challenge Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Challenge Description"/>
                    </div>
                    <button type="submit" className="btn btn-light">Create</button>
                </form>
            </div>
        </div>
    );
};