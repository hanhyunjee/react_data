import React from "react";

function Book(pros){
    return(
        <div>
            <h1>{`이 책의 이름은 ${pros.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${pros.numOfPage}페이지로 되어 있습니다.`}</h2>
        </div>
    )
}

export default Book;