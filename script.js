// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);
            const container = document.getElementById("container");
            let display = "Astronaut Count: " + json.length;
            json.sort(function(a, b) {
                return b.hoursInSpace - a.hoursInSpace;
            });

            for (let i = 0; i < json.length; i++) {
                if (json[i].active) {
                    display += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li class="green">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${json[i].picture}>
            </div>`;
                } else {
                    display += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${json[i].picture}>
            </div>`;
                }
                container.innerHTML = display;
            }
        });
    });
});
