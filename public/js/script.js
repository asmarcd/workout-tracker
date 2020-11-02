const trackerBox = $("#trackerBox");

$(function () {
    // Click event for Cardio Button
    $("#cardioBtn").on("click", (event) => {
        trackerBox.innerHTML = "";
        let trackerForm = $(`<form action="/submitCardio" method="post">
        <input type="text" class="form-control" name="name" placeholder="Name e.g. Beach Bike Ride" autofocus>
        <input type="text" class="form-control" name="duration" placeholder="Duration" autofocus>
        <input type="text" class="form-control" name="distance" placeholder="Distance" autofocus>
        <button class="btn btn-lg btn-primary btn-block" id="submitCardio" type="submit">Submit</button>
        </form>
        `);

        trackerBox.append(trackerForm);
    });

    // Click event for Weights Button
    $("#weightsBtn").on("click", () => {
        trackerBox.innerHTML = "";
        let trackerForm = $(`<form action="/submitWeights" method="post">
        <input type="text" class="form-control" name="name" placeholder="Name e.g. Deadlifts" autofocus>
        <input type="text" class="form-control" name="weight" placeholder="Weight Used" autofocus>
        <input type="text" class="form-control" name="reps" placeholder="Number of Reps" autofocus>
        <input type="text" class="form-control" name="sets" placeholder="Number of Sets" autofocus>
        <button class="btn btn-lg btn-primary btn-block" id="submitWeights" type="submit">Submit</button>
        </form>
        `);

        trackerBox.append(trackerForm);
    });

    // Click event for Cardio Submit Button
    $("#submitCardio").on("submit", () => {
        trackerBox.innerHTML = "";
        // request to save info to database via POST and also to display it via GET
    });

    // Click event for Weights Submit Button
    $("#submitWeights").on("submit", () => {
        trackerBox.innerHTML = "";
        // request to save info to database via POST and also to display it via GET
    });

    // Click event for Edit Button
    $(".editBtn").on("click", () => {

    });

});