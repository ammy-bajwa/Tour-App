import React from 'react';
class Form extends React.Component {
    render() {
        return (

            <div className="container-fluid">
                <div className="form">
                    <form action="http://localhost:3000/add" method="POST">
                        <div className="form-group">
                            <label htmlFor="text">note</label>
                            <input type="text" className="form-control" id="note" placeholder="Enter Full Name" name="note" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="picture">picture</label>
                            <input type="file" className="form-control" id="picture" placeholder="upload Photo" name="picture" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="videos">videos:</label>
                            <input type="file" className="form-control " id="videos" placeholder="upload video" name="video" />
                        </div>
                        <button type="submit" className="btn btn-default">Register</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default Form;