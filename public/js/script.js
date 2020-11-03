const trackerBox = $("#trackerBox");

$(function () {
    // Click event for Cardio Button
    $("#cardioBtn").on("click", (event) => {
        trackerBox.innerHTML = "";
        let trackerForm = $(`<form action="/submitCardio" method="post">
        <input type="text" class="form-control" id="cardioName" name="name" placeholder="Name e.g. Beach Bike Ride" autofocus>
        <input type="text" class="form-control" id="cardioDuration" name="duration" placeholder="Duration" autofocus>
        <input type="text" class="form-control" id = "cardioDistance" name="distance" placeholder="Distance" autofocus>
        <button class="btn btn-lg btn-primary btn-block" id="submitCardio" type="submit">Submit</button>
        </form>
        `);

        trackerBox.append(trackerForm);
    });

    // Click event for Weights Button
    $("#weightsBtn").on("click", () => {
        trackerBox.innerHTML = "";
        let trackerForm = $(`<form action="/submitWeights" method="post">
        <input type="text" class="form-control" id = "weightsName" name="name" placeholder="Name e.g. Deadlifts" autofocus>
        <input type="text" class="form-control" id = "weightsWeight" name="weight" placeholder="Weight Used" autofocus>
        <input type="text" class="form-control" id = "weightsReps" name="reps" placeholder="Number of Reps" autofocus>
        <input type="text" class="form-control" id = "weightsSets" name="sets" placeholder="Number of Sets" autofocus>
        <button class="btn btn-lg btn-primary btn-block" id="submitWeights" type="submit">Submit</button>
        </form>
        `);

        trackerBox.append(trackerForm);
    });

    // Click event for Cardio Submit Button
    $("#submitCardio").on("submit", () => {
        trackerBox.innerHTML = "";
        const cardioWorkout = {
            name: $("#cardioName").val(),
            duration: $("#cardioDuration").val(),
            distance: $("#cardioDistance").val()
        }

        $.ajax({
            method: "POST",
            url: "/submitCardio",
            data: cardioWorkout
        }).then(result => {
            console.log("Database Updated")
        });
    });

    // Click event for Weights Submit Button
    $("#submitWeights").on("submit", () => {
        trackerBox.innerHTML = "";
        const weightsWorkout = {
            name: $("#weightsName").val(),
            weight: $("#weightsWeight").val(),
            reps: $("#weightsReps").val(),
            sets: $("#weightsSets").val()
        }

        $.ajax({
            method: "POST",
            url: "/submitWeights",
            data: weightsWorkout
        }).then(result => {
            console.log("Database Updated")
        });    
    });

    // TODO: Click event for Edit Button
    $(".editBtn").on("click", () => {

    });

});