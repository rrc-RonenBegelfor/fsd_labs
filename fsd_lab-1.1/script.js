const footerFunction = () => {
    let footer = document.getElementById("footer");
    const currentYear = new Date().getFullYear();
    footer.innerText += ` ${currentYear}`;
}

const employeeGeneration = () => {
    fetch("./assets/data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    
        const employeeInformationDiv = document.getElementById('employeeInformation')

    
        Object.entries(data).forEach(([department, employees]) => {
            const section = document.createElement('section');
            section.classList.add("department");

            const headingTwo = document.createElement('h2');
            headingTwo.textContent = department;

            section.appendChild(headingTwo);

            const list = document.createElement('ul');

            employees.forEach(employee => {
                const bulletPoint = document.createElement('li');
                bulletPoint.textContent = employee;
                
                list.appendChild(bulletPoint);
            });

            section.appendChild(list);
            employeeInformationDiv.appendChild(section);
        })
    });
}


document.addEventListener("DOMContentLoaded", () => {
    footerFunction();
    employeeGeneration();
});