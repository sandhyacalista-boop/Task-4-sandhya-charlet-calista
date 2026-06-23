async function getStudent() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/student"
        );

        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h3>Name: ${data.name}</h3>
            <h3>Course: ${data.course}</h3>
        `;

    } catch(error) {

        document.getElementById("result").innerHTML =
        "Error loading data";

        console.log(error);
    }
}

getStudent();