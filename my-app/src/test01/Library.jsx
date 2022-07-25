import React from "react";
import Book from "./_Book";

function Library(pros){
    return(
        <div>
            <Book name="처음 만난 자바" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 React" numOfPage={500} />
        </div>

    );
}

export default Library;